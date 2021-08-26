"""
postprocess.py (Python 3)

Author   : Tomiko
Created  : Aug 15, 2021
Updated  : Aug 26, 2021
"""

"""
Uses html.parser.HTMLParser to postprocess and re-write the built .html files.

https://docs.python.org/3/library/html.parser.html
"""

import argparse
import logging
import os
import shutil
import sys
import tempfile

from enum import Enum
from html.parser import HTMLParser


## -----------------------------------------------------------------------------


PROG = 'postprocess'


## -----------------------------------------------------------------------------


EXIT_SUCCESS = 0


## -----------------------------------------------------------------------------


EXIT_FAIL = 255


## -----------------------------------------------------------------------------


class Config(object):

    __default_build_basedir = 'build'

    __default_page_dirs = (
        'history',
        'biology',
        'ecology',
        'future',
    )

    __default_top_level_htmls = (
        'index.html',
        '200.html',
        '404.html',
    )

    @staticmethod
    def create():
        return Config()

    def __init__(self):
        self.filepaths = [os.path.join(os.getcwd(), self.__default_build_basedir, filename) for filename in self.__default_top_level_htmls] + [os.path.join(os.getcwd(), self.__default_build_basedir, pagedir, 'index.html') for pagedir in self.__default_page_dirs]


## -----------------------------------------------------------------------------


class HTMLRewritterOptions(object):

    def __init__(self, convert_charrefs=False, defer_scripts=False, preload_stylesheets=False, enable_logging=False):
        self.convert_charrefs = convert_charrefs
        self.defer_scripts = defer_scripts
        self.preload_stylesheets = preload_stylesheets
        self.enable_logging = enable_logging


## -----------------------------------------------------------------------------


def unquote(s):
    return s.replace('"', '').replace("'", '')


## -----------------------------------------------------------------------------


class HTMLUtility(object):

    @classmethod
    def is_stylesheet_link(self, tag, attrs):
        if tag != 'link':
            return False

        has_rel_stylesheet = False
        has_type_text_css = False
        has_href_with_css_ext = False

        for (k, v) in attrs:
            if k == 'rel' and v == 'stylesheet':
                has_rel_stylesheet = True
            elif k == 'type' and v == 'text/css':
                has_type_text_css = True
            elif k == 'href' and v.endswith('.css'):
                has_href_with_css_ext = True

        return all((
            has_rel_stylesheet,
            has_href_with_css_ext,
            # has_type_text_css,
        ))

    @classmethod
    def distinguish_hints_and_attrs(self, attrs):
        tmpHints = set([])
        tmpAttrs = []

        for (k, v) in attrs:
            if v is not None:
                tmpAttrs.append((k, v))
            else:
                tmpHints.add(k)

        return (list(tmpHints), tmpAttrs)


## -----------------------------------------------------------------------------


class HTMLElementTransformRule(object):

    def __init__(self, callback=None):
        self._callback = callback

    def match(self, tag, attrs):
        assert 0, 'To be implemented in subclasses'

    def transform(self, tag, attrs):
        assert 0, 'To be implemented in subclasses'


## -----------------------------------------------------------------------------


class ScriptDeferRule(HTMLElementTransformRule):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def match(self, tag, attrs):
        return tag == 'script' and (attrs is not None and len(attrs) > 0)

    def transform(self, tag, attrs):
        tmpHints, tmpAttrs = HTMLUtility.distinguish_hints_and_attrs(attrs)

        tmpHints = set(tmpHints)
        tmpHints.add('defer')

        return (list(tmpHints), tmpAttrs)


## -----------------------------------------------------------------------------


class StylesheetPreloadRule(HTMLElementTransformRule):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def match(self, tag, attrs):
        return HTMLUtility.is_stylesheet_link(tag, attrs)

    def transform(self, tag, attrs):
        tmpHints, tmpAttrs = HTMLUtility.distinguish_hints_and_attrs(attrs)

        curHints = tmpHints
        curAttrs = []

        for (k, v) in tmpAttrs:
            if k == 'rel' and v == "stylesheet":
                curAttrs.append((k, "preload"))
            elif k == 'type' and v == 'text/css':
                pass
            elif k == 'href' and v.endswith('.css'):
                curAttrs.append((k, v))
            else:
                curAttrs.append((k, v))

        curAttrs.append(("as", "style"))

        if self._callback:
            self._callback(tag, attrs)

        return (list(curHints), curAttrs)


## -----------------------------------------------------------------------------


class NopRule(HTMLElementTransformRule):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def match(self, tag, attrs):
        return True

    def transform(self, tag, attrs):
        tmpHints, tmpAttrs = HTMLUtility.distinguish_hints_and_attrs(attrs)

        return (list(tmpHints), tmpAttrs)


## -----------------------------------------------------------------------------


class HTMLRewritterBase(HTMLParser):

    def __init__(self, opts):
        super().__init__(convert_charrefs=opts.convert_charrefs)
        self._opts = opts

        self._rules = []

        if self._opts.defer_scripts:
            self._rules.append(ScriptDeferRule())

        if self._opts.preload_stylesheets:
            self._rules.append(StylesheetPreloadRule(callback=self._add_processed_stylesheet_link))

        self._rules.append(NopRule())


## -----------------------------------------------------------------------------


class HTMLRewriterV1(HTMLRewritterBase):

    def __init__(self, opts):
        super().__init__(opts=opts)
        self.html = ''
        self._curTag = ''
        self._curAttrs = []
        self._curHints = []
        self._headTags = []

    def handle_decl(self, decl):
        self.html += '<!{decl}>'.format(decl=decl)

    def handle_starttag(self, tag, attrs):
        self._curTag = tag
        self._curAttrs = []

        hints = []

        for rule in self._rules:
            if rule.match(tag, attrs):
                tmpHints, tmpAttrs = rule.transform(tag, attrs)
                hints = tmpHints
                self._curAttrs = tmpAttrs
                break

        self.html += '<{tag}'.format(tag=tag)
        if hints:
            self.html += ' '
            self.html += ' '.join(hints)

        if self._curAttrs:
            self.html += ' '
            self.html += ' '.join(('{k}=\"{v}\"'.format(k=k, v=v) for (k, v) in self._curAttrs))
        self.html += '>'

    def handle_endtag(self, tag):
        if tag == 'head' and self._headTags:
            self.html += ''.join(self._headTags)
            self._headTags = []

        self.html += '</{tag}>'.format(tag=tag)
        self._curTag = ''
        self._curAttrs = []

    def handle_data(self, data):
        self.html += str(data)

    def handle_entityref(self, name):
        self.html += '&{name};'.format(name=name)

    def handle_comment(self, data):
        self.html += '<!--{data}-->'.format(data=data)

    def save(self, output_filepath):
        with open(output_filepath, 'w') as fd:
            fd.write(self.html)
        self.close()

    def _add_processed_stylesheet_link(self, tag, attrs):
        tmpHints = []
        tmpAttrs = []

        tmpHints, tmpAttrs = HTMLUtility.distinguish_hints_and_attrs(attrs)

        tmpHtml = '<{tag}'.format(tag=tag)

        if tmpHints:
            tmpHtml += ' '
            tmpHtml += ' '.join(tmpHints)

        if tmpAttrs:
            tmpHtml += ' '
            tmpHtml += ' '.join(('{k}=\"{v}\"'.format(k=k, v=v) for (k, v) in tmpAttrs))
        tmpHtml += '/>'

        self._headTags.append(tmpHtml)


## -----------------------------------------------------------------------------


class HTMLElementType(Enum):

    ROOT        =   1
    REGULAR     =   2
    DECL        =   3
    DATA        =   4
    ENTITY_REF  =   5
    COMMENT     =   6


## -----------------------------------------------------------------------------


class HTMLElement(object):

    def __init__(self, elementType):
        self._elementType = elementType

    def add_child(self, child):
        assert False, 'Not implemented in base class'


## -----------------------------------------------------------------------------


class HTMLRootElement(HTMLElement):

    ELEMENT_TYPE = HTMLElementType.ROOT

    def __init__(self):
        super().__init__(elementType=self.ELEMENT_TYPE)
        self._children = []

    def add_child(self, child):
        self._children.append(child)

    def serialize(self):
        return ''.join((child.serialize() for child in self._children))


## -----------------------------------------------------------------------------


class HTMLDeclElement(HTMLElement):

    ELEMENT_TYPE = HTMLElementType.DECL

    def __init__(self, name):
        super().__init__(elementType=self.ELEMENT_TYPE)
        self._name = str(name)

    def serialize(self):
        return '<!{decl}>'.format(decl=self._name)


## -----------------------------------------------------------------------------


class HTMLDataElement(HTMLElement):

    ELEMENT_TYPE = HTMLElementType.DATA

    def __init__(self, data):
        super().__init__(elementType=self.ELEMENT_TYPE)
        self._data = str(data)

    def serialize(self):
        return str(self._data)


## -----------------------------------------------------------------------------


class HTMLEntityRefElement(HTMLElement):

    ELEMENT_TYPE = HTMLElementType.ENTITY_REF

    def __init__(self, name):
        super().__init__(elementType=self.ELEMENT_TYPE)
        self._name = str(name)

    def serialize(self):
        return '&{name};'.format(name=self._name)


## -----------------------------------------------------------------------------


class HTMLCommentElement(HTMLElement):

    ELEMENT_TYPE = HTMLElementType.COMMENT

    def __init__(self, data):
        super().__init__(elementType=self.ELEMENT_TYPE)
        self._data = str(data)

    def serialize(self):
        return '<!--{data}-->'.format(data=self._data)


## -----------------------------------------------------------------------------


class HTMLRegularElement(HTMLElement):

    ELEMENT_TYPE = HTMLElementType.REGULAR

    __self_terminating_tags = (
        'meta',
        'link',
    )

    __container_like_tags = (
        'body',
        'div',
        'p',
        'a',
    )

    def __init__(self, tag, hints=[], attrs=[], children=[]):
        super().__init__(elementType=self.ELEMENT_TYPE)
        self._tag = str(tag)
        self._hints = list(hints)
        self._attrs = list(attrs)
        self._children = list(children)

    def add_child(self, child):
        self._children.append(child)

    def serialize(self):
        html = '<{tag}'.format(tag=self._tag)

        if self._hints:
            html += ' '
            html += ' '.join(self._hints)

        if self._attrs:
            html += ' '
            html += ' '.join(('{k}=\"{v}\"'.format(k=k, v=v) for (k, v) in list(self._attrs)))

        if self.is_self_terminating():
            assert not self._children

        if self._children or self._tag in self.__container_like_tags:
            html += '>'
            html += ''.join((child.serialize() for child in self._children))
            html += '</{tag}>'.format(tag=self._tag)
        else:
            if self._tag not in ('meta'):
                html += '/'
            html += '>'

        return html

    def is_self_terminating(self):
        return self._is_self_terminating_tag(self._tag)

    def _is_self_terminating_tag(self, tag):
        return tag in self.__self_terminating_tags


## -----------------------------------------------------------------------------


class HTMLRewriterV2(HTMLRewritterBase):
    """Version 2 of the HTML rewriter implementation (EXPERIMENTAL).

    NOTE:
    Currently this implementation has problems when running on the build
    output of this project. At the moment this is highly EXPERIMENTAL.

    TODO: Make this work.
    """

    def __init__(self, opts):
        super().__init__(opts=opts)
        self._opts = opts
        self._root = HTMLRootElement()
        self._stack = [self._root]
        self._headElements = []

    def handle_decl(self, decl):
        self._stack[-1].add_child(HTMLDeclElement(decl))

    def handle_data(self, data):
        if data and self._stack:
            if isinstance(data, str) and data.isspace():
                return
            self._stack[-1].add_child(HTMLDataElement(data))

    def handle_entityref(self, name):
        self._stack[-1].add_child(HTMLEntityRefElement(name))

    def handle_comment(self, data):
        self._stack[-1].add_child(HTMLCommentElement(data))

    def handle_starttag(self, tag, attrs):
        curAttrs = []

        hints = []

        for rule in self._rules:
            if rule.match(tag, attrs):
                tmpHints, tmpAttrs = rule.transform(tag, attrs)
                hints = tmpHints
                curAttrs = tmpAttrs
                break

        element = HTMLRegularElement(tag=tag, hints=hints, attrs=curAttrs)

        if len(self._stack) > 1:
            if self._prevStartTagEnded:
                self._stack.pop()

        self._prevStartTagEnded = False

        self._stack[-1].add_child(element)

        if self._opts.enable_logging:
            print('Encountering starting tag <{tag}>'.format(tag=tag))

        if not element.is_self_terminating():
            if self._opts.enable_logging:
                print('Pushing tag <{tag}> onto stack'.format(tag=tag))
            self._stack.append(element)

    def handle_endtag(self, tag):
        if tag == 'head' and self._headElements:
            for element in self._headElements:
                self._stack[-1].add_child(element)
            self._headElements = []

        if len(self._stack) > 1 and isinstance(self._stack[-1], HTMLRegularElement) and self._stack[-1]._tag == tag:
            if self._opts.enable_logging:
                print('Popping tag with end tag <{tag}> off stack'.format(tag=tag))
            self._stack.pop()

    def serialize(self):
        return self._root.serialize()

    def save(self, output_filepath):
        with open(output_filepath, 'w') as fd:
            fd.write(self.serialize())
        self.close()

    def _add_processed_stylesheet_link(self, tag, attrs):
        tmpHints, tmpAttrs = HTMLUtility.distinguish_hints_and_attrs(attrs)

        element = HTMLRegularElement(tag=tag, hints=tmpHints, attrs=tmpAttrs)

        self._headElements.append(element)


## -----------------------------------------------------------------------------


"""
NOTE:
As stated above, `HTMLRewriterV2` is highly EXPERIMENTAL
at this point and has problems when running on the build
output of this project. DO NOT USE until it is proven
to work correctly.
"""
HTMLRewriter = HTMLRewriterV1


## -----------------------------------------------------------------------------


class HTMLValidator(HTMLParser):

    class ValidationError(Exception):
        pass

    def __init__(self, convert_charrefs=False):
        super().__init__(convert_charrefs=convert_charrefs)

    def handle_starttag(self, tag, attrs):
        if tag == 'link':
            self._validate_link_tag(tag, attrs)
        elif tag == 'script':
            self._validate_script_tag(tag, attrs)

    @classmethod
    def validate_link_tag(cls, tag, attrs):
        assert tag == 'link', 'Expects <link> tag, but got <{tag}>'.format(tag=tag)

        href_value = None
        as_value = None
        type_value = None
        rel_value = None

        for (k, v) in attrs:
            if k == 'href':
                assert v, 'Expects a non-empty value for attribute \"href\" within <link> tag'
                href_value = str(v)
            elif k == 'as':
                assert v, 'Expects a non-empty value for attribute \"as\" within <link> tag'
                as_value = str(v)
            elif k == 'type':
                assert v, 'Expects a non-empty value for attribute \"type\" within <link> tag'
                type_value = str(v)
            elif k == 'rel':
                assert v, 'Expects a non-empty value for attribute \"rel\" within <link> tag'
                rel_value = str(v)

        if not href_value:
            raise cls.ValidationError('Missing valid \"href\" attribute key-value pair in <link> element.')

        if as_value:
            if as_value == 'style':
                if not href_value.endswith('.css'):
                    raise cls.ValidationError('Value of \"href\" attribute within <link> element with as=\"style\" attribute is not a .css file')
            elif as_value == 'font':
                if not href_value.endswith('.woff2'):
                    raise cls.ValidationError('Value of \"href\" attribute within <link> element with as=\"font\" attribute is not a .woff2 file')
            elif as_value == 'script':
                if not href_value.endswith('.js'):
                    raise cls.ValidationError('Value of \"href\" attribute within <link> element with as=\"script\" attribute is not a .js file')

        if type_value:
            if type_value == 'text/css':
                if not href_value.endswith('.css'):
                    raise cls.ValidationError('Value of \"href\" attribute within <link> element with type=\"text/css\" attribute is not a .css file')
            elif type_value == 'font/woff2':
                if not href_value.endswith('.woff2'):
                    raise cls.ValidationError('Value of \"href\" attribute within <link> element type=\"font/woff2\" is not a .woff2 file')
            elif type_value == 'application/javascript':
                if not href_value.endswith('.js'):
                    raise cls.ValidationError('Value of \"href\" attribute within <link> element type=\"application/javascript\" is not a .js file')

        if rel_value:
            if rel_value == 'stylesheet':
                if not href_value.endswith('.css'):
                    raise cls.ValidationError('Value of \"href\" attribute within <link> element with rel=\"stylesheet\" attribute is not a .css file')
            elif rel_value == 'icon':
                if not href_value.endswith('.ico'):
                    raise cls.ValidationError('Value of \"href\" attribute within <link> element with rel=\"icon\" attribute is not a .ico file')
            elif rel_value == 'manifest':
                if not href_value.endswith('.json'):
                    raise cls.ValidationError('Value of \"href\" attribute within <link> element with rel=\"manifest\" attribute is not a .json file')

    def _validate_link_tag(self, tag, attrs):
        self.validate_link_tag(tag, attrs)

    @classmethod
    def validate_script_tag(cls, tag, attrs):
        assert tag == 'script', 'Expects <script> tag, but got <{script}>'.format(tag=tag)

        src_val = None

        for (k, v) in attrs:
            if k == 'src':
                assert v, 'Expects a non-empty value for attribute \"src\" within <script> tag'
                src_val = str(v)

        # if not src_val:
        #     raise cls.ValidationError('Missing valid \"src\" attribute key-value pair in <script> element.')

        if src_val and not src_val.endswith('.js'):
            raise cls.ValidationError('Value of \"src\" attribute within <script> element is not a .js file')

    def _validate_script_tag(self, tag, attrs):
        self.validate_script_tag(tag, attrs)


## -----------------------------------------------------------------------------


class Runner(object):

    def __init__(self, args, config, logger):
        self.args = args
        self.config = config
        self.logger = logger

    def run(self):
        self.logger.info('File paths to process: {}'.format(self.config.filepaths))

        try:
            for filepath in self.config.filepaths:
                self.process(filepath)
        except Exception as ex:
            self.logger.error(ex)
            self.logger.exception(ex)
            return EXIT_FAIL

        return EXIT_SUCCESS

    def process(self, filepath):
        self.logger.info('>>> Starting process file {filepath}'.format(filepath=filepath))

        if not os.path.exists(filepath) or not os.path.isfile(filepath):
            raise Exception('File does not exist or invalid: {filepath}'.format(filepath=filepath))

        tmp_filepath = self.args.tmp_filepath if self.args.tmp_filepath else str(tempfile.mkstemp()[1])

        self.logger.info('Temporary file path: {tmp_filepath}'.format(tmp_filepath=tmp_filepath))

        opts = HTMLRewritterOptions(defer_scripts=self.args.defer_scripts,
                                    preload_stylesheets=self.args.preload_stylesheets)

        htmlRewriter = HTMLRewriter(opts)

        self.logger.info('Using instance of {}'.format(type(htmlRewriter)))

        with open(filepath, 'r') as fd:
            html = fd.read()
            htmlRewriter.feed(str(html))

        htmlRewriter.save(tmp_filepath)

        self.logger.info('Successfully written to temp file path: {tmp_filepath}'.format(tmp_filepath=tmp_filepath))

        with open(tmp_filepath, 'r') as fd:
            htmlValidator = HTMLValidator()
            htmlValidator.feed(fd.read())

        self.logger.info('Successfully validated output at temp file path: {tmp_filepath}'.format(tmp_filepath=tmp_filepath))

        if self.args.override:
            shutil.copyfile(tmp_filepath, filepath)
            self.logger.info('Copied temp file {tmp_filepath} to {filepath}'.format(tmp_filepath=tmp_filepath, filepath=filepath))

        self.logger.info('<<< Finished process file {filepath}'.format(filepath=filepath))


## -----------------------------------------------------------------------------


def getLogger():
    logger = logging.getLogger(PROG)
    logger.setLevel(logging.INFO)
    streamHandler = logging.StreamHandler()
    streamHandler.setLevel(logging.INFO)
    formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
    streamHandler.setFormatter(formatter)
    logger.addHandler(streamHandler)
    return logger


## -----------------------------------------------------------------------------


def driver(args):
    logger = getLogger()

    config = Config.create()

    logger.info('Arguments: {args}'.format(args=args))

    if args.nop:
        logger.info('Exiting since passed --nop')
        return EXIT_SUCCESS

    runner = Runner(args, config, logger)
    res = runner.run()

    if res == EXIT_SUCCESS:
        logger.info('DONE.')
    else:
        logger.info('Exiting with errors')

    return res


## -----------------------------------------------------------------------------


def main():
    parser = argparse.ArgumentParser(prog=PROG, description='Postprocess built artifacts')
    parser.add_argument('--tmp-filepath', dest='tmp_filepath', action='store', type=str, help='Specify a temporary file path used for postprocessed files.')
    parser.add_argument('--override', dest='override', action='store_true', default=False, help='INTRUSIVE: Copy over original files with processed temp files.')
    parser.add_argument('--nop', dest='nop', action='store_true', default=False, help='Make the invocation a no-op, effectively immediately exit the process right after invocation.')
    parser.add_argument('--defer-scripts', dest='defer_scripts', action='store_true', default=False, help='Generate a "defer" attribute for all <link> elements that refer to script assets.')
    parser.add_argument('--preload-stylesheets', dest='preload_stylesheets', action='store_true', default=False, help='Generate a <link rel=preload ...> element for each stylesheet asset under the top-level <head> element.')
    args = parser.parse_args()

    sys.exit(driver(args))


## -----------------------------------------------------------------------------

if __name__ == '__main__':
    main()
