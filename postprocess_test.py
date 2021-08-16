"""
postprocess_test.py

Author   : Tomiko
Created  : Aug 15, 2021
Updated  : Aug 15, 2021
"""

import unittest

from postprocess import HTMLRewriter

## -----------------------------------------------------------------------------


class TestHTMLRewriter(unittest.TestCase):

    def testRewrite(self):
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

        rewriter = HTMLRewriter('')

        rewriter.feed(html)

        expectedHtml = """
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta content="width=device-width,initial-scale=1" name="viewport">
                    <link href="/static/css/main.af3c9481.chunk.css" rel="stylesheet">
                    <script defer src="/static/js/1.863c462e.chunk.js" charset="utf-8">
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

        self.assertEqual(expectedHtml, rewriter.html)


## -----------------------------------------------------------------------------


if __name__ == '__main__':
    unittest.main()
