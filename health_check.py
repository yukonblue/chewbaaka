"""
health_check.py

Author   : Tomiko
Created  : Aug 03, 2020
Updated  : Aug 25, 2020
"""

import argparse
import logging
import sys
import urllib2

from HTMLParser import HTMLParser

## -----------------------------------------------------------------------------


PROG = 'health_check'


## -----------------------------------------------------------------------------


EXIT_SUCCESS = 0


## -----------------------------------------------------------------------------


EXIT_FAIL = 255


## -----------------------------------------------------------------------------


class HTMLHeadParser(HTMLParser):

    def __init__(self, *args, **kwargs):
        HTMLParser.__init__(self, *args, **kwargs)
        self._curTag = ''
        self._curAttrs = None
        self._title = None
        self._metaTags = {}

    def handle_starttag(self, tag, attrs):
        if tag in ('title', 'meta'):
            self._curTag = tag
            self._curAttrs = dict({key:val for (key,val) in attrs})
            self._handle_meta()

    def handle_endtag(self, tag):
        self._curTag = ''
        self._curAttrs = None

    def _handle_meta(self):
        if self._curTag == 'meta':
            if 'charset' in self._curAttrs:
                self._metaTags['charset'] = self._curAttrs['charset']
            elif self._curAttrs['name'] not in self._metaTags:
                self._metaTags[self._curAttrs['name']] = self._curAttrs.get('content', '')

    def handle_data(self, data):
        if self._curTag == 'title':
            self._title = str(data)

    @property
    def title(self):
        return self._title

    @property
    def meta(self):
        return self._metaTags


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


class Check(object):

    def __init__(self, logger, *args, **kwargs):
        super(Check, self).__init__(*args, **kwargs)
        self.logger = logger


## -----------------------------------------------------------------------------

class HTTPStatusCodeCheck(Check):

    def __init__(self, *args, **kwargs):
        super(HTTPStatusCodeCheck, self).__init__(*args, **kwargs)

    def __call__(self, req):
        try:
            resp = urllib2.urlopen(req)
        except urllib2.HTTPError as ex:
            raise ValidationError('Got HTTP status code {}'.format(ex.code))

        return resp


## -----------------------------------------------------------------------------


class HTTPResponseHeadersCheck(Check):

    def __init__(self, *args, **kwargs):
        super(HTTPResponseHeadersCheck, self).__init__(*args, **kwargs)

    EXPECTED_MIN_CONTENT_LENGTH = 1000
    EXPECTED_CONTENT_TYPE       = 'text/html'

    EXPECTED_KEY_VALUE_PAIRS    = [
        {
            'header': 'x-amz-server-side-encryption',
            'value': 'AES256'
        },
        {
            'header': 'strict-transport-security',
            'value': 'max-age=31536000; includeSubDomains'
        },
        {
            'header': 'x-frame-options',
            'value': 'SAMEORIGIN'
        },
        {
            'header': 'x-xss-protection',
            'value': '1; mode=block'
        },
        {
            'header': 'x-content-type-options',
            'value': 'nosniff'
        },
    ]

    def __call__(self, req, resp):
        contentLengthHeaderRawValue = resp.headers.getheader('content-length')
        contentLengthHeaderIntValue = int(contentLengthHeaderRawValue)
        if contentLengthHeaderIntValue < HTTPResponseHeadersCheck.EXPECTED_MIN_CONTENT_LENGTH:
            raise ValidationError('Content length less than {} bytes'.format(HTTPResponseHeadersCheck.EXPECTED_MIN_CONTENT_LENGTH))

        contentTypeHeaderRawValue = resp.headers.getheader('content-type')
        if contentTypeHeaderRawValue != HTTPResponseHeadersCheck.EXPECTED_CONTENT_TYPE:
            raise ValidationError('content-type is not \"{}\"'.format(HTTPResponseHeadersCheck.EXPECTED_CONTENT_TYPE))

        for pair in self.EXPECTED_KEY_VALUE_PAIRS:
            header = pair['header']
            expectedValue = pair['value']
            actualValue = resp.headers.getheader(header)
            if actualValue != expectedValue:
                raise ValidationError('Got value \"{}\" for header \"{}\", but expected \"{}\".'.format(actualValue, header, expectedValue))


## -----------------------------------------------------------------------------


class HTMLHeadCheck(Check):

    def __init__(self, *args, **kwargs):
        super(HTMLHeadCheck, self).__init__(*args, **kwargs)

    EXPECTED_META = {
        'charset'         : 'utf-8',
        'viewport'        : 'width=device-width,initial-scale=1',
        'AdsBot-Google'   : 'noindex'
    }

    EXPECTED_META_BY_URL  =   {
        'https://hope4cheetahs.org': {
            'title': 'Learn about cheetahs',
            'description': 'Learn about cheetahs by exploring the Cheetah Museum at Cheetah Conservation Fund',
            'keywords': []
        },
        'https://hope4cheetahs.org/history': {
            'title': 'History of the cheetah | Learn about cheetahs',
            'description': 'Learn about the history and evolution of the cheetah.',
            'keywords': [
                "cheetah history",
                "cheetah evolution",
                "cheetah lineage",
                "cheetah population",
                "cheetah range",
            ]
        },
        'https://hope4cheetahs.org/biology': {
            'title': "Cheetah biology | Learn about cheetahs",
            'description': "Learn about the biology and anatomy of the cheetah, and what makes it the fastest land animal.",
            'keywords': [
                "cheetah biology",
                "cheetah physiology",
                "cheetah speed",
                "cheetah lifecycle",
                "cheetah mortality",
            ]
        },
        'https://hope4cheetahs.org/ecology': {
            'title': "Cheetah ecosystem and habitat | Learn about cheetahs",
            'description': "Learn about the ecosystem and habitats of the cheetah, and sustainable farming practices that protect their habitats.",
            'keywords': [
                "cheetah ecosystem",
                "cheetah habitat",
                "cheetah niche",
                "Namibia biome"
            ]
        },
        'https://hope4cheetahs.org/future': {
            'title': "Future of the cheetah | Learn about cheetahs",
            'description': "Learn about the future of the cheetahs, and conservation actions for saving them from extinction.",
            'keywords': [
                "cheetah status",
                "cheetah future",
                "illegal cheetah trafficking",
                "livestock guarding dog",
            ]
        }
    }

    EXPECTED_GLOBAL_META_KEYWORDS = [
        "cheetah",
        "cheetah conservation",
        "cheetah facts",
        "learn about cheetahs",
        "hope for cheetahs",
        "Cheetah Conservation Fund",
        "wildlife conservation",
        "conservation"
    ]

    def __call__(self, req, resp):
        html = resp.read()

        htmlParser = HTMLHeadParser()
        htmlParser.feed(html)

        expectedMeta = HTMLHeadCheck.EXPECTED_META_BY_URL[req.get_full_url()]

        expectedTitle = expectedMeta['title']
        expectedDescription = expectedMeta['description']
        expectedKeywordString = ', '.join(expectedMeta['keywords'] + HTMLHeadCheck.EXPECTED_GLOBAL_META_KEYWORDS)

        if htmlParser.title != expectedTitle:
            raise ValidationError('Unexpected HTML title: \"{title}\"'.format(title=htmlParser.title))
        else:
            self.logger.info('Found expected HTML title: \"{title}\"'.format(title=htmlParser.title))

        if htmlParser.meta.get('description') != expectedDescription:
            raise ValidationError('Unexpected HTML meta description: \"{description}\"'.format(description=htmlParser.meta.get('description')))
        else:
            self.logger.info('Found expected HTML meta description: \"{description}\"'.format(description=htmlParser.meta.get('description')))

        if htmlParser.meta.get('keywords') != expectedKeywordString:
            raise ValidationError('Unexpected HTML meta keywords: \"{keywords}\". Expected \"{expected}\".'.format(
                keywords=htmlParser.meta.get('keywords'),
                expected=expectedKeywordString))
        else:
            self.logger.info('Found expected HTML meta keywords: \"{keywords}\"'.format(keywords=htmlParser.meta.get('keywords')))

        for key, expected in HTMLHeadCheck.EXPECTED_META.iteritems():
            value = htmlParser.meta.get(key)
            if not value:
                raise ValidationError('Did not find meta with name \"{name}\" in response.'.format(name=key))
            elif value != expected:
                raise ValidationError('Unexpected meta key for name \"{name}\": \"{val}\"'.format(name=key, val=value))


## -----------------------------------------------------------------------------


class Runner(object):

    checks = [
        HTTPResponseHeadersCheck,
        HTMLHeadCheck
    ]

    def __init__(self, args, config, logger):
        self.args = args
        self.config = config
        self.logger = logger

    def run(self):
        hasErrors = False
        urlsToCheck = [self.config.homePageUrl] + self.config.contentPageUrls
        for url in urlsToCheck:
            try:
                self.runChecksOnUrl(url)
                self.logger.info("[PASS]")
            except ValidationError as ex:
                hasErrors = True
                self.logger.error(ex)
                break

        return EXIT_FAIL if hasErrors else EXIT_SUCCESS

    def runChecksOnUrl(self, url):
        self.logger.info('Checking URL: \"{}\" ...'.format(url))

        req = urllib2.Request(url)

        # Need to start with `HTTPStatusCodeCheck` to get the response.
        resp = HTTPStatusCodeCheck(self.logger)(req)

        self.logger.info('Response headers: {headers}'.format(headers=resp.headers))

        for check in Runner.checks:
            check(self.logger)(req, resp)


## -----------------------------------------------------------------------------


def driver(args):
    logger = getLogger()

    config = Config.create()
    logger.info('Config: {config}'.format(config=config))

    runner = Runner(args, config, logger)
    res = runner.run()

    if res == EXIT_SUCCESS:
        logger.info('All checks pass.')
    else:
        logger.info('Exiting with errors')

    return res


## -----------------------------------------------------------------------------


def main():
    parser = argparse.ArgumentParser(prog=PROG, description='Site health check utility.')
    parser.add_argument('--bail-on-first-error', '-b', dest='bail_on_first_error', action='store_true', default=False, help='Bail on first error encountered.')

    args = parser.parse_args()

    sys.exit(driver(args))


## -----------------------------------------------------------------------------

if __name__ == '__main__':
    main()
