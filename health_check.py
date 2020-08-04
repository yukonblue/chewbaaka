"""
health_check.py

Author   : Tomiko
Created  : Aug 03, 2020
Updated  : Aug 03, 2020
"""

import argparse
import logging
import sys
import urllib2


## -----------------------------------------------------------------------------


PROG = 'health_check'


## -----------------------------------------------------------------------------


EXIT_SUCCESS = 0


## -----------------------------------------------------------------------------


class Config(object):

    __config = {
      'domain'    :   'hope4cheetahs.org',
      'protocol'  :   'https',
      'urls'      :   [
        '/history',
        '/biology',
        '/ecology',
        '/future',
      ]
    }

    @staticmethod
    def create():
        return Config()

    def __init__(self):
        homePageUrl = '{protocol}://{domain}'.format(protocol=Config.__config['protocol'],
                                                      domain=Config.__config['domain'])
        self._config = {
            'homePageUrl': homePageUrl,
            'contentPageUrls': ['{}{}'.format(homePageUrl, url) for url in Config.__config['urls']]
        }

    @property
    def homePageUrl(self):
        return self._config['homePageUrl']

    @property
    def contentPageUrls(self):
        return self._config['contentPageUrls']

    def __repr__(self):
        return str(self._config)


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


class ValidationError(Exception):
    pass


## -----------------------------------------------------------------------------


class HTTPStatusCodeCheck(object):

    def __call__(self, req):
        try:
            resp = urllib2.urlopen(req)
        except urllib2.HTTPError as ex:
            raise ValidationError('Got HTTP status code {}'.format(ex.code))

        return resp


## -----------------------------------------------------------------------------


class HTTPResponseHeadersCheck(object):

    EXPECTED_MIN_CONTENT_LENGTH = 1000
    EXPECTED_CONTENT_TYPE = 'text/html'

    def __call__(self, req, resp):
        contentLengthHeaderRawValue = resp.headers.getheader('content-length')
        contentLengthHeaderIntValue = int(contentLengthHeaderRawValue)
        if contentLengthHeaderIntValue < HTTPResponseHeadersCheck.EXPECTED_MIN_CONTENT_LENGTH:
            raise ValidationError('Content length less than {} bytes'.format(HTTPResponseHeadersCheck.EXPECTED_MIN_CONTENT_LENGTH))

        contentTypeHeaderRawValue = resp.headers.getheader('content-type')
        if contentTypeHeaderRawValue != HTTPResponseHeadersCheck.EXPECTED_CONTENT_TYPE:
            raise ValidationError('content-type is not \"{}\"'.format(HTTPResponseHeadersCheck.EXPECTED_CONTENT_TYPE))


## -----------------------------------------------------------------------------


class Runner(object):

    checks = [
        HTTPResponseHeadersCheck
    ]

    def __init__(self, args, config, logger):
        self.args = args
        self.config = config
        self.logger = logger

    def run(self):
        urlsToCheck = [self.config.homePageUrl] + self.config.contentPageUrls
        for url in urlsToCheck:
            try:
                self.runChecksOnUrl(url)
                self.logger.info("[PASS]")
            except ValidationError as ex:
                self.logger.error(ex)
                if self.args.bail_on_first_error:
                    raise ex

    def runChecksOnUrl(self, url):
        self.logger.info('Checking URL: \"{}\" ...'.format(url))

        req = urllib2.Request(url)

        # Need to start with `HTTPStatusCodeCheck` to get the response.
        resp = HTTPStatusCodeCheck()(req)

        for check in Runner.checks:
            check()(req, resp)


## -----------------------------------------------------------------------------


def driver(args):
    logger = getLogger()

    config = Config.create()
    logger.info('Config: {config}'.format(config=config))

    runner = Runner(args, config, logger)
    runner.run()

    return EXIT_SUCCESS


## -----------------------------------------------------------------------------


def main():
    parser = argparse.ArgumentParser(prog=PROG, description='Site health check utility.')
    parser.add_argument('--bail-on-first-error', '-b', dest='bail_on_first_error', action='store_true', default=False, help='Bail on first error encountered.')

    args = parser.parse_args()

    sys.exit(driver(args))


## -----------------------------------------------------------------------------

if __name__ == '__main__':
    main()
