"""
postprocess_test.py

Author   : Tomiko
Created  : Aug 15, 2021
Updated  : Aug 28, 2021
"""

import unittest

from postprocess import HTMLDeclElement, HTMLDataElement, HTMLEntityRefElement,\
                        HTMLCommentElement, HTMLRegularElement,\
                        HTMLRewritterOptions, HTMLUtility,\
                        ScriptDeferRule, StylesheetPreloadRule, ResourceLinkRule,\
                        HTMLRewriterV1, HTMLRewriterV2,\
                        HTMLValidator


## -----------------------------------------------------------------------------


class TestHTMLUtility(unittest.TestCase):

    def testIsStyleSheetLink(self):
        tag = 'link'
        attrs = (
            ('rel', 'stylesheet'),
            ('type', 'text/css'),
            ('href', './style.css'),
        )

        self.assertTrue(HTMLUtility.is_stylesheet_link(tag, attrs))

        tag = 'link'
        attrs = (
            ('rel', 'stylesheet'),
            ('href', './style.css'),
        )

        self.assertTrue(HTMLUtility.is_stylesheet_link(tag, attrs))

        attrs = (
            ('rel', 'stylesheet'),
            ('type', 'text/css'),
            ('href', './script.js'),
        )

        self.assertFalse(HTMLUtility.is_stylesheet_link(tag, attrs))

        attrs = (
            ('rel', 'stylesheet'),
            ('type', 'text/css'),
        )

        self.assertFalse(HTMLUtility.is_stylesheet_link(tag, attrs))

    def testDistinguishHintsAndAttrs(self):
        attrs = (
            ('rel', 'stylesheet'),
            ('type', 'text/css'),
            ('href', './style.css'),
            ('defer', None),
            ('preload', None),
        )

        tmpHints, tmpAttrs = HTMLUtility.distinguish_hints_and_attrs(attrs)

        self.assertEqual(set(['preload', 'defer']), set(tmpHints))
        self.assertEqual([
                            ('rel', 'stylesheet'),
                            ('type', 'text/css'),
                            ('href', './style.css')
                        ],
                        tmpAttrs)


## -----------------------------------------------------------------------------


class TestScriptDeferRule(unittest.TestCase):

    def testRuleWithMatchingCase(self):
        tag = 'script'
        attrs = [('href', './script.js')]

        rule = ScriptDeferRule()

        self.assertTrue(rule.match(tag, attrs))

        tmpHints, tmpAttrs = rule.transform(tag, attrs)

        self.assertEqual(set(['defer']), set(tmpHints))
        self.assertEqual([
                            ('href', './script.js')
                        ],
                        tmpAttrs)

    def testRuleWithMatchingCase2(self):
        tag = 'script'
        attrs = [('type', 'script/js')]

        rule = ScriptDeferRule()

        self.assertTrue(rule.match(tag, attrs))

        tmpHints, tmpAttrs = rule.transform(tag, attrs)

        self.assertEqual(set(['defer']), set(tmpHints))
        self.assertEqual([
                            ('type', 'script/js')
                        ],
                        tmpAttrs)

    def testRuleWithNonMatchingCase(self):
        tag = 'script'
        attrs = []

        rule = ScriptDeferRule()

        self.assertFalse(rule.match(tag, attrs))


## -----------------------------------------------------------------------------


class TestStylesheetPreloadRule(unittest.TestCase):

    def testRuleWithMatchingCase(self):
        tag = 'link'
        attrs = (
            ('rel', 'stylesheet'),
            ('href', './style.css'),
        )

        rule = StylesheetPreloadRule()

        self.assertTrue(rule.match(tag, attrs))

        tmpHints, tmpAttrs = rule.transform(tag, attrs)

        self.assertEqual(set([]), set(tmpHints))
        self.assertEqual([
                            ('rel', 'preload'),
                            ('href', './style.css'),
                            ('as', 'style')
                        ],
                        tmpAttrs)

    def testRuleWithMatchingCase2(self):
        tag = 'link'
        attrs = (
            ('rel', 'stylesheet'),
            ('href', './style.css'),
            ('type', 'text/css'),
        )

        rule = StylesheetPreloadRule()

        self.assertTrue(rule.match(tag, attrs))

        tmpHints, tmpAttrs = rule.transform(tag, attrs)

        self.assertEqual(set([]), set(tmpHints))
        self.assertEqual([
                            ('rel', 'preload'),
                            ('href', './style.css'),
                            ('as', 'style')
                        ],
                        tmpAttrs)

    def testRuleWithNonMatchingCase(self):
        tag = 'link'
        attrs = (
            ('rel', 'script'),
            ('href', './style.css'),
        )

        rule = ScriptDeferRule()

        self.assertFalse(rule.match(tag, attrs))

    def testRuleWithNonMatchingCase2(self):
        tag = 'link'
        attrs = (
            ('rel', 'stylesheet'),
            ('href', './script.js'),
        )

        rule = ScriptDeferRule()

        self.assertFalse(rule.match(tag, attrs))


## -----------------------------------------------------------------------------


class TestResourceLinkRule(unittest.TestCase):

    def testRuleWithMatchingCase(self):
        tag = 'link'
        attrs = (
            ('rel', 'preload'),
            ('as', 'font'),
            ('href', 'font.woff2'),
        )

        rule = ResourceLinkRule(target_link_as='font', target_href_ext='.woff2')

        self.assertTrue(rule.match(tag, attrs))

        tmpHints, tmpAttrs = rule.transform(tag, attrs)

        self.assertEqual(set([]), set(tmpHints))
        self.assertEqual([
                            ('rel', 'preload'),
                            ('as', 'font'),
                            ('href', '/font.woff2'),
                        ],
                        tmpAttrs)

    def testRuleWithNonMatchingCase(self):
        """Attribute list does not have rel=preload pair.
        """
        tag = 'link'
        attrs = (
            ('as', 'font'),
            ('href', 'font.woff2'),
        )

        rule = ResourceLinkRule(target_link_as='font', target_href_ext='.woff2')

        self.assertFalse(rule.match(tag, attrs))

    def testRuleWithNonMatchingCase2(self):
        """Value of 'as' attribute does not match.
        """
        tag = 'link'
        attrs = (
            ('rel', 'preload'),
            ('as', 'font'),
            ('href', 'font.woff2'),
        )

        rule = ResourceLinkRule(target_link_as='script', target_href_ext='.woff2')

        self.assertFalse(rule.match(tag, attrs))

    def testRuleWithNonMatchingCase3(self):
        """Extension of 'href' attribute value does not match.
        """
        tag = 'link'
        attrs = (
            ('rel', 'preload'),
            ('as', 'font'),
            ('href', 'font.woff2'),
        )

        rule = ResourceLinkRule(target_link_as='font', target_href_ext='.woff')

        self.assertFalse(rule.match(tag, attrs))


## -----------------------------------------------------------------------------


class TestHTMLRewriterV1(unittest.TestCase):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.maxDiff = None

    def testRewriteWithSimpleHTML(self):
        html = """
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta content="width=device-width,initial-scale=1" name="viewport">
                    <link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet">
                    <script src="/static/js/1.863c462e.chunk.js" charset="utf-8">
                    <style>
                        .body {
                            font-color: #red;
                        }
                    </style>
                    <script>
                        console.log("Hello, world");
                    </script>
                </head>
                <body>
                    <div>
                        <p>&lt; Hello, world!</p>
                    <div>
                </body>
            </html>
        """

        expectedHtml = """
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta content="width=device-width,initial-scale=1" name="viewport">
                    <link href="/static/css/main.af3c9481.chunk.css" rel="preload" as="style">
                    <script defer src="/static/js/1.863c462e.chunk.js" charset="utf-8">
                    <style>
                        .body {
                            font-color: #red;
                        }
                    </style>
                    <script>
                        console.log("Hello, world");
                    </script>
                <link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet"/></head>
                <body>
                    <div>
                        <p>&lt; Hello, world!</p>
                    <div>
                </body>
            </html>
        """

        self._check(html, expectedHtml)

    def testRewriteWithHeadOnly(self):
        html = """
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta content="width=device-width,initial-scale=1" name="viewport">
                    <link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet">
                    <script src="/static/js/1.863c462e.chunk.js" charset="utf-8">
                    </script>
                </head>
            </html>
        """

        expectedHtml = """
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta content="width=device-width,initial-scale=1" name="viewport">
                    <link href="/static/css/main.af3c9481.chunk.css" rel="preload" as="style">
                    <script defer src="/static/js/1.863c462e.chunk.js" charset="utf-8">
                    </script>
                <link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet"/></head>
            </html>
        """

        self._check(html, expectedHtml)

    def testRewriteWithComplexInlineStyle(self):
        html = """
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta content="width=device-width,initial-scale=1" name="viewport">
                    <link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet">
                </head>
                <body>
                    <div class="ImageSlideImgElementContainer" style="max-width:326px;background-image:url(data:image/png;base64,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)"><img alt="Pre 1900" src="data:image/png;base64,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" class="ImageSlideImgElement" data-testid="ImageSlideComponentImgPartTestId"></div>
                </body>
            </html>
        """

        expectedHtml = """
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta content="width=device-width,initial-scale=1" name="viewport">
                    <link href="/static/css/main.af3c9481.chunk.css" rel="preload" as="style">
                <link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet"/></head>
                <body>
                    <div class="ImageSlideImgElementContainer" style="max-width:326px;background-image:url(data:image/png;base64,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)"><img alt="Pre 1900" src="data:image/png;base64,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" class="ImageSlideImgElement" data-testid="ImageSlideComponentImgPartTestId"></div>
                </body>
            </html>
        """

        self._check(html, expectedHtml)

    def testRewriteWithStartEndTag(self):
        html = """
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta content="width=device-width,initial-scale=1" name="viewport">
                    <link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet">
                    <script src="/static/js/1.863c462e.chunk.js" charset="utf-8">
                    </script>
                </head>
                <body>
                     <img src="hello.jpg" alt="hello" width="1024" height="768">
                </body>
            </html>
        """

        expectedHtml = """
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta content="width=device-width,initial-scale=1" name="viewport">
                    <link href="/static/css/main.af3c9481.chunk.css" rel="preload" as="style">
                    <script defer src="/static/js/1.863c462e.chunk.js" charset="utf-8">
                    </script>
                <link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet"/></head>
                <body>
                     <img src="hello.jpg" alt="hello" width="1024" height="768">
                </body>
            </html>
        """

        self._check(html, expectedHtml)

    def testRewriteWithInBodyScript(self):
        html = """
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta content="width=device-width,initial-scale=1" name="viewport">
                    <link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet">
                    <script src="/static/js/1.863c462e.chunk.js" charset="utf-8">
                    </script>
                </head>
                <body>
                    <div>
                        <h1>Hello, world!</h1>
                    </div>
                    <script>
                        !function(e){function t(t){for(var n,o,u=t[0],f=t[1],i=t[2],l=0,d=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in f)Object.prototype.hasOwnProperty.call(f,n)&&(e[n]=f[n]);for(s&&s(t);d.length;)d.shift()();return c.push.apply(c,i||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,o=1;o<r.length;o++){var f=r[o];0!==a[f]&&(n=!1)}n&&(c.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={6:0},a={6:0},c=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{0:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,17:1,18:1}[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="static/css/"+({}[e]||e)+"."+{0:"ebc560db",1:"31d6cfe0",2:"31d6cfe0",3:"31d6cfe0",4:"31d6cfe0",8:"49e204d2",9:"11680288",10:"4696bd2f",11:"4a940f59",12:"18012030",13:"736146bb",14:"fcb4c333",15:"c2c1d5b1",16:"5064f383",17:"ae0b7fe0",18:"ae0b7fe0",19:"31d6cfe0"}[e]+".chunk.css",a=u.p+n,c=document.getElementsByTagName("link"),f=0;f<c.length;f++){var i=(s=c[f]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(i===n||i===a))return t()}var l=document.getElementsByTagName("style");for(f=0;f<l.length;f++){var s;if((i=(s=l[f]).getAttribute("data-href"))===n||i===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete o[e],d.parentNode.removeChild(d),r(c)},d.href=a,document.getElementsByTagName("head")[0].appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var c,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=function(e){return u.p+"static/js/"+({}[e]||e)+"."+{0:"2e9a64df",1:"863c462e",2:"80991755",3:"4e82bf42",4:"4c55a10d",8:"f9d66c93",9:"e961b3d3",10:"0eb75c64",11:"7d596c2c",12:"63715c01",13:"6895e8cb",14:"5c906f64",15:"25022fd1",16:"9b21977d",17:"e6eef61a",18:"28aa31a1",19:"1c2d10c4"}[e]+".chunk.js"}(e);var i=new Error;c=function(t){f.onerror=f.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,r[1](i)}a[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:f})}),12e4);f.onerror=f.onload=c,document.head.appendChild(f)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var f=this.webpackJsonpchewbaaka=this.webpackJsonpchewbaaka||[],i=f.push.bind(f);f.push=t,f=f.slice();for(var l=0;l<f.length;l++)t(f[l]);var s=i;r()}([])
                    </script>
                    <script src="/static/js/7.5b7708af.chunk.js">
                    </script>
                    <script src="/static/js/main.81d0d1cf.chunk.js">
                    </script>
                </body>
            </html>
        """

        expectedHtml = """
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta content="width=device-width,initial-scale=1" name="viewport">
                    <link href="/static/css/main.af3c9481.chunk.css" rel="preload" as="style">
                    <script defer src="/static/js/1.863c462e.chunk.js" charset="utf-8">
                    </script>
                <link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet"/></head>
                <body>
                    <div>
                        <h1>Hello, world!</h1>
                    </div>
                    <script>
                        !function(e){function t(t){for(var n,o,u=t[0],f=t[1],i=t[2],l=0,d=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in f)Object.prototype.hasOwnProperty.call(f,n)&&(e[n]=f[n]);for(s&&s(t);d.length;)d.shift()();return c.push.apply(c,i||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,o=1;o<r.length;o++){var f=r[o];0!==a[f]&&(n=!1)}n&&(c.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={6:0},a={6:0},c=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{0:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,17:1,18:1}[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="static/css/"+({}[e]||e)+"."+{0:"ebc560db",1:"31d6cfe0",2:"31d6cfe0",3:"31d6cfe0",4:"31d6cfe0",8:"49e204d2",9:"11680288",10:"4696bd2f",11:"4a940f59",12:"18012030",13:"736146bb",14:"fcb4c333",15:"c2c1d5b1",16:"5064f383",17:"ae0b7fe0",18:"ae0b7fe0",19:"31d6cfe0"}[e]+".chunk.css",a=u.p+n,c=document.getElementsByTagName("link"),f=0;f<c.length;f++){var i=(s=c[f]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(i===n||i===a))return t()}var l=document.getElementsByTagName("style");for(f=0;f<l.length;f++){var s;if((i=(s=l[f]).getAttribute("data-href"))===n||i===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete o[e],d.parentNode.removeChild(d),r(c)},d.href=a,document.getElementsByTagName("head")[0].appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var c,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=function(e){return u.p+"static/js/"+({}[e]||e)+"."+{0:"2e9a64df",1:"863c462e",2:"80991755",3:"4e82bf42",4:"4c55a10d",8:"f9d66c93",9:"e961b3d3",10:"0eb75c64",11:"7d596c2c",12:"63715c01",13:"6895e8cb",14:"5c906f64",15:"25022fd1",16:"9b21977d",17:"e6eef61a",18:"28aa31a1",19:"1c2d10c4"}[e]+".chunk.js"}(e);var i=new Error;c=function(t){f.onerror=f.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,r[1](i)}a[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:f})}),12e4);f.onerror=f.onload=c,document.head.appendChild(f)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var f=this.webpackJsonpchewbaaka=this.webpackJsonpchewbaaka||[],i=f.push.bind(f);f.push=t,f=f.slice();for(var l=0;l<f.length;l++)t(f[l]);var s=i;r()}([])
                    </script>
                    <script defer src="/static/js/7.5b7708af.chunk.js">
                    </script>
                    <script defer src="/static/js/main.81d0d1cf.chunk.js">
                    </script>
                </body>
            </html>
        """

        self._check(html, expectedHtml)

    def testRewriteWithComment(self):
        html = """
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta content="width=device-width,initial-scale=1" name="viewport">
                    <link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet">
                    <script src="/static/js/1.863c462e.chunk.js" charset="utf-8">
                    </script>
                </head>
                <body>
                    <!-- Version 0.5.0 -->
                </body>
            </html>
        """

        expectedHtml = """
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta content="width=device-width,initial-scale=1" name="viewport">
                    <link href="/static/css/main.af3c9481.chunk.css" rel="preload" as="style">
                    <script defer src="/static/js/1.863c462e.chunk.js" charset="utf-8">
                    </script>
                <link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet"/></head>
                <body>
                    <!-- Version 0.5.0 -->
                </body>
            </html>
        """

        self._check(html, expectedHtml)

    def testRewriteWithNonAsciiCharacterInBody(self):
        html = """
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta content="width=device-width,initial-scale=1" name="viewport">
                    <link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet">
                    <script src="/static/js/1.863c462e.chunk.js" charset="utf-8">
                    </script>
                </head>
                <body>
                    <p>Crafted with <span aria-label="heart" role="img">❤️</span> by Will Li</p>
                </body>
            </html>
        """

        expectedHtml = """
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta content="width=device-width,initial-scale=1" name="viewport">
                    <link href="/static/css/main.af3c9481.chunk.css" rel="preload" as="style">
                    <script defer src="/static/js/1.863c462e.chunk.js" charset="utf-8">
                    </script>
                <link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet"/></head>
                <body>
                    <p>Crafted with <span aria-label="heart" role="img">❤️</span> by Will Li</p>
                </body>
            </html>
        """

        self._check(html, expectedHtml)

    def testRewriteWithComplexEmbeddedStyle(self):
        html = """
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta content="width=device-width,initial-scale=1" name="viewport">
                    <link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet">
                    <script src="/static/js/1.863c462e.chunk.js" charset="utf-8">
                    <style>
                        .body {
                            font-color: #red;
                        }
                    </style>
                    <style data-jss="" data-meta="MuiSlider">
                        .MuiSlider-root{color:#3f51b5;width:100%;cursor:pointer;height:2px;display:inline-block;padding:13px 0;position:relative;box-sizing:content-box;touch-action:none;-webkit-tap-highlight-color:transparent}.MuiSlider-root.Mui-disabled{color:#bdbdbd;cursor:default;pointer-events:none}.MuiSlider-root.MuiSlider-vertical{width:2px;height:100%;padding:0 13px}@media (pointer:coarse){.MuiSlider-root{padding:20px 0}.MuiSlider-root.MuiSlider-vertical{padding:0 20px}}@media print{.MuiSlider-root{-webkit-print-color-adjust:exact}}.MuiSlider-colorSecondary{color:#f50057}.MuiSlider-marked{margin-bottom:20px}.MuiSlider-marked.MuiSlider-vertical{margin-right:20px;margin-bottom:auto}.MuiSlider-rail{width:100%;height:2px;display:block;opacity:.38;position:absolute;border-radius:1px;background-color:currentColor}.MuiSlider-vertical .MuiSlider-rail{width:2px;height:100%}.MuiSlider-track{height:2px;display:block;position:absolute;border-radius:1px;background-color:currentColor}.MuiSlider-vertical .MuiSlider-track{width:2px}.MuiSlider-trackFalse .MuiSlider-track{display:none}.MuiSlider-trackInverted .MuiSlider-track{background-color:#b6bce2}.MuiSlider-trackInverted .MuiSlider-rail{opacity:1}.MuiSlider-thumb{width:12px;height:12px;display:flex;outline:0;position:absolute;box-sizing:border-box;margin-top:-5px;transition:box-shadow 150ms cubic-bezier(.4,0,.2,1) 0s;align-items:center;margin-left:-6px;border-radius:50%;justify-content:center;background-color:currentColor}.MuiSlider-thumb::after{top:-15px;left:-15px;right:-15px;bottom:-15px;content:"";position:absolute;border-radius:50%}.MuiSlider-thumb.Mui-focusVisible,.MuiSlider-thumb:hover{box-shadow:0 0 0 8px rgba(63,81,181,.16)}.MuiSlider-thumb.MuiSlider-active{box-shadow:0 0 0 14px rgba(63,81,181,.16)}.MuiSlider-thumb.Mui-disabled{width:8px;height:8px;margin-top:-3px;margin-left:-4px}.MuiSlider-vertical .MuiSlider-thumb{margin-left:-5px;margin-bottom:-6px}.MuiSlider-vertical .MuiSlider-thumb.Mui-disabled{margin-left:-3px;margin-bottom:-4px}.MuiSlider-thumb.Mui-disabled:hover{box-shadow:none}@media (hover:none){.MuiSlider-thumb.Mui-focusVisible,.MuiSlider-thumb:hover{box-shadow:none}}.MuiSlider-thumbColorSecondary.Mui-focusVisible,.MuiSlider-thumbColorSecondary:hover{box-shadow:0 0 0 8px rgba(245,0,87,.16)}.MuiSlider-thumbColorSecondary.MuiSlider-active{box-shadow:0 0 0 14px rgba(245,0,87,.16)}.MuiSlider-valueLabel{left:calc(-50% - 4px)}.MuiSlider-mark{width:2px;height:2px;position:absolute;border-radius:1px;background-color:currentColor}.MuiSlider-markActive{opacity:.8;background-color:#fff}.MuiSlider-markLabel{top:26px;color:rgba(0,0,0,.54);position:absolute;font-size:.875rem;transform:translateX(-50%);font-family:Roboto,Helvetica,Arial,sans-serif;font-weight:400;line-height:1.43;white-space:nowrap;letter-spacing:.01071em}.MuiSlider-vertical .MuiSlider-markLabel{top:auto;left:26px;transform:translateY(50%)}@media (pointer:coarse){.MuiSlider-markLabel{top:40px}.MuiSlider-vertical .MuiSlider-markLabel{left:31px}}.MuiSlider-markLabelActive{color:rgba(0,0,0,.87)}
                    </style>
                    <script>
                        console.log("Hello, world");
                    </script>
                </head>
                <body>
                    <div>
                        <p>&lt; Hello, world!</p>
                    <div>
                </body>
            </html>
        """

        expectedHtml = """
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta content="width=device-width,initial-scale=1" name="viewport">
                    <link href="/static/css/main.af3c9481.chunk.css" rel="preload" as="style">
                    <script defer src="/static/js/1.863c462e.chunk.js" charset="utf-8">
                    <style>
                        .body {
                            font-color: #red;
                        }
                    </style>
                    <style data-jss="" data-meta="MuiSlider">
                        .MuiSlider-root{color:#3f51b5;width:100%;cursor:pointer;height:2px;display:inline-block;padding:13px 0;position:relative;box-sizing:content-box;touch-action:none;-webkit-tap-highlight-color:transparent}.MuiSlider-root.Mui-disabled{color:#bdbdbd;cursor:default;pointer-events:none}.MuiSlider-root.MuiSlider-vertical{width:2px;height:100%;padding:0 13px}@media (pointer:coarse){.MuiSlider-root{padding:20px 0}.MuiSlider-root.MuiSlider-vertical{padding:0 20px}}@media print{.MuiSlider-root{-webkit-print-color-adjust:exact}}.MuiSlider-colorSecondary{color:#f50057}.MuiSlider-marked{margin-bottom:20px}.MuiSlider-marked.MuiSlider-vertical{margin-right:20px;margin-bottom:auto}.MuiSlider-rail{width:100%;height:2px;display:block;opacity:.38;position:absolute;border-radius:1px;background-color:currentColor}.MuiSlider-vertical .MuiSlider-rail{width:2px;height:100%}.MuiSlider-track{height:2px;display:block;position:absolute;border-radius:1px;background-color:currentColor}.MuiSlider-vertical .MuiSlider-track{width:2px}.MuiSlider-trackFalse .MuiSlider-track{display:none}.MuiSlider-trackInverted .MuiSlider-track{background-color:#b6bce2}.MuiSlider-trackInverted .MuiSlider-rail{opacity:1}.MuiSlider-thumb{width:12px;height:12px;display:flex;outline:0;position:absolute;box-sizing:border-box;margin-top:-5px;transition:box-shadow 150ms cubic-bezier(.4,0,.2,1) 0s;align-items:center;margin-left:-6px;border-radius:50%;justify-content:center;background-color:currentColor}.MuiSlider-thumb::after{top:-15px;left:-15px;right:-15px;bottom:-15px;content:"";position:absolute;border-radius:50%}.MuiSlider-thumb.Mui-focusVisible,.MuiSlider-thumb:hover{box-shadow:0 0 0 8px rgba(63,81,181,.16)}.MuiSlider-thumb.MuiSlider-active{box-shadow:0 0 0 14px rgba(63,81,181,.16)}.MuiSlider-thumb.Mui-disabled{width:8px;height:8px;margin-top:-3px;margin-left:-4px}.MuiSlider-vertical .MuiSlider-thumb{margin-left:-5px;margin-bottom:-6px}.MuiSlider-vertical .MuiSlider-thumb.Mui-disabled{margin-left:-3px;margin-bottom:-4px}.MuiSlider-thumb.Mui-disabled:hover{box-shadow:none}@media (hover:none){.MuiSlider-thumb.Mui-focusVisible,.MuiSlider-thumb:hover{box-shadow:none}}.MuiSlider-thumbColorSecondary.Mui-focusVisible,.MuiSlider-thumbColorSecondary:hover{box-shadow:0 0 0 8px rgba(245,0,87,.16)}.MuiSlider-thumbColorSecondary.MuiSlider-active{box-shadow:0 0 0 14px rgba(245,0,87,.16)}.MuiSlider-valueLabel{left:calc(-50% - 4px)}.MuiSlider-mark{width:2px;height:2px;position:absolute;border-radius:1px;background-color:currentColor}.MuiSlider-markActive{opacity:.8;background-color:#fff}.MuiSlider-markLabel{top:26px;color:rgba(0,0,0,.54);position:absolute;font-size:.875rem;transform:translateX(-50%);font-family:Roboto,Helvetica,Arial,sans-serif;font-weight:400;line-height:1.43;white-space:nowrap;letter-spacing:.01071em}.MuiSlider-vertical .MuiSlider-markLabel{top:auto;left:26px;transform:translateY(50%)}@media (pointer:coarse){.MuiSlider-markLabel{top:40px}.MuiSlider-vertical .MuiSlider-markLabel{left:31px}}.MuiSlider-markLabelActive{color:rgba(0,0,0,.87)}
                    </style>
                    <script>
                        console.log("Hello, world");
                    </script>
                <link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet"/></head>
                <body>
                    <div>
                        <p>&lt; Hello, world!</p>
                    <div>
                </body>
            </html>
        """

        self._check(html, expectedHtml)

    def testRewriteWithInCSSLinkInHead(self):
        html = """
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta content="width=device-width,initial-scale=1" name="viewport">
                    <link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet" type="text/css">
                    <script src="/static/js/1.863c462e.chunk.js" charset="utf-8">
                    </script>
                </head>
                <body>
                    <div>
                        <h1>Hello, world!</h1>
                    </div>
                </body>
            </html>
        """

        expectedHtml = """
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta content="width=device-width,initial-scale=1" name="viewport">
                    <link href="/static/css/main.af3c9481.chunk.css" rel="preload" as="style">
                    <script defer src="/static/js/1.863c462e.chunk.js" charset="utf-8">
                    </script>
                <link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet" type="text/css"/></head>
                <body>
                    <div>
                        <h1>Hello, world!</h1>
                    </div>
                </body>
            </html>
        """

        self._check(html, expectedHtml)

    def testRewriteWithInCSSLinkInHead2(self):
        html = """
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta content="width=device-width,initial-scale=1" name="viewport">
                    <link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet">
                    <script src="/static/js/1.863c462e.chunk.js" charset="utf-8">
                    </script>
                </head>
                <body>
                    <div>
                        <h1>Hello, world!</h1>
                    </div>
                </body>
            </html>
        """

        expectedHtml = """
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta content="width=device-width,initial-scale=1" name="viewport">
                    <link href="/static/css/main.af3c9481.chunk.css" rel="preload" as="style">
                    <script defer src="/static/js/1.863c462e.chunk.js" charset="utf-8">
                    </script>
                <link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet"/></head>
                <body>
                    <div>
                        <h1>Hello, world!</h1>
                    </div>
                </body>
            </html>
        """

        self._check(html, expectedHtml)

    def testRewriteWithNonAbsoluteWoff2Link(self):
        html = """
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <link href="static/media/brand-icons.e8c322de.woff2" rel="preload" as="font" crossorigin="">
                </head>
                <body>
                    <div>
                        <p>&lt; Hello, world!</p>
                    <div>
                </body>
            </html>
        """

        expectedHtml = """
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <link href="/static/media/brand-icons.e8c322de.woff2" rel="preload" as="font" crossorigin="">
                </head>
                <body>
                    <div>
                        <p>&lt; Hello, world!</p>
                    <div>
                </body>
            </html>
        """

        self._check(html, expectedHtml)

    def _check(self, html, expectedHtml):
        opts = HTMLRewritterOptions(defer_scripts=True, preload_stylesheets=True)

        rewriter = HTMLRewriterV1(opts)

        rewriter.feed(html)

        rewrittenHTML = str(rewriter.html)
        rewriter.close()

        self.assertEqual(expectedHtml, rewrittenHTML)


## -----------------------------------------------------------------------------


class TestHTMLElementBase(unittest.TestCase):

    def _check(self, element, expectedHtml):
        actualHtml = element.serialize()

        self.assertEqual(expectedHtml, actualHtml)


## -----------------------------------------------------------------------------


class TestHTMLDeclElement(TestHTMLElementBase):

    def testDeclElement(self):
        element = HTMLDeclElement('DOCTYPE html')

        expectedHtml = '<!DOCTYPE html>'

        self._check(element, expectedHtml)


## -----------------------------------------------------------------------------


class TestHTMLDataElement(TestHTMLElementBase):

    def testDataElement(self):
        element = HTMLDataElement('This is a paragraph.')

        expectedHtml = 'This is a paragraph.'

        self._check(element, expectedHtml)


## -----------------------------------------------------------------------------


class TestHTMLEntityRefElement(TestHTMLElementBase):

    def testEntityRefElement(self):
        element = HTMLEntityRefElement('gt')

        expectedHtml = '&gt;'

        self._check(element, expectedHtml)


## -----------------------------------------------------------------------------


class TestHTMLCommentElement(TestHTMLElementBase):

    def testCommentElement(self):
        element = HTMLCommentElement('This is a comment!')

        expectedHtml = '<!--This is a comment!-->'

        self._check(element, expectedHtml)


## -----------------------------------------------------------------------------


class TestHTMLRegularElement(TestHTMLElementBase):

    def testTagOnlyElement(self):
        element = HTMLRegularElement(tag='div')

        expectedHtml = '<div></div>'

        self._check(element, expectedHtml)

    def testSimpleElement(self):
        element = HTMLRegularElement(tag='img', attrs=[('width', '1024')])

        expectedHtml = '<img width="1024"/>'

        self._check(element, expectedHtml)

    def testLinkElement(self):
        element = HTMLRegularElement(tag='link', attrs=(('href', './style.css'), ('type', 'text/css')))

        expectedHtml = '<link href="./style.css" type="text/css"/>'

        self._check(element, expectedHtml)

    def testScriptElement(self):
        element = HTMLRegularElement(tag='script', hints=['defer'], attrs=(('href', './script.js'), ('type', 'text/script')))

        expectedHtml = '<script defer href="./script.js" type="text/script"/>'

        self._check(element, expectedHtml)

    def testEmptyBody(self):
        element = HTMLRegularElement(tag='body')

        expectedHtml = '<body></body>'

        self._check(element, expectedHtml)

    def testNestedElements(self):
        element = HTMLRegularElement(tag='head', children=[
            HTMLRegularElement(tag='link', attrs=(('href', './style.css'), ('type', 'text/css'))),
            HTMLRegularElement(tag='script', hints=['defer'], attrs=(('href', './script.js'), ('type', 'text/script')))
        ])

        expectedHtml = '<head><link href="./style.css" type="text/css"/><script defer href="./script.js" type="text/script"/></head>'

        self._check(element, expectedHtml)


## -----------------------------------------------------------------------------


class TestHTMLRewriterV2(unittest.TestCase):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.maxDiff = None
        self.printOutput = False

    def testRewriteWithSimpleHTML(self):
        html = (
            '<!DOCTYPE html>'
            '<html lang="en">'
                '<head>'
                    '<meta charset="utf-8">'
                    '<meta content="width=device-width,initial-scale=1" name="viewport">'
                    '<link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet">'
                    '<script src="/static/js/1.863c462e.chunk.js" charset="utf-8">'
                    '<style>'
                        '.body {'
                            'font-color: #red;'
                        '}'
                    '</style>'
                    '<script>'
                        'console.log("Hello, world");'
                    '</script>'
                '</head>'
                '<body>'
                    '<div>'
                        '<p>&lt; Hello, world!</p>'
                    '</div>'
                '</body>'
            '</html>'
        )

        expectedHtml = (
            '<!DOCTYPE html>'
            '<html lang="en">'
                '<head>'
                    '<meta charset="utf-8">'
                    '<meta content="width=device-width,initial-scale=1" name="viewport">'
                    '<link href="/static/css/main.af3c9481.chunk.css" rel="preload" as="style"/>'
                    '<script defer src="/static/js/1.863c462e.chunk.js" charset="utf-8">'
                    '<style>'
                        '.body {'
                            'font-color: #red;'
                        '}'
                    '</style>'
                    '<script>'
                        'console.log("Hello, world");'
                    '</script>'
                    '<link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet"/>'
                '</head>'
                '<body>'
                    '<div>'
                        '<p>&lt; Hello, world!</p>'
                    '</div>'
                '</body>'
            '</html>'
        )

        self._check(html, expectedHtml)

    def testRewriteWithHeadOnly(self):
        html = """
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta content="width=device-width,initial-scale=1" name="viewport">
                    <link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet">
                    <script src="/static/js/1.863c462e.chunk.js" charset="utf-8">
                    </script>
                </head>
            </html>
        """

        expectedHtml = (
            '<!DOCTYPE html>'
            '<html lang="en">'
                '<head>'
                    '<meta charset="utf-8">'
                    '<meta content="width=device-width,initial-scale=1" name="viewport">'
                    '<link href="/static/css/main.af3c9481.chunk.css" rel="preload" as="style"/>'
                    '<script defer src="/static/js/1.863c462e.chunk.js" charset="utf-8"/>'
                '<link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet"/>'
                '</head>'
            '</html>'
        )

        self._check(html, expectedHtml)

    def testBody(self):
        html = '<body></body>'

        expectedHtml = '<body></body>'

        self._check(html, expectedHtml)

    def testRewriteWithComplexInlineData(self):
        html = (
            '<!DOCTYPE html>'
            '<html lang="en">'
                '<head>'
                    '<meta charset="utf-8">'
                    '<meta content="width=device-width,initial-scale=1" name="viewport">'
                    '<link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet">'
                '</head>'
                '<body>'
                    '<img class="ImageSlideImgElement" src="data:image/png;base64,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" alt="Pre 1900" data-testid="ImageSlideComponentImgPartTestId" width="326" height="326">'
                '</body>'
            '</html>'
        )

        expectedHtml = (
            '<!DOCTYPE html>'
            '<html lang="en">'
                '<head>'
                    '<meta charset="utf-8">'
                    '<meta content="width=device-width,initial-scale=1" name="viewport">'
                    '<link href="/static/css/main.af3c9481.chunk.css" rel="preload" as="style"/>'
                    '<link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet"/>'
                '</head>'
                '<body>'
                    '<img class="ImageSlideImgElement" src="data:image/png;base64,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" alt="Pre 1900" data-testid="ImageSlideComponentImgPartTestId" width="326" height="326"/>'
                '</body>'
            '</html>'
        )

        self._check(html, expectedHtml)

    def testRewriteWithStartEndTag(self):
        html = """
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta content="width=device-width,initial-scale=1" name="viewport">
                    <link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet">
                    <script src="/static/js/1.863c462e.chunk.js" charset="utf-8">
                    </script>
                </head>
                <body>
                     <img src="hello.jpg" alt="hello" width="1024" height="768">
                </body>
            </html>
        """

        expectedHtml = (
            '<!DOCTYPE html>'
            '<html lang="en">'
                '<head>'
                    '<meta charset="utf-8">'
                    '<meta content="width=device-width,initial-scale=1" name="viewport">'
                    '<link href="/static/css/main.af3c9481.chunk.css" rel="preload" as="style"/>'
                    '<script defer src="/static/js/1.863c462e.chunk.js" charset="utf-8"/>'
                    '<link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet"/>'
                '</head>'
                '<body>'
                     '<img src="hello.jpg" alt="hello" width="1024" height="768"/>'
                '</body>'
            '</html>'
        )

        self._check(html, expectedHtml)

    def testRewriteWithEmbeddedScript(self):
        html = """<script>
                !function(e){function t(t){for(var n,o,u=t[0],f=t[1],i=t[2],l=0,d=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in f)Object.prototype.hasOwnProperty.call(f,n)&&(e[n]=f[n]);for(s&&s(t);d.length;)d.shift()();return c.push.apply(c,i||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,o=1;o<r.length;o++){var f=r[o];0!==a[f]&&(n=!1)}n&&(c.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={6:0},a={6:0},c=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{0:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,17:1,18:1}[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="static/css/"+({}[e]||e)+"."+{0:"ebc560db",1:"31d6cfe0",2:"31d6cfe0",3:"31d6cfe0",4:"31d6cfe0",8:"49e204d2",9:"11680288",10:"4696bd2f",11:"4a940f59",12:"18012030",13:"736146bb",14:"fcb4c333",15:"c2c1d5b1",16:"5064f383",17:"ae0b7fe0",18:"ae0b7fe0",19:"31d6cfe0"}[e]+".chunk.css",a=u.p+n,c=document.getElementsByTagName("link"),f=0;f<c.length;f++){var i=(s=c[f]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(i===n||i===a))return t()}var l=document.getElementsByTagName("style");for(f=0;f<l.length;f++){var s;if((i=(s=l[f]).getAttribute("data-href"))===n||i===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete o[e],d.parentNode.removeChild(d),r(c)},d.href=a,document.getElementsByTagName("head")[0].appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var c,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=function(e){return u.p+"static/js/"+({}[e]||e)+"."+{0:"2e9a64df",1:"863c462e",2:"80991755",3:"4e82bf42",4:"4c55a10d",8:"f9d66c93",9:"e961b3d3",10:"0eb75c64",11:"7d596c2c",12:"63715c01",13:"6895e8cb",14:"5c906f64",15:"25022fd1",16:"9b21977d",17:"e6eef61a",18:"28aa31a1",19:"1c2d10c4"}[e]+".chunk.js"}(e);var i=new Error;c=function(t){f.onerror=f.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,r[1](i)}a[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:f})}),12e4);f.onerror=f.onload=c,document.head.appendChild(f)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var f=this.webpackJsonpchewbaaka=this.webpackJsonpchewbaaka||[],i=f.push.bind(f);f.push=t,f=f.slice();for(var l=0;l<f.length;l++)t(f[l]);var s=i;r()}([])
            </script>
        """

        expectedHtml = """<script>
                !function(e){function t(t){for(var n,o,u=t[0],f=t[1],i=t[2],l=0,d=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in f)Object.prototype.hasOwnProperty.call(f,n)&&(e[n]=f[n]);for(s&&s(t);d.length;)d.shift()();return c.push.apply(c,i||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,o=1;o<r.length;o++){var f=r[o];0!==a[f]&&(n=!1)}n&&(c.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={6:0},a={6:0},c=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{0:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,17:1,18:1}[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="static/css/"+({}[e]||e)+"."+{0:"ebc560db",1:"31d6cfe0",2:"31d6cfe0",3:"31d6cfe0",4:"31d6cfe0",8:"49e204d2",9:"11680288",10:"4696bd2f",11:"4a940f59",12:"18012030",13:"736146bb",14:"fcb4c333",15:"c2c1d5b1",16:"5064f383",17:"ae0b7fe0",18:"ae0b7fe0",19:"31d6cfe0"}[e]+".chunk.css",a=u.p+n,c=document.getElementsByTagName("link"),f=0;f<c.length;f++){var i=(s=c[f]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(i===n||i===a))return t()}var l=document.getElementsByTagName("style");for(f=0;f<l.length;f++){var s;if((i=(s=l[f]).getAttribute("data-href"))===n||i===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete o[e],d.parentNode.removeChild(d),r(c)},d.href=a,document.getElementsByTagName("head")[0].appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var c,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=function(e){return u.p+"static/js/"+({}[e]||e)+"."+{0:"2e9a64df",1:"863c462e",2:"80991755",3:"4e82bf42",4:"4c55a10d",8:"f9d66c93",9:"e961b3d3",10:"0eb75c64",11:"7d596c2c",12:"63715c01",13:"6895e8cb",14:"5c906f64",15:"25022fd1",16:"9b21977d",17:"e6eef61a",18:"28aa31a1",19:"1c2d10c4"}[e]+".chunk.js"}(e);var i=new Error;c=function(t){f.onerror=f.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,r[1](i)}a[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:f})}),12e4);f.onerror=f.onload=c,document.head.appendChild(f)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var f=this.webpackJsonpchewbaaka=this.webpackJsonpchewbaaka||[],i=f.push.bind(f);f.push=t,f=f.slice();for(var l=0;l<f.length;l++)t(f[l]);var s=i;r()}([])
            </script>"""

        self._check(html, expectedHtml)

    def testRewriteWithInBodyScript(self):
        html = """
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta content="width=device-width,initial-scale=1" name="viewport">
                    <link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet">
                    <script src="/static/js/1.863c462e.chunk.js" charset="utf-8">
                    </script>
                </head>
                <body>
                    <div>
                        <h1>Hello, world!</h1>
                    </div>
                    <script>
                        !function(e){function t(t){for(var n,o,u=t[0],f=t[1],i=t[2],l=0,d=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in f)Object.prototype.hasOwnProperty.call(f,n)&&(e[n]=f[n]);for(s&&s(t);d.length;)d.shift()();return c.push.apply(c,i||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,o=1;o<r.length;o++){var f=r[o];0!==a[f]&&(n=!1)}n&&(c.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={6:0},a={6:0},c=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{0:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,17:1,18:1}[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="static/css/"+({}[e]||e)+"."+{0:"ebc560db",1:"31d6cfe0",2:"31d6cfe0",3:"31d6cfe0",4:"31d6cfe0",8:"49e204d2",9:"11680288",10:"4696bd2f",11:"4a940f59",12:"18012030",13:"736146bb",14:"fcb4c333",15:"c2c1d5b1",16:"5064f383",17:"ae0b7fe0",18:"ae0b7fe0",19:"31d6cfe0"}[e]+".chunk.css",a=u.p+n,c=document.getElementsByTagName("link"),f=0;f<c.length;f++){var i=(s=c[f]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(i===n||i===a))return t()}var l=document.getElementsByTagName("style");for(f=0;f<l.length;f++){var s;if((i=(s=l[f]).getAttribute("data-href"))===n||i===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete o[e],d.parentNode.removeChild(d),r(c)},d.href=a,document.getElementsByTagName("head")[0].appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var c,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=function(e){return u.p+"static/js/"+({}[e]||e)+"."+{0:"2e9a64df",1:"863c462e",2:"80991755",3:"4e82bf42",4:"4c55a10d",8:"f9d66c93",9:"e961b3d3",10:"0eb75c64",11:"7d596c2c",12:"63715c01",13:"6895e8cb",14:"5c906f64",15:"25022fd1",16:"9b21977d",17:"e6eef61a",18:"28aa31a1",19:"1c2d10c4"}[e]+".chunk.js"}(e);var i=new Error;c=function(t){f.onerror=f.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,r[1](i)}a[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:f})}),12e4);f.onerror=f.onload=c,document.head.appendChild(f)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var f=this.webpackJsonpchewbaaka=this.webpackJsonpchewbaaka||[],i=f.push.bind(f);f.push=t,f=f.slice();for(var l=0;l<f.length;l++)t(f[l]);var s=i;r()}([])
                    </script>
                    <script src="/static/js/7.5b7708af.chunk.js">
                    </script>
                    <script src="/static/js/main.81d0d1cf.chunk.js">
                    </script>
                </body>
            </html>
        """

        expectedHtml = (
            '<!DOCTYPE html>'
            '<html lang="en">'
                '<head>'
                    '<meta charset="utf-8">'
                    '<meta content="width=device-width,initial-scale=1" name="viewport">'
                    '<link href="/static/css/main.af3c9481.chunk.css" rel="preload" as="style"/>'
                    '<script defer src="/static/js/1.863c462e.chunk.js" charset="utf-8"/>'
                    '<link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet"/>'
                '</head>'
                '<body>'
                    '<div>'
                        '<h1>Hello, world!</h1>'
                    '</div>'
                    """<script>
                        !function(e){function t(t){for(var n,o,u=t[0],f=t[1],i=t[2],l=0,d=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in f)Object.prototype.hasOwnProperty.call(f,n)&&(e[n]=f[n]);for(s&&s(t);d.length;)d.shift()();return c.push.apply(c,i||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,o=1;o<r.length;o++){var f=r[o];0!==a[f]&&(n=!1)}n&&(c.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={6:0},a={6:0},c=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{0:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,17:1,18:1}[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="static/css/"+({}[e]||e)+"."+{0:"ebc560db",1:"31d6cfe0",2:"31d6cfe0",3:"31d6cfe0",4:"31d6cfe0",8:"49e204d2",9:"11680288",10:"4696bd2f",11:"4a940f59",12:"18012030",13:"736146bb",14:"fcb4c333",15:"c2c1d5b1",16:"5064f383",17:"ae0b7fe0",18:"ae0b7fe0",19:"31d6cfe0"}[e]+".chunk.css",a=u.p+n,c=document.getElementsByTagName("link"),f=0;f<c.length;f++){var i=(s=c[f]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(i===n||i===a))return t()}var l=document.getElementsByTagName("style");for(f=0;f<l.length;f++){var s;if((i=(s=l[f]).getAttribute("data-href"))===n||i===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete o[e],d.parentNode.removeChild(d),r(c)},d.href=a,document.getElementsByTagName("head")[0].appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var c,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=function(e){return u.p+"static/js/"+({}[e]||e)+"."+{0:"2e9a64df",1:"863c462e",2:"80991755",3:"4e82bf42",4:"4c55a10d",8:"f9d66c93",9:"e961b3d3",10:"0eb75c64",11:"7d596c2c",12:"63715c01",13:"6895e8cb",14:"5c906f64",15:"25022fd1",16:"9b21977d",17:"e6eef61a",18:"28aa31a1",19:"1c2d10c4"}[e]+".chunk.js"}(e);var i=new Error;c=function(t){f.onerror=f.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,r[1](i)}a[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:f})}),12e4);f.onerror=f.onload=c,document.head.appendChild(f)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var f=this.webpackJsonpchewbaaka=this.webpackJsonpchewbaaka||[],i=f.push.bind(f);f.push=t,f=f.slice();for(var l=0;l<f.length;l++)t(f[l]);var s=i;r()}([])
                    </script>"""
                    '<script defer src="/static/js/7.5b7708af.chunk.js"/>'
                    '<script defer src="/static/js/main.81d0d1cf.chunk.js"/>'
                '</body>'
            '</html>'
        )

        self._check(html, expectedHtml)

    def testRewriteWithComment(self):
        html = """
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta content="width=device-width,initial-scale=1" name="viewport">
                    <link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet">
                    <script src="/static/js/1.863c462e.chunk.js" charset="utf-8">
                    </script>
                </head>
                <body>
                    <!-- Version 0.5.0 -->
                </body>
            </html>
        """

        expectedHtml = (
            '<!DOCTYPE html>'
                '<html lang="en">'
                '<head>'
                    '<meta charset="utf-8">'
                    '<meta content="width=device-width,initial-scale=1" name="viewport">'
                    '<link href="/static/css/main.af3c9481.chunk.css" rel="preload" as="style"/>'
                    '<script defer src="/static/js/1.863c462e.chunk.js" charset="utf-8"/>'
                    '<link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet"/>'
                '</head>'
                '<body>'
                    '<!-- Version 0.5.0 -->'
                '</body>'
            '</html>'
        )

        self._check(html, expectedHtml)

    def testRewriteWithNonAsciiCharacterInBody(self):
        html = """
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta content="width=device-width,initial-scale=1" name="viewport">
                    <link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet">
                    <script src="/static/js/1.863c462e.chunk.js" charset="utf-8">
                    </script>
                </head>
                <body>
                    <p>Crafted with <span aria-label="heart" role="img">❤️</span> by Will Li</p>
                </body>
            </html>
        """

        expectedHtml = (
            '<!DOCTYPE html>'
            '<html lang="en">'
                '<head>'
                    '<meta charset="utf-8">'
                    '<meta content="width=device-width,initial-scale=1" name="viewport">'
                    '<link href="/static/css/main.af3c9481.chunk.css" rel="preload" as="style"/>'
                    '<script defer src="/static/js/1.863c462e.chunk.js" charset="utf-8"/>'
                    '<link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet"/>'
                '</head>'
                '<body>'
                    '<p>Crafted with <span aria-label="heart" role="img">❤️</span> by Will Li</p>'
                '</body>'
            '</html>'
        )

        self._check(html, expectedHtml)

    def testRewriteWithComplexEmbeddedStyle(self):
        html = (
            '<!DOCTYPE html>'
            '<html lang="en">'
                '<head>'
                    '<meta charset="utf-8">'
                    '<meta content="width=device-width,initial-scale=1" name="viewport">'
                    '<link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet">'
                    '<script src="/static/js/1.863c462e.chunk.js" charset="utf-8">'
                    '<style>'
                        '.body {'
                            'font-color: #red;'
                        '}'
                    '</style>'
                    '<style data-jss="" data-meta="MuiSlider">'
                        '.MuiSlider-root{color:#3f51b5;width:100%;cursor:pointer;height:2px;display:inline-block;padding:13px 0;position:relative;box-sizing:content-box;touch-action:none;-webkit-tap-highlight-color:transparent}.MuiSlider-root.Mui-disabled{color:#bdbdbd;cursor:default;pointer-events:none}.MuiSlider-root.MuiSlider-vertical{width:2px;height:100%;padding:0 13px}@media (pointer:coarse){.MuiSlider-root{padding:20px 0}.MuiSlider-root.MuiSlider-vertical{padding:0 20px}}@media print{.MuiSlider-root{-webkit-print-color-adjust:exact}}.MuiSlider-colorSecondary{color:#f50057}.MuiSlider-marked{margin-bottom:20px}.MuiSlider-marked.MuiSlider-vertical{margin-right:20px;margin-bottom:auto}.MuiSlider-rail{width:100%;height:2px;display:block;opacity:.38;position:absolute;border-radius:1px;background-color:currentColor}.MuiSlider-vertical .MuiSlider-rail{width:2px;height:100%}.MuiSlider-track{height:2px;display:block;position:absolute;border-radius:1px;background-color:currentColor}.MuiSlider-vertical .MuiSlider-track{width:2px}.MuiSlider-trackFalse .MuiSlider-track{display:none}.MuiSlider-trackInverted .MuiSlider-track{background-color:#b6bce2}.MuiSlider-trackInverted .MuiSlider-rail{opacity:1}.MuiSlider-thumb{width:12px;height:12px;display:flex;outline:0;position:absolute;box-sizing:border-box;margin-top:-5px;transition:box-shadow 150ms cubic-bezier(.4,0,.2,1) 0s;align-items:center;margin-left:-6px;border-radius:50%;justify-content:center;background-color:currentColor}.MuiSlider-thumb::after{top:-15px;left:-15px;right:-15px;bottom:-15px;content:"";position:absolute;border-radius:50%}.MuiSlider-thumb.Mui-focusVisible,.MuiSlider-thumb:hover{box-shadow:0 0 0 8px rgba(63,81,181,.16)}.MuiSlider-thumb.MuiSlider-active{box-shadow:0 0 0 14px rgba(63,81,181,.16)}.MuiSlider-thumb.Mui-disabled{width:8px;height:8px;margin-top:-3px;margin-left:-4px}.MuiSlider-vertical .MuiSlider-thumb{margin-left:-5px;margin-bottom:-6px}.MuiSlider-vertical .MuiSlider-thumb.Mui-disabled{margin-left:-3px;margin-bottom:-4px}.MuiSlider-thumb.Mui-disabled:hover{box-shadow:none}@media (hover:none){.MuiSlider-thumb.Mui-focusVisible,.MuiSlider-thumb:hover{box-shadow:none}}.MuiSlider-thumbColorSecondary.Mui-focusVisible,.MuiSlider-thumbColorSecondary:hover{box-shadow:0 0 0 8px rgba(245,0,87,.16)}.MuiSlider-thumbColorSecondary.MuiSlider-active{box-shadow:0 0 0 14px rgba(245,0,87,.16)}.MuiSlider-valueLabel{left:calc(-50% - 4px)}.MuiSlider-mark{width:2px;height:2px;position:absolute;border-radius:1px;background-color:currentColor}.MuiSlider-markActive{opacity:.8;background-color:#fff}.MuiSlider-markLabel{top:26px;color:rgba(0,0,0,.54);position:absolute;font-size:.875rem;transform:translateX(-50%);font-family:Roboto,Helvetica,Arial,sans-serif;font-weight:400;line-height:1.43;white-space:nowrap;letter-spacing:.01071em}.MuiSlider-vertical .MuiSlider-markLabel{top:auto;left:26px;transform:translateY(50%)}@media (pointer:coarse){.MuiSlider-markLabel{top:40px}.MuiSlider-vertical .MuiSlider-markLabel{left:31px}}.MuiSlider-markLabelActive{color:rgba(0,0,0,.87)}'
                    '</style>'
                    '<script>'
                        'console.log("Hello, world");'
                    '</script>'
                '</head>'
                '<body>'
                    '<div>'
                        '<p>&lt; Hello, world!</p>'
                    '</div>'
                '</body>'
            '</html>'
        )

        expectedHtml = (
            '<!DOCTYPE html>'
            '<html lang="en">'
                '<head>'
                    '<meta charset="utf-8">'
                    '<meta content="width=device-width,initial-scale=1" name="viewport">'
                    '<link href="/static/css/main.af3c9481.chunk.css" rel="preload" as="style"/>'
                    '<script defer src="/static/js/1.863c462e.chunk.js" charset="utf-8">'
                    '<style>'
                        '.body {'
                            'font-color: #red;'
                        '}'
                    '</style>'
                    '<style data-jss="" data-meta="MuiSlider">'
                        '.MuiSlider-root{color:#3f51b5;width:100%;cursor:pointer;height:2px;display:inline-block;padding:13px 0;position:relative;box-sizing:content-box;touch-action:none;-webkit-tap-highlight-color:transparent}.MuiSlider-root.Mui-disabled{color:#bdbdbd;cursor:default;pointer-events:none}.MuiSlider-root.MuiSlider-vertical{width:2px;height:100%;padding:0 13px}@media (pointer:coarse){.MuiSlider-root{padding:20px 0}.MuiSlider-root.MuiSlider-vertical{padding:0 20px}}@media print{.MuiSlider-root{-webkit-print-color-adjust:exact}}.MuiSlider-colorSecondary{color:#f50057}.MuiSlider-marked{margin-bottom:20px}.MuiSlider-marked.MuiSlider-vertical{margin-right:20px;margin-bottom:auto}.MuiSlider-rail{width:100%;height:2px;display:block;opacity:.38;position:absolute;border-radius:1px;background-color:currentColor}.MuiSlider-vertical .MuiSlider-rail{width:2px;height:100%}.MuiSlider-track{height:2px;display:block;position:absolute;border-radius:1px;background-color:currentColor}.MuiSlider-vertical .MuiSlider-track{width:2px}.MuiSlider-trackFalse .MuiSlider-track{display:none}.MuiSlider-trackInverted .MuiSlider-track{background-color:#b6bce2}.MuiSlider-trackInverted .MuiSlider-rail{opacity:1}.MuiSlider-thumb{width:12px;height:12px;display:flex;outline:0;position:absolute;box-sizing:border-box;margin-top:-5px;transition:box-shadow 150ms cubic-bezier(.4,0,.2,1) 0s;align-items:center;margin-left:-6px;border-radius:50%;justify-content:center;background-color:currentColor}.MuiSlider-thumb::after{top:-15px;left:-15px;right:-15px;bottom:-15px;content:"";position:absolute;border-radius:50%}.MuiSlider-thumb.Mui-focusVisible,.MuiSlider-thumb:hover{box-shadow:0 0 0 8px rgba(63,81,181,.16)}.MuiSlider-thumb.MuiSlider-active{box-shadow:0 0 0 14px rgba(63,81,181,.16)}.MuiSlider-thumb.Mui-disabled{width:8px;height:8px;margin-top:-3px;margin-left:-4px}.MuiSlider-vertical .MuiSlider-thumb{margin-left:-5px;margin-bottom:-6px}.MuiSlider-vertical .MuiSlider-thumb.Mui-disabled{margin-left:-3px;margin-bottom:-4px}.MuiSlider-thumb.Mui-disabled:hover{box-shadow:none}@media (hover:none){.MuiSlider-thumb.Mui-focusVisible,.MuiSlider-thumb:hover{box-shadow:none}}.MuiSlider-thumbColorSecondary.Mui-focusVisible,.MuiSlider-thumbColorSecondary:hover{box-shadow:0 0 0 8px rgba(245,0,87,.16)}.MuiSlider-thumbColorSecondary.MuiSlider-active{box-shadow:0 0 0 14px rgba(245,0,87,.16)}.MuiSlider-valueLabel{left:calc(-50% - 4px)}.MuiSlider-mark{width:2px;height:2px;position:absolute;border-radius:1px;background-color:currentColor}.MuiSlider-markActive{opacity:.8;background-color:#fff}.MuiSlider-markLabel{top:26px;color:rgba(0,0,0,.54);position:absolute;font-size:.875rem;transform:translateX(-50%);font-family:Roboto,Helvetica,Arial,sans-serif;font-weight:400;line-height:1.43;white-space:nowrap;letter-spacing:.01071em}.MuiSlider-vertical .MuiSlider-markLabel{top:auto;left:26px;transform:translateY(50%)}@media (pointer:coarse){.MuiSlider-markLabel{top:40px}.MuiSlider-vertical .MuiSlider-markLabel{left:31px}}.MuiSlider-markLabelActive{color:rgba(0,0,0,.87)}'
                    '</style>'
                    '<script>'
                        'console.log("Hello, world");'
                    '</script>'
                    '<link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet"/>'
                '</head>'
                '<body>'
                    '<div>'
                        '<p>&lt; Hello, world!</p>'
                    '</div>'
                '</body>'
            '</html>'
        )

        self._check(html, expectedHtml)

    def testRewriteWithInCSSLinkInHead(self):
        html = """
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta content="width=device-width,initial-scale=1" name="viewport">
                    <link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet" type="text/css">
                    <script src="/static/js/1.863c462e.chunk.js" charset="utf-8">
                    </script>
                </head>
                <body>
                    <div>
                        <h1>Hello, world!</h1>
                    </div>
                </body>
            </html>
        """

        expectedHtml = (
            '<!DOCTYPE html>'
                '<html lang="en">'
                '<head>'
                    '<meta charset="utf-8">'
                    '<meta content="width=device-width,initial-scale=1" name="viewport">'
                    '<link href="/static/css/main.af3c9481.chunk.css" rel="preload" as="style"/>'
                    '<script defer src="/static/js/1.863c462e.chunk.js" charset="utf-8"/>'
                    '<link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet" type="text/css"/>'
                '</head>'
                '<body>'
                    '<div>'
                        '<h1>Hello, world!</h1>'
                    '</div>'
                '</body>'
            '</html>'
        )

        self._check(html, expectedHtml)

    def testRewriteWithInCSSLinkInHead2(self):
        html = """
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta content="width=device-width,initial-scale=1" name="viewport">
                    <link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet">
                    <script src="/static/js/1.863c462e.chunk.js" charset="utf-8">
                    </script>
                </head>
                <body>
                    <div>
                        <h1>Hello, world!</h1>
                    </div>
                </body>
            </html>
        """

        expectedHtml = (
            '<!DOCTYPE html>'
            '<html lang="en">'
                '<head>'
                    '<meta charset="utf-8">'
                    '<meta content="width=device-width,initial-scale=1" name="viewport">'
                    '<link href="/static/css/main.af3c9481.chunk.css" rel="preload" as="style"/>'
                    '<script defer src="/static/js/1.863c462e.chunk.js" charset="utf-8"/>'
                    '<link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet"/>'
                '</head>'
                '<body>'
                    '<div>'
                        '<h1>Hello, world!</h1>'
                    '</div>'
                '</body>'
            '</html>'
        )

        self._check(html, expectedHtml)

    def testRewriteWithSample200HTML(self):
        html = (
            '<!doctype html>'
            '<html lang="en">'
                '<head>'
                    '<meta charset="utf-8" />'
                    '<meta name="viewport" content="width=device-width,initial-scale=1" />'
                    '<meta name="AdsBot-Google" content="noindex" />'
                    '<link rel="manifest" href="/manifest.json" />'
                    '<link rel="icon" href="/favicon.ico" />'
                    '<title>Learn about cheetahs</title>'
                    '<link rel="preload" href="/static/media/brand-icons.e8c322de.woff2" as="font" crossorigin>'
                    '<link rel="preload" href="/static/media/icons.0ab54153.woff2" as="font" crossorigin>'
                    '<link rel="preload" href="/static/media/outline-icons.cd6c777f.woff2" as="font" crossorigin>'
                    '<link href="/static/css/7.a86954d2.chunk.css" rel="stylesheet">'
                    '<link href="/static/css/main.8ed00043.chunk.css" rel="stylesheet">'
                '</head>'
                '<body>'
                    '<div id="root">'
                    '</div>'
                    '<script>'
                        '!function(e){function t(t){for(var n,a,u=t[0],f=t[1],i=t[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in f)Object.prototype.hasOwnProperty.call(f,n)&&(e[n]=f[n]);for(s&&s(t);d.length;)d.shift()();return c.push.apply(c,i||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var f=r[a];0!==o[f]&&(n=!1)}n&&(c.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={6:0},o={6:0},c=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[];a[e]?t.push(a[e]):0!==a[e]&&{0:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,17:1,18:1}[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="static/css/"+({}[e]||e)+"."+{0:"fcf423d7",1:"31d6cfe0",2:"31d6cfe0",3:"31d6cfe0",4:"31d6cfe0",8:"8f9ecfc4",9:"a6be9a4a",10:"fe261eb8",11:"a29eb638",12:"18012030",13:"736146bb",14:"fcb4c333",15:"c2c1d5b1",16:"6ea54000",17:"ae0b7fe0",18:"ae0b7fe0",19:"31d6cfe0"}[e]+".chunk.css",o=u.p+n,c=document.getElementsByTagName("link"),f=0;f<c.length;f++){var i=(s=c[f]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(i===n||i===o))return t()}var l=document.getElementsByTagName("style");for(f=0;f<l.length;f++){var s;if((i=(s=l[f]).getAttribute("data-href"))===n||i===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete a[e],d.parentNode.removeChild(d),r(c)},d.href=o,document.getElementsByTagName("head")[0].appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var c,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=function(e){return u.p+"static/js/"+({}[e]||e)+"."+{0:"3b46fb9c",1:"d4586f90",2:"e8d8a566",3:"eb203c0d",4:"ee5ef228",8:"ade3e35f",9:"4330a9d1",10:"0bd41a64",11:"5ea27eeb",12:"4be78e9f",13:"54581905",14:"38a4cdc6",15:"ecb84d32",16:"9193da79",17:"cc74af4f",18:"f6e3bf53",19:"1a88f993"}[e]+".chunk.js"}(e);var i=new Error;c=function(t){f.onerror=f.onload=null,clearTimeout(l);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,r[1](i)}o[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:f})}),12e4);f.onerror=f.onload=c,document.head.appendChild(f)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var f=this.webpackJsonpchewbaaka=this.webpackJsonpchewbaaka||[],i=f.push.bind(f);f.push=t,f=f.slice();for(var l=0;l<f.length;l++)t(f[l]);var s=i;r()}([])'
                    '</script>'
                    '<script src="/static/js/7.fa78e8ad.chunk.js">'
                    '</script>'
                    '<script src="/static/js/main.9396fbb4.chunk.js">'
                    '</script>'
                '</body>'
            '</html>'
        )

        expectedHtml = (
            '<!doctype html>'
            '<html lang="en">'
                '<head>'
                    '<meta charset="utf-8">'
                    '<meta name="viewport" content="width=device-width,initial-scale=1">'
                    '<meta name="AdsBot-Google" content="noindex">'
                    '<link rel="manifest" href="/manifest.json"/>'
                    '<link rel="icon" href="/favicon.ico"/>'
                    '<title>Learn about cheetahs</title>'
                    '<link crossorigin rel="preload" href="/static/media/brand-icons.e8c322de.woff2" as="font"/>'
                    '<link crossorigin rel="preload" href="/static/media/icons.0ab54153.woff2" as="font"/>'
                    '<link crossorigin rel="preload" href="/static/media/outline-icons.cd6c777f.woff2" as="font"/>'
                    '<link href="/static/css/7.a86954d2.chunk.css" rel="preload" as="style"/>'
                    '<link href="/static/css/main.8ed00043.chunk.css" rel="preload" as="style"/>'
                    '<link href="/static/css/7.a86954d2.chunk.css" rel="stylesheet"/>'
                    '<link href="/static/css/main.8ed00043.chunk.css" rel="stylesheet"/>'
                '</head>'
                '<body>'
                    '<div id="root">'
                    '</div>'
                    '<script>'
                        '!function(e){function t(t){for(var n,a,u=t[0],f=t[1],i=t[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in f)Object.prototype.hasOwnProperty.call(f,n)&&(e[n]=f[n]);for(s&&s(t);d.length;)d.shift()();return c.push.apply(c,i||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var f=r[a];0!==o[f]&&(n=!1)}n&&(c.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={6:0},o={6:0},c=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[];a[e]?t.push(a[e]):0!==a[e]&&{0:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,17:1,18:1}[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="static/css/"+({}[e]||e)+"."+{0:"fcf423d7",1:"31d6cfe0",2:"31d6cfe0",3:"31d6cfe0",4:"31d6cfe0",8:"8f9ecfc4",9:"a6be9a4a",10:"fe261eb8",11:"a29eb638",12:"18012030",13:"736146bb",14:"fcb4c333",15:"c2c1d5b1",16:"6ea54000",17:"ae0b7fe0",18:"ae0b7fe0",19:"31d6cfe0"}[e]+".chunk.css",o=u.p+n,c=document.getElementsByTagName("link"),f=0;f<c.length;f++){var i=(s=c[f]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(i===n||i===o))return t()}var l=document.getElementsByTagName("style");for(f=0;f<l.length;f++){var s;if((i=(s=l[f]).getAttribute("data-href"))===n||i===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete a[e],d.parentNode.removeChild(d),r(c)},d.href=o,document.getElementsByTagName("head")[0].appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var c,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=function(e){return u.p+"static/js/"+({}[e]||e)+"."+{0:"3b46fb9c",1:"d4586f90",2:"e8d8a566",3:"eb203c0d",4:"ee5ef228",8:"ade3e35f",9:"4330a9d1",10:"0bd41a64",11:"5ea27eeb",12:"4be78e9f",13:"54581905",14:"38a4cdc6",15:"ecb84d32",16:"9193da79",17:"cc74af4f",18:"f6e3bf53",19:"1a88f993"}[e]+".chunk.js"}(e);var i=new Error;c=function(t){f.onerror=f.onload=null,clearTimeout(l);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,r[1](i)}o[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:f})}),12e4);f.onerror=f.onload=c,document.head.appendChild(f)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var f=this.webpackJsonpchewbaaka=this.webpackJsonpchewbaaka||[],i=f.push.bind(f);f.push=t,f=f.slice();for(var l=0;l<f.length;l++)t(f[l]);var s=i;r()}([])'
                    '</script>'
                    '<script defer src="/static/js/7.fa78e8ad.chunk.js"/>'
                    '<script defer src="/static/js/main.9396fbb4.chunk.js"/>'
                '</body>'
            '</html>'
        )

        self._check(html, expectedHtml)

    def _check(self, html, expectedHtml):
        opts = HTMLRewritterOptions(defer_scripts=True, preload_stylesheets=True)

        rewriter = HTMLRewriterV2(opts)

        rewriter.feed(html)

        rewrittenHTML = str(rewriter.serialize())
        rewriter.close()

        if self.printOutput:
            print("Expected:")
            print(expectedHtml)
            print("Output:")
            print(rewrittenHTML)

        self.assertEqual(expectedHtml, rewrittenHTML)


## -----------------------------------------------------------------------------


class TestHTMLValidator(unittest.TestCase):

    def testLinkWithNoHrefAttribute(self):
        html = '<link></link>'

        message = 'Missing valid "href" attribute key-value pair in <link> element.'

        self._checkExceptionRaised(html, message)

    def testLinkWithInvalidHrefValueForAsAttribute(self):
        as_values_and_hrefs = [
            ('style', 'script.js'),
            ('font', 'style.css'),
            ('script', 'font.woff2'),
        ]

        for (as_val, href_val) in as_values_and_hrefs:
            html = '<link as=\"{as_val}\" href=\"{href_val}\" />'.format(as_val=as_val, href_val=href_val)

            message = 'Value of \"href\" attribute within <link> element'

            self._checkExceptionRaised(html, message)

    def testLinkWithValidHrefValueForAsAttribute(self):
        as_values_and_hrefs = [
            ('style', 'style.css'),
            ('font', 'font.woff2'),
            ('script', 'script.js'),
        ]

        for (as_val, href_val) in as_values_and_hrefs:
            html = '<link as=\"{as_val}\" href=\"{href_val}\" />'.format(as_val=as_val, href_val=href_val)

            self._checkSuccessfulValidation(html)

    def testLinkWithInvalidHrefValueForTypeAttribute(self):
        type_values_and_hrefs = [
            ('text/css', 'script.js'),
            ('font/woff2', 'style.css'),
            ('application/javascript', 'font.woff2'),
        ]

        for (type_val, href_val) in type_values_and_hrefs:
            html = '<link type=\"{type_val}\" href=\"{href_val}\" />'.format(type_val=type_val, href_val=href_val)

            message = 'Value of \"href\" attribute within <link> element'

            self._checkExceptionRaised(html, message)

    def testLinkWithValidHrefValueForTypeAttribute(self):
        type_values_and_hrefs = [
            ('text/css', 'style.css'),
            ('font/woff2', 'font.woff2'),
            ('application/javascript', 'script.js'),
        ]

        for (type_val, href_val) in type_values_and_hrefs:
            html = '<link type=\"{type_val}\" href=\"{href_val}\" />'.format(type_val=type_val, href_val=href_val)

            self._checkSuccessfulValidation(html)

    def testLinkWithInvalidHrefValueForRelAttribute(self):
        rel_values_and_hrefs = [
            ('stylesheet', 'script.js'),
            ('icon', 'style.css'),
            ('manifest', 'font.woff2'),
        ]

        for (rel_val, href_val) in rel_values_and_hrefs:
            html = '<link rel=\"{rel_val}\" href=\"{href_val}\" />'.format(rel_val=rel_val, href_val=href_val)

            message = 'Value of \"href\" attribute within <link> element'

            self._checkExceptionRaised(html, message)

    def testLinkWithValidHrefValueForRelAttribute(self):
        rel_values_and_hrefs = [
            ('stylesheet', 'style.css'),
            ('icon', 'favicon.ico'),
            ('manifest', 'manifest.json'),
        ]

        for (rel_val, href_val) in rel_values_and_hrefs:
            html = '<link rel=\"{rel_val}\" href=\"{href_val}\" />'.format(rel_val=rel_val, href_val=href_val)

            self._checkSuccessfulValidation(html)

    def testLinkWithRelAttributeNotWithoutAsAttribute(self):
        html = '<link href=\"stylesheet.css\" rel=\"preload\"/>'

        message = 'Missing \"as\" attribute pair within <link> element with rel=\"preload\" attribute'

        self._checkExceptionRaised(html, message)

    def testLinkWithRelAttributeAndAsAttribute(self):
        valid_htmls = [
            '<link href=\"/stylesheet.css\" rel=\"preload\" as=\"style\"/>',
            '<link href=\"/script.js\" rel=\"preload\" as=\"script\"/>',
            '<link href=\"/font.woff2\" rel=\"preload\" as=\"font\"/>',
        ]

        for html in valid_htmls:
            self._checkSuccessfulValidation(html)

    def testScriptElementWithInvaidAttribute(self):
        html = '<script src=\"stylesheet.css\"/>'

        message = 'Value of \"src\" attribute within <script> element is not a .js file'

        self._checkExceptionRaised(html, message)

    def testLinkToWoff2ResouceWithoutForwardSlashPrefix(self):
        html = '<link href=\"font.woff2\" rel=\"preload\" as=\"font\"/>'

        message = 'Value of "href" attribute within <link> element does not start with \"/\" as expected'

        self._checkExceptionRaised(html, message)

    def _checkExceptionRaised(self, html, message):
        htmlValidator = HTMLValidator()

        with self.assertRaises(HTMLValidator.ValidationError) as ctx:
            htmlValidator.feed(html)

        self.assertTrue(message in str(ctx.exception))

    def _checkSuccessfulValidation(self, html):
        htmlValidator = HTMLValidator()
        htmlValidator.feed(html)


## -----------------------------------------------------------------------------


if __name__ == '__main__':
    unittest.main()
