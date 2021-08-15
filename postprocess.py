"""
postprocess.py (Python 3)

Author   : Tomiko
Created  : Aug 15, 2021
Updated  : Aug 15, 2021
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

    @staticmethod
    def create():
        return Config()

    def __init__(self):
        self.filepaths = [os.path.join(os.getcwd(), self.__default_build_basedir, pagedir, 'index.html') for pagedir in self.__default_page_dirs]


## -----------------------------------------------------------------------------


class HTMLRewriter(HTMLParser):

    def __init__(self, output_filepath):
        super().__init__(convert_charrefs=False)
        self.output_filepath = output_filepath
        self.html = ''
        self._curTag = ''
        self._curAttrs = []
        self._curHints = []

    def handle_decl(self, decl):
        self.html += '<!{decl}>'.format(decl=decl)

    def handle_starttag(self, tag, attrs):
        self._curTag = tag
        self._curAttrs = []#dict({key:val for (key,val) in attrs})

        hints = []

        if tag == 'script':
            hints.append('defer')

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
        self.html += '</{tag}>'.format(tag=tag)
        self._curTag = ''
        self._curAttrs = []

    def handle_data(self, data):
        self.html += str(data)

    def handle_entityref(self, name):
        self.html += '&{name};'.format(name=name)

    def handle_comment(self, data):
        self.html += '<!--{data}-->'.format(data=data)

    def save(self):
        with open(self.output_filepath, 'w') as fd:
            fd.write(self.html)


## -----------------------------------------------------------------------------


class Runner(object):

    def __init__(self, args, config, logger):
        self.args = args
        self.config = config
        self.logger = logger

    def run(self):
        try:
            for filepath in self.config.filepaths:
                self.process(filepath)
        except ex as Exception:
            self.logger.error(ex)
            self.logger.exception(ex)
            return EXIT_FAIL

        return EXIT_SUCCESS

    def process(self, filepath):
        self.logger.info('>>> Starting process file {filepath}'.format(filepath=filepath))

        tmp_filepath = self.args.tmp_filepath if self.args.tmp_filepath else str(tempfile.mkstemp()[1])

        self.logger.info('Temporary file path: {tmp_filepath}'.format(tmp_filepath=tmp_filepath))

        htmlRewriter = HTMLRewriter(tmp_filepath)

        with open(filepath, 'r') as fd:
            html = fd.read()
            htmlRewriter.feed(str(html))

        htmlRewriter.save()

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
    parser = argparse.ArgumentParser(prog='', description='')
    parser.add_argument('--tmp-filepath', dest='tmp_filepath', action='store', type=str, help='Specify a temporary file path used for postprocessed files.')
    parser.add_argument('--override', dest='override', action='store_true', default=False, help='INTRUSIVE: Copy over original files with processed temp files.')
    parser.add_argument('--nop', dest='nop', action='store_true', default=False, help='Make the invocation a no-op, effectively immediately exit the process right after invocation.')

    args = parser.parse_args()

    sys.exit(driver(args))


## -----------------------------------------------------------------------------

if __name__ == '__main__':
    main()
