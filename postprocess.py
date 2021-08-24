"""
postprocess.py (Python 3)

Author   : Tomiko
Created  : Aug 15, 2021
Updated  : Aug 24, 2021
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


def unquote(s):
    return s.replace('"', '').replace("'", '')


## -----------------------------------------------------------------------------


class HTMLRewriter(HTMLParser):

    def __init__(self):
        super().__init__(convert_charrefs=False)
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

        if tag == 'script' and (attrs is not None and len(attrs) > 0):
            hints.append('defer')

        if self._is_stylesheet_link(tag, attrs):
            for i in range(len(attrs)):
                kv = attrs[i]
                k = kv[0]
                v = kv[1]
                if k == 'rel' and unquote(v) == "stylesheet":
                    self._curAttrs.append((k, "preload"))
                elif k == 'type' and unquote(v) == 'text/css':
                    pass
                elif k == 'href' and unquote(v).endswith('.css'):
                    self._curAttrs.append((k, v))
                else:
                    self._curAttrs.append((k, v))

            self._curAttrs.append(("as", "style"))

            self._add_processed_stylesheet_link(tag, attrs)
        else:
            for i in range(len(attrs)):
                kv = attrs[i]
                k = kv[0]
                v = kv[1]
                if v is not None:
                    self._curAttrs.append((k, v))
                else:
                    hints.append(k)

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

    def _is_stylesheet_link(self, tag, attrs):
        if tag != 'link':
            return False

        has_rel_stylesheet = False
        has_type_text_css = False
        has_href_with_css_ext = False

        for i in range(len(attrs)):
            kv = attrs[i]
            k = kv[0]
            v = kv[1]
            if k == 'rel' and unquote(v) == "stylesheet":
                has_rel_stylesheet = True
            elif k == 'type' and unquote(v) == 'text/css':
                has_type_text_css = True
            elif k == 'href' and unquote(v).endswith('.css'):
                has_href_with_css_ext = True

        return all((
            has_rel_stylesheet,
            has_href_with_css_ext,
            # has_type_text_css,
        ))

    def _add_processed_stylesheet_link(self, tag, attrs):
        tmpHints = []
        tmpAttrs = []

        for i in range(len(attrs)):
            kv = attrs[i]
            k = kv[0]
            v = kv[1]
            if v is not None:
                tmpAttrs.append((k, v))
            else:
                tmpHints.append(k)

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

        htmlRewriter = HTMLRewriter()

        with open(filepath, 'r') as fd:
            html = fd.read()
            htmlRewriter.feed(str(html))

        htmlRewriter.save(tmp_filepath)

        self.logger.info('Successfully written to temp file path: {tmp_filepath}'.format(tmp_filepath=tmp_filepath))

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

    args = parser.parse_args()

    sys.exit(driver(args))


## -----------------------------------------------------------------------------

if __name__ == '__main__':
    main()
