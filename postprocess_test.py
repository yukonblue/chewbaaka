"""
postprocess_test.py

Author   : Tomiko
Created  : Aug 15, 2021
Updated  : Aug 24, 2021
"""

import unittest

from postprocess import HTMLDeclElement, HTMLDataElement, HTMLEntityRefElement,\
                        HTMLCommentElement, HTMLRegularElement, HTMLRewriter


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

        expectedHtml = '<div/>'

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


class TestHTMLRewriter(unittest.TestCase):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.maxDiff = None
        self.printOutput = True

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
                    '<img class="ImageSlideImgElement" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUYAAAFGCAMAAAAhCcbCAAAAjVBMVEUAAAD+yk3+yk0AAAD+yk0AAAAAAAD+yk0AAAAAAAAAAAAAAAAAAAAAAAAAAAD+yk0AAAAAAAD+yk3+yk3+yk3+yk3+yk0AAAD+yk0AAAAAAAD+yk3+yk3+yk3+yk3+yk3+yk3+yk3+yk3+yk3+yk3+yk3+yk3+yk3+yk3+yk3+yk3+yk3+yk3+yk0AAAAIyTwOAAAALnRSTlMAqKKABUC/nhAgYO+fzzAJcN8SDhuZhq+Qj1B/i0AvTyGUFjcoemFncGxbdVZIM27lkwAAFmlJREFUeNrs3MtuqzAQgGHPaCQvkbhYSGCuIYTb+7/egSQKbZS2gFmdmU9tlXb5y46NCVVCCCGEEEIIIYQQQgghhBBCCCHEf4No+RHWtg49UsIlY9FoxCjJKwl5DC0ZqwFhgclFOh4ejP4V4ckUShzLSJOGl6FSYr9lMDYIqy5Q4kjGwiCsUDoey5gtGVfYhErszkjPjKvYekrsRHWK8B0m1pedzw5LrOyVcYVxZ0MZk3vUBuEDjExb+0psVDQIP8Cok5LbUNVq+Jk2k7xP/ok8Pxs0/EabMQuk5O8Ri7otEX6HcZvJevMZzV9+YfskQvgTln0oA/Iz8rOxmSNugkY25R9RaK8pwma6k9PITxXHpETYActRdj9vqGhjhJ1wkGPd7/xribAb3uT45ytvihEOKK28P67Iblxc8P33Vk51X4c63saKOHv7SyOrzKvitHUsao3wXSIZnzf3gzxG2J/x8cpIxsdY9MfNazTO1oR3pWx57hWDPtpV8S2jntgv1UTztz20X1xfNdyH41JRXQyCE90z3/IsGf0WwVE8sT/qoTwCV5iyPzILDYIzNJbxvCalvFHDCdBMbDuSonV9cYQp347KoymCv8gthT8rrsu0M91cFEsUkC3hNBHTqxnPCwcEN8w/TkrLYAymCE6UZoobug/GG8KJoiu3I7P7Ua0KDZxJD8zubtHjejqLJKMDmilS1Q3uEE/K2PGa1OTR/b60hoezMo6sNuBEtKSconMrYspq/32vqLzavCriORV53fe/T2k/NwinSmteFWmp2JdwLp2zqqiWilVfIpwKb+yuBCns47MrGlbLy4KKPtXnRtRNxmtKz8Lrl4ronBCjMu34VfTHV0VEp36odRSb5nbNa07PG5GaeZNZK+LxaRybpLl113Gy2SX0WV2+zAKbaHAdjBiZW5/bOrsUYeUHxGgoPgajP80VXTNq0+X1PASDwCNeCZ/INhE4wnLIs4rZEPyGLl2JrhXTtmb+r6LCPnWtqE1/4baevPFzo1332Sbn/sClZ4fNT1X+VDGZmE9oRVkXo9tQjG+cPzj2EI4pbi72cYXuLPcJrZTvttdBnV4L9hEVZa3LlNZlk0tFpQKXVRqjpM/YvysuKoeNN8aD5b5AP2Xp8YrRP/bOta1RHYjjIyFpEggFaxepl3o76urufP+Pd3IpThfbPXKSutsH/+tqh4S8+D2TBmaY8Ho1rTz+Xs0fZ2PA/RK8yC5fpvVQyX49jHZGikhmF9NKne7X3fNoilQiuPzxtQOU1+nL+EtGKvu9vIEJR8VId+vBlB7njRdnXxhdVpoi3mPTgY7iF0avu5+v46b0EPjF1zoNML9+jAzsfGEEyO/WdkrHaPaF0Tnju7vAkb65fP10jJw51Qq2pUrRwW8lARRTkF4JnmPMlk+fjpFhkIYtCfwPjLUA4MjhEDp7XsY5Y3b++PkYPQxeFBJI2MHvJQ6I8TrKGcMd9ecFGgkj/Vn52S05llz6+a7AmbLWAFIz3aOujOHSYuSs9odUzVaQSO9rK0dTvbQZ1QiOERjLQoI0YXZztOJQBsuaAlFWhbWKCryE68DR9TASQGP4kEQLG9mJU3a+PvvsRyQYlowxUawcSg6yxCp4I8MaZIscuCWkoDEKlCl+8caGA0MNCksJvGghiW4u4rc1uZrP55+N0atgIMMy03QAyACMsYbEDrg7vkJlTYWr7e9GDb5r14CVRplmTi/jCyrv88/HyB2fFjXHIBEwItvw4shpQWfDJQYZCAziECt6J1YsxsUfwQgSBceSOendGJkX34WxCW0qHiOlDmJ0+ycxKqzBqoKAsGmdVZQBl8YqNO7AWBZ+BJXk1WIpdoc5v/5DGFWJGhq3EPPeE0usXKsOuBQa2XceYtRYAsi2kAmc8e6fLEXNfn76Z5YYR6IqUBiLK2CUxlllj0tjIRprBrUoqnA8EG9EgTrJW4jOk2CcR2CMuaf2s1V1QtTSsXWAJBNCw9u9My9Fq7duunU4zjzjVpQcEmjxkqL85dxinPS7WM9oTsctMZPGmF+fZwnqX2ZX+eTqNbY1X9+mqMXK1vliyhjPnmfkjBEYHxfzKWOkzfDiOH6/m3Ri8P6WKMbon7MpY8zX/ZyOxPjt4cAYpe7zLry/CZbu84fPhwNq/pgI4+31YTGufPBVA7wFZZXxgQf4mGoBBxPtoByNcXl/WIyFqULwVWPnPkjgOAajOBzG3F18J9ogZnl1UIxVs3IuiRzaxkdhtayxrhxGzfSW025mfsVYBVZcqZqpTdRbcukPAXCp68pb/lh8kOz8zRmPYHvLFVbQlGDVlNzHaRmWPjoR1OdkoMTNUWwLROQhB0MhCbQ2Q4e/Q5nAH2nTpyPYJVSahoKyvTcKJVtU4NUW2k94jTVA7X4hroBjGbxxC2NRKWgE+OBktGgn6iyW43J9cIxSFNX72LaivLP0WepKS+PdszQAWPrOgzhjOFyjggp1koWa6P3tGKUpNLzHCD0e+gu4keu9C2M4rLBLM6dhQQt1bIjn0BvhVSbkmosOrEz7W4yCef0eI7RNmjkNp8/b+LIYjOvDYqzcFY+TCOlTtgNjyMnIlgc4Su7CKAmjRob67wk2hnz/Ag4p00jw0mElrnZghKZRAB1WpeujGjHAWDmrI4xQIMoUl403yfatPTBGjUEcpEHTYOmgNN0Ao8vJ2DbfR2BREUafgwF3qtjCWNq+3ojUw/nJcXgjZ0GKMi2ghbDHKedipbqQdpG1EB0lXHTIwYAsBZOM+8NOK1w5mCzSGeF+uaFgfyIxHuPrakOeWtfxGNN549FhZOVmwZbRGG+TfTceX61bi12anS7z60sCkU0NYxLlHiOt1LHxxslitP8fCGOklhN9b5tzxpyuG2On9mw9UYxzC/LsWxxFUvaUbpNLGa71jkH5fOHuYi6TYby4T8WRF+HO4yjkH106/ecklZbfU3FkeEQY/WOd8+/JMGbnT2l2PlElcuXD24xTfmVnlQtX7lcFAFVFLapSjA9LXuxoOvSzUnwwbMQKM7cY88eTdBxvn69OEz3+yUAYE9Iq0uytcvF5GYVN+PTWwkyBZlDyUhXBCmFaY4bDxi0x+ctJQo7L5+s8mTdiJ1XTUM3LsMqlvyfWhW2rUFMLwxLUryUvsrCNq0L4jqCwHgwbdfmdzBspPnGX7Lux8Z+o5mVY5dJnCsvWQmEoqYWhAip5oVCOd8VG+CTMYNgI5ZAMI1VV3+cplxiGwDFod5ULdtDUogXTUsvmfAziNKQfoUMFxgyHjQQ5f0qKMbt9uUuMkWpedlW5tKZCzgqJNbX03hxMNcBYYa2wHgwbq8XzSVLNXq/ztBip5mVXlYvG2pHuUFGLP39Q8hIaa7RmI+wfGvavxJhdXiXGSDUvu6pcJPqES2OoJXjjoORFYQvgVyzo0BgYDBur09eTtJr9iM8l1Gh0j5FqXnZWuYBBBm5Vp5Zw1rDkRTvLkYMKsYbBsJHKHy4SY8wuHiBWkoku3FNzRjUvO6tcgLuDnFr6s96VvHBrqeDstvdg2EjNz75nqd3xGHMysRjzn0kwZtN+kXdOGJORnL0+TCwOnufzdTaa155tymix/jGxDW7zOWGM9UXiuHy+g0kp/z+TOtt9lPwxm9grGSGP32aCMBLH5dPUNv/ObxJcONKWov1i/XMB47TiFFv10qyWfSNZVBKjGOMwFOMfrItRTKX1xtPnVBgzhzHo9ulm7MOLbDu2CtJQbJYsKokJMdkSBkIG+6QMBxJHnhTj/O77SWp3HH/tyIsAoGkqqMPeBSt7UIATWVQSo1BIWSL/OEaOh8X4fJKOIy3Wo9yRYecBVKgdtAagKL3HKXAiqy+Jgdo3NcEdaacxZMpP+j4tQ4kcX7bgLd9xa5MybdvjJzVhTOuOYx6o7zggC6TCb0cq8HIiqy+JcagD8KA+7YJt4Wc/pWW2Ny8TG0sA9JuU9e3RFzwU4kn67TgbuSsmsu3Yqv3ZmqNk9UUI7qfv7724Vf7LIAAroU/LUCIneGOHK2/B2yZlNXLbsYnFCIQxrTuer+efhjFk++qqL4KhhA1lXPwglQ7D0SZlDGsJSkKcKN+fCOOMsjLX+WdhFIJGcRalZYYZF6VZWyCnyg5V2Mb6L8MY3DHIZmXGYqxRhmxf5fN4EmtwerOoJKY13guLvRiZFx9kXFYOWruNEWRtEAsVi3HxGvP0TrZvVtOrJkZg5JssqDU7xzN4IVlUEsM8cCO2n+Cuux4jpWUGGZfGqDAQYawcSWTRS/UT3c0NoYzH6DhSkvB0JEZojISqaB2YCuQmp08WlcQoLJ1Vg5d2Z6ui7TFSWmaQcfHpGbOF0Q/tkoUQJ8IYTXHojrOLh3EYQzalv2DZ5FGQkUUlMS7RYhwrq2C583qMlJahjIsvoinRCDSoCaNrF649Vu+8kewPcPzdrD4fURrM+K8JE1WKlntCjCwqifE1MUxCL92KTlERTJ+WoYyLPwEkc0frFfSblFF7Qow7I1/7RV2Gl45Bs+dTiJau4RiUP2a9I73nON4brTuS8e0GotVKOAblL9lYbyTt9Eaa1ROq8ch/RGAceOPQp2cv08G4zgjb0LHGUKQ1hoyLU4BpkNzG+D7uNVJDjMvryWDcManpwBjRpCbrJZ8IRnihJSEC4+5vhuzbWXp3pIKZj+RiFGP0IhnqlVyPe1cL++/D+Pawn6XenGdPpcf+JEKHuKIXyVCv1Hraf2cXH6zILhbwZ1W0RUvxjYMpf9pPZEyIbM85s3/JO/vmRGEgjOMCAvJyoqgVT1u9vlnbfP+Pd5dsYWnPMNIkdm7v+ecchiszvwlssk92sxviDyahn3S802SKPkmYxLLPWDxR14uCOo+pm5MkpDKZOIyLjjc7EfVatAfJYMFMmJB7g8+wiREMMGrvhef5kNdViDV5p+oHJmakxRJK28SXd1HnMa9WLoyglxpdlrThuEoxf4MHyWDBjPDJvZnYOlniOHKqxTa4HKOYxHLYxDLvKs86eC9skdtjC6HqZFKJkTqPqXKXqfiAsSyUy6KUKGOmbEajKpiRdzXuDT3DdDPUqW+EmQsu97awFIbKqCaJ14w9qpPBK2S6hPIHYSSXRcmX+dtpm6P1RYK/GveGnmGouaGJoEcOtLAeEIO7Nkvor3NBLYkIY8ctaG4mjGEHYynGY3k8QosR72rA0TNMNduM3Cp6/SrGsRDlqjTBWIt8/EeliDUY6RmGmtvACD3BG07zQRjRWFmV7x5B3ouxFoW8WYcR+zriX+pibN0beoahfjgajcTxphqEcYKBNcMP2aT3pW5CjAZjjG+rvOsjxta9oWcYqduzwxXGaDsI47thEnuJ9FPSsuzDiBOeUoNxigEbXbAuxta9oWeYab5DjC4EQ6eOk482SygNlsKPuxaLjz/oSjL1C1+0a2pyWeQNjVtT+KG6FPp4V+ve0DPM9OPeXYgBaDr0eK5UZAV2dPxmBXeaBo42h+PRWcFRnJZrfyxq75sVVA8j59pvnSUdi5UQ+bdT9LzDFTDC6c7jrWCGGN1q8TLjnQQPDtfACD/f5h5rOcZI28t412MiRufC1jLXVUhmASZ87dfFEEbHqQk62//qda10BkosRP65vOOfxCgP9782R8I4FXI56FLVhRjBPMy8Vq44Fj5WwZBFI/8ljGUei6zxW2vsS0ZFMtfDCFLGrY7eHK1mMoH2S8eikeZNkz9Tbswq7RbQhCKkIplrYKTNyMZZyMVx5yRc12KNh8PoLJpMdemZKLs19qa425aKZOxEarisUgPMN9hv3py81skU01+fLZrGMIyVZaUqEEVeNBvqqUjG7hEdegEsjCjSrOeXk9c6rv2sFL7GW1AteMbjVPV/E6LMQkWPimTcY6Sx+BWM8He03jlYzSSlEHmmx5inYym1bSKUljfWbGGRzNUwAgBSNB+O8PPl3v7nMUvpFJhuXUyGGIv3IF2meIJMkQuJkYpkbGh+HLA12WA4omD5emeTI9nb3dGIX8NCIMZ123uwThTRVaowYpGMc4wksGcYRptbm2GG2o/lIiOM6lKzJyUtvabbm7JgSozUVCSD/819iNFr+DCOHrYHzzZHWdpST7sWTb0a17imTtop9tRv+5YlfkJFMp5vo2WeBqN1jhSuGSbNXKVt9dvH9087fkkzV5tP9EUhcPPCr02PswyPvigElrcVN44XYQTztgldRacttx6Phw1YHX+9GOnzyK034ezBKUaI4HzukVlTPbvzRjhTYH029/jAqiozwFWMq5CiT1QuHiuPjwLzk5X7ockrdIlrB9wgCG4X4A6jvg52cWQ0eQy8H283YJMiyB+fajH/g40Udl9qRAYfr/0HwxGPS7dFsQEI3Yt4GXh/HRGjVZ1rRNMSJu05Beu5pZd6eO4cOM0dZ4+R2+EI+m0U/95RzDoFhxfrGAkdQWU+BQ9mWowAxhT7FT3vuLzVwew1Ai0NtxxhwyZWf+dohCWbLbiBNsSAK4ykDZsCheDwBPYwwrCPwZIRxmfCZdgUCgCGcdzvPCYKqtMIdKlDpxSxtpWJ5AkdVkYjKA0t/Ocy4fHub+xhHBru4ZENxrv9eYxDtyl/JU7BkQ3G6sbSt/ErGJ+5zBu96qctjMP/CDywSYDrMI5sYYS+1SAbt7pauhyNUT9GPssYt6OxP07B8t5joru93uYbGes8RoYdrXc6WO4iNWlxywYjuMF4UVfI6JFLqN7CgGWJ7R24cGQSqoNb5xj72v0/M3FjgqcejJYBnsPIxBucb/RODFiGiL6/FLvVYLUAPUerAkCSAAxzE7/bu9sWR2EgDuA7QyAvBTUSSHxsfHa//9c70/Zo4c7euVpdZucnFZaFhf6ZNNm0k2ZKIhziEeADdlRi1BLeCuGVkWPcI8qayGtjlhwQ4/K8dfpZ/ztxCcIGW3M0RBY8xZEx4h85Utlw9DGeB2siMbpzYxyJDOrMwrEQnsiexhQjUg3HwuccVUNjwRNMJexo7cFImsi2bdhK2B8u/6bUCp97OmjEGNe4Z3J4vZahVAqf29OJvKWVbZ2o8Q6uj5VneKiWyHonLbdGCI9rdauHzWnMMGJS2zZiN71oSnP5ICFoEY5DttutqvEte90/rJ8j03CesiUyT4tcwmmkodKXHnUIZ0FL5ogtp+E0qqPSoiUmCTtCQPwGh4AfrkhWf/YGdzpfHZOJyGJnVV8/Xi9/W0pxVY5oGyqHlIm0hP2sKkbULZVOarGwK3FAYzXqnsq5rCKrEQ6DVFN0o3xbUK9J29BJsZdvjxD/tguEykwZkaWOKAYNp0Dd5Y7Il+WJOE8QToAyadKCyD8vH+FllHACqcc8I1KK12K0CIfDsh4uMZVS9DFOGg6GUo8TpRB3qEb87b8jrPshLSIqw/lGhOkoN7S1KG2TxFqrdankYpao9MyascnnKhSCVoZe4HKjEL8SYZmYrhmmPJ+maRiatquNncOU+ExKVSZtFs6igF58j3J0eWd0qZSS3r+G6D0andT98JlmrijiYhZXYRhXsUunpmnbvu9vN59yeqGys/2KCGJ3+cyH29PvunEc69oYk3j3AatL7dn5Z1OPfTPkn+nFxb6+bp7+WhBE0XwTwt8ojt9X/LOOHsKwqvyjin2tOa9wRTyrwij6gfkwxhhjjDHGGGOMMcYYY4wxxhhjjDHGvodfI7w8dpRp7NcAAAAASUVORK5CYII=" alt="Pre 1900" data-testid="ImageSlideComponentImgPartTestId" width="326" height="326">'
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
                    '<img class="ImageSlideImgElement" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUYAAAFGCAMAAAAhCcbCAAAAjVBMVEUAAAD+yk3+yk0AAAD+yk0AAAAAAAD+yk0AAAAAAAAAAAAAAAAAAAAAAAAAAAD+yk0AAAAAAAD+yk3+yk3+yk3+yk3+yk0AAAD+yk0AAAAAAAD+yk3+yk3+yk3+yk3+yk3+yk3+yk3+yk3+yk3+yk3+yk3+yk3+yk3+yk3+yk3+yk3+yk3+yk3+yk0AAAAIyTwOAAAALnRSTlMAqKKABUC/nhAgYO+fzzAJcN8SDhuZhq+Qj1B/i0AvTyGUFjcoemFncGxbdVZIM27lkwAAFmlJREFUeNrs3MtuqzAQgGHPaCQvkbhYSGCuIYTb+7/egSQKbZS2gFmdmU9tlXb5y46NCVVCCCGEEEIIIYQQQgghhBBCCCHEf4No+RHWtg49UsIlY9FoxCjJKwl5DC0ZqwFhgclFOh4ejP4V4ckUShzLSJOGl6FSYr9lMDYIqy5Q4kjGwiCsUDoey5gtGVfYhErszkjPjKvYekrsRHWK8B0m1pedzw5LrOyVcYVxZ0MZk3vUBuEDjExb+0psVDQIP8Cok5LbUNVq+Jk2k7xP/ok8Pxs0/EabMQuk5O8Ri7otEX6HcZvJevMZzV9+YfskQvgTln0oA/Iz8rOxmSNugkY25R9RaK8pwma6k9PITxXHpETYActRdj9vqGhjhJ1wkGPd7/xribAb3uT45ytvihEOKK28P67Iblxc8P33Vk51X4c63saKOHv7SyOrzKvitHUsao3wXSIZnzf3gzxG2J/x8cpIxsdY9MfNazTO1oR3pWx57hWDPtpV8S2jntgv1UTztz20X1xfNdyH41JRXQyCE90z3/IsGf0WwVE8sT/qoTwCV5iyPzILDYIzNJbxvCalvFHDCdBMbDuSonV9cYQp347KoymCv8gthT8rrsu0M91cFEsUkC3hNBHTqxnPCwcEN8w/TkrLYAymCE6UZoobug/GG8KJoiu3I7P7Ua0KDZxJD8zubtHjejqLJKMDmilS1Q3uEE/K2PGa1OTR/b60hoezMo6sNuBEtKSconMrYspq/32vqLzavCriORV53fe/T2k/NwinSmteFWmp2JdwLp2zqqiWilVfIpwKb+yuBCns47MrGlbLy4KKPtXnRtRNxmtKz8Lrl4ronBCjMu34VfTHV0VEp36odRSb5nbNa07PG5GaeZNZK+LxaRybpLl113Gy2SX0WV2+zAKbaHAdjBiZW5/bOrsUYeUHxGgoPgajP80VXTNq0+X1PASDwCNeCZ/INhE4wnLIs4rZEPyGLl2JrhXTtmb+r6LCPnWtqE1/4baevPFzo1332Sbn/sClZ4fNT1X+VDGZmE9oRVkXo9tQjG+cPzj2EI4pbi72cYXuLPcJrZTvttdBnV4L9hEVZa3LlNZlk0tFpQKXVRqjpM/YvysuKoeNN8aD5b5AP2Xp8YrRP/bOta1RHYjjIyFpEggFaxepl3o76urufP+Pd3IpThfbPXKSutsH/+tqh4S8+D2TBmaY8Ho1rTz+Xs0fZ2PA/RK8yC5fpvVQyX49jHZGikhmF9NKne7X3fNoilQiuPzxtQOU1+nL+EtGKvu9vIEJR8VId+vBlB7njRdnXxhdVpoi3mPTgY7iF0avu5+v46b0EPjF1zoNML9+jAzsfGEEyO/WdkrHaPaF0Tnju7vAkb65fP10jJw51Qq2pUrRwW8lARRTkF4JnmPMlk+fjpFhkIYtCfwPjLUA4MjhEDp7XsY5Y3b++PkYPQxeFBJI2MHvJQ6I8TrKGcMd9ecFGgkj/Vn52S05llz6+a7AmbLWAFIz3aOujOHSYuSs9odUzVaQSO9rK0dTvbQZ1QiOERjLQoI0YXZztOJQBsuaAlFWhbWKCryE68DR9TASQGP4kEQLG9mJU3a+PvvsRyQYlowxUawcSg6yxCp4I8MaZIscuCWkoDEKlCl+8caGA0MNCksJvGghiW4u4rc1uZrP55+N0atgIMMy03QAyACMsYbEDrg7vkJlTYWr7e9GDb5r14CVRplmTi/jCyrv88/HyB2fFjXHIBEwItvw4shpQWfDJQYZCAziECt6J1YsxsUfwQgSBceSOendGJkX34WxCW0qHiOlDmJ0+ycxKqzBqoKAsGmdVZQBl8YqNO7AWBZ+BJXk1WIpdoc5v/5DGFWJGhq3EPPeE0usXKsOuBQa2XceYtRYAsi2kAmc8e6fLEXNfn76Z5YYR6IqUBiLK2CUxlllj0tjIRprBrUoqnA8EG9EgTrJW4jOk2CcR2CMuaf2s1V1QtTSsXWAJBNCw9u9My9Fq7duunU4zjzjVpQcEmjxkqL85dxinPS7WM9oTsctMZPGmF+fZwnqX2ZX+eTqNbY1X9+mqMXK1vliyhjPnmfkjBEYHxfzKWOkzfDiOH6/m3Ri8P6WKMbon7MpY8zX/ZyOxPjt4cAYpe7zLry/CZbu84fPhwNq/pgI4+31YTGufPBVA7wFZZXxgQf4mGoBBxPtoByNcXl/WIyFqULwVWPnPkjgOAajOBzG3F18J9ogZnl1UIxVs3IuiRzaxkdhtayxrhxGzfSW025mfsVYBVZcqZqpTdRbcukPAXCp68pb/lh8kOz8zRmPYHvLFVbQlGDVlNzHaRmWPjoR1OdkoMTNUWwLROQhB0MhCbQ2Q4e/Q5nAH2nTpyPYJVSahoKyvTcKJVtU4NUW2k94jTVA7X4hroBjGbxxC2NRKWgE+OBktGgn6iyW43J9cIxSFNX72LaivLP0WepKS+PdszQAWPrOgzhjOFyjggp1koWa6P3tGKUpNLzHCD0e+gu4keu9C2M4rLBLM6dhQQt1bIjn0BvhVSbkmosOrEz7W4yCef0eI7RNmjkNp8/b+LIYjOvDYqzcFY+TCOlTtgNjyMnIlgc4Su7CKAmjRob67wk2hnz/Ag4p00jw0mElrnZghKZRAB1WpeujGjHAWDmrI4xQIMoUl403yfatPTBGjUEcpEHTYOmgNN0Ao8vJ2DbfR2BREUafgwF3qtjCWNq+3ojUw/nJcXgjZ0GKMi2ghbDHKedipbqQdpG1EB0lXHTIwYAsBZOM+8NOK1w5mCzSGeF+uaFgfyIxHuPrakOeWtfxGNN549FhZOVmwZbRGG+TfTceX61bi12anS7z60sCkU0NYxLlHiOt1LHxxslitP8fCGOklhN9b5tzxpyuG2On9mw9UYxzC/LsWxxFUvaUbpNLGa71jkH5fOHuYi6TYby4T8WRF+HO4yjkH106/ecklZbfU3FkeEQY/WOd8+/JMGbnT2l2PlElcuXD24xTfmVnlQtX7lcFAFVFLapSjA9LXuxoOvSzUnwwbMQKM7cY88eTdBxvn69OEz3+yUAYE9Iq0uytcvF5GYVN+PTWwkyBZlDyUhXBCmFaY4bDxi0x+ctJQo7L5+s8mTdiJ1XTUM3LsMqlvyfWhW2rUFMLwxLUryUvsrCNq0L4jqCwHgwbdfmdzBspPnGX7Lux8Z+o5mVY5dJnCsvWQmEoqYWhAip5oVCOd8VG+CTMYNgI5ZAMI1VV3+cplxiGwDFod5ULdtDUogXTUsvmfAziNKQfoUMFxgyHjQQ5f0qKMbt9uUuMkWpedlW5tKZCzgqJNbX03hxMNcBYYa2wHgwbq8XzSVLNXq/ztBip5mVXlYvG2pHuUFGLP39Q8hIaa7RmI+wfGvavxJhdXiXGSDUvu6pcJPqES2OoJXjjoORFYQvgVyzo0BgYDBur09eTtJr9iM8l1Gh0j5FqXnZWuYBBBm5Vp5Zw1rDkRTvLkYMKsYbBsJHKHy4SY8wuHiBWkoku3FNzRjUvO6tcgLuDnFr6s96VvHBrqeDstvdg2EjNz75nqd3xGHMysRjzn0kwZtN+kXdOGJORnL0+TCwOnufzdTaa155tymix/jGxDW7zOWGM9UXiuHy+g0kp/z+TOtt9lPwxm9grGSGP32aCMBLH5dPUNv/ObxJcONKWov1i/XMB47TiFFv10qyWfSNZVBKjGOMwFOMfrItRTKX1xtPnVBgzhzHo9ulm7MOLbDu2CtJQbJYsKokJMdkSBkIG+6QMBxJHnhTj/O77SWp3HH/tyIsAoGkqqMPeBSt7UIATWVQSo1BIWSL/OEaOh8X4fJKOIy3Wo9yRYecBVKgdtAagKL3HKXAiqy+Jgdo3NcEdaacxZMpP+j4tQ4kcX7bgLd9xa5MybdvjJzVhTOuOYx6o7zggC6TCb0cq8HIiqy+JcagD8KA+7YJt4Wc/pWW2Ny8TG0sA9JuU9e3RFzwU4kn67TgbuSsmsu3Yqv3ZmqNk9UUI7qfv7724Vf7LIAAroU/LUCIneGOHK2/B2yZlNXLbsYnFCIQxrTuer+efhjFk++qqL4KhhA1lXPwglQ7D0SZlDGsJSkKcKN+fCOOMsjLX+WdhFIJGcRalZYYZF6VZWyCnyg5V2Mb6L8MY3DHIZmXGYqxRhmxf5fN4EmtwerOoJKY13guLvRiZFx9kXFYOWruNEWRtEAsVi3HxGvP0TrZvVtOrJkZg5JssqDU7xzN4IVlUEsM8cCO2n+Cuux4jpWUGGZfGqDAQYawcSWTRS/UT3c0NoYzH6DhSkvB0JEZojISqaB2YCuQmp08WlcQoLJ1Vg5d2Z6ui7TFSWmaQcfHpGbOF0Q/tkoUQJ8IYTXHojrOLh3EYQzalv2DZ5FGQkUUlMS7RYhwrq2C583qMlJahjIsvoinRCDSoCaNrF649Vu+8kewPcPzdrD4fURrM+K8JE1WKlntCjCwqifE1MUxCL92KTlERTJ+WoYyLPwEkc0frFfSblFF7Qow7I1/7RV2Gl45Bs+dTiJau4RiUP2a9I73nON4brTuS8e0GotVKOAblL9lYbyTt9Eaa1ROq8ch/RGAceOPQp2cv08G4zgjb0LHGUKQ1hoyLU4BpkNzG+D7uNVJDjMvryWDcManpwBjRpCbrJZ8IRnihJSEC4+5vhuzbWXp3pIKZj+RiFGP0IhnqlVyPe1cL++/D+Pawn6XenGdPpcf+JEKHuKIXyVCv1Hraf2cXH6zILhbwZ1W0RUvxjYMpf9pPZEyIbM85s3/JO/vmRGEgjOMCAvJyoqgVT1u9vlnbfP+Pd5dsYWnPMNIkdm7v+ecchiszvwlssk92sxviDyahn3S802SKPkmYxLLPWDxR14uCOo+pm5MkpDKZOIyLjjc7EfVatAfJYMFMmJB7g8+wiREMMGrvhef5kNdViDV5p+oHJmakxRJK28SXd1HnMa9WLoyglxpdlrThuEoxf4MHyWDBjPDJvZnYOlniOHKqxTa4HKOYxHLYxDLvKs86eC9skdtjC6HqZFKJkTqPqXKXqfiAsSyUy6KUKGOmbEajKpiRdzXuDT3DdDPUqW+EmQsu97awFIbKqCaJ14w9qpPBK2S6hPIHYSSXRcmX+dtpm6P1RYK/GveGnmGouaGJoEcOtLAeEIO7Nkvor3NBLYkIY8ctaG4mjGEHYynGY3k8QosR72rA0TNMNduM3Cp6/SrGsRDlqjTBWIt8/EeliDUY6RmGmtvACD3BG07zQRjRWFmV7x5B3ouxFoW8WYcR+zriX+pibN0beoahfjgajcTxphqEcYKBNcMP2aT3pW5CjAZjjG+rvOsjxta9oWcYqduzwxXGaDsI47thEnuJ9FPSsuzDiBOeUoNxigEbXbAuxta9oWeYab5DjC4EQ6eOk482SygNlsKPuxaLjz/oSjL1C1+0a2pyWeQNjVtT+KG6FPp4V+ve0DPM9OPeXYgBaDr0eK5UZAV2dPxmBXeaBo42h+PRWcFRnJZrfyxq75sVVA8j59pvnSUdi5UQ+bdT9LzDFTDC6c7jrWCGGN1q8TLjnQQPDtfACD/f5h5rOcZI28t412MiRufC1jLXVUhmASZ87dfFEEbHqQk62//qda10BkosRP65vOOfxCgP9782R8I4FXI56FLVhRjBPMy8Vq44Fj5WwZBFI/8ljGUei6zxW2vsS0ZFMtfDCFLGrY7eHK1mMoH2S8eikeZNkz9Tbswq7RbQhCKkIplrYKTNyMZZyMVx5yRc12KNh8PoLJpMdemZKLs19qa425aKZOxEarisUgPMN9hv3py81skU01+fLZrGMIyVZaUqEEVeNBvqqUjG7hEdegEsjCjSrOeXk9c6rv2sFL7GW1AteMbjVPV/E6LMQkWPimTcY6Sx+BWM8He03jlYzSSlEHmmx5inYym1bSKUljfWbGGRzNUwAgBSNB+O8PPl3v7nMUvpFJhuXUyGGIv3IF2meIJMkQuJkYpkbGh+HLA12WA4omD5emeTI9nb3dGIX8NCIMZ123uwThTRVaowYpGMc4wksGcYRptbm2GG2o/lIiOM6lKzJyUtvabbm7JgSozUVCSD/819iNFr+DCOHrYHzzZHWdpST7sWTb0a17imTtop9tRv+5YlfkJFMp5vo2WeBqN1jhSuGSbNXKVt9dvH9087fkkzV5tP9EUhcPPCr02PswyPvigElrcVN44XYQTztgldRacttx6Phw1YHX+9GOnzyK034ezBKUaI4HzukVlTPbvzRjhTYH029/jAqiozwFWMq5CiT1QuHiuPjwLzk5X7ockrdIlrB9wgCG4X4A6jvg52cWQ0eQy8H283YJMiyB+fajH/g40Udl9qRAYfr/0HwxGPS7dFsQEI3Yt4GXh/HRGjVZ1rRNMSJu05Beu5pZd6eO4cOM0dZ4+R2+EI+m0U/95RzDoFhxfrGAkdQWU+BQ9mWowAxhT7FT3vuLzVwew1Ai0NtxxhwyZWf+dohCWbLbiBNsSAK4ykDZsCheDwBPYwwrCPwZIRxmfCZdgUCgCGcdzvPCYKqtMIdKlDpxSxtpWJ5AkdVkYjKA0t/Ocy4fHub+xhHBru4ZENxrv9eYxDtyl/JU7BkQ3G6sbSt/ErGJ+5zBu96qctjMP/CDywSYDrMI5sYYS+1SAbt7pauhyNUT9GPssYt6OxP07B8t5joru93uYbGes8RoYdrXc6WO4iNWlxywYjuMF4UVfI6JFLqN7CgGWJ7R24cGQSqoNb5xj72v0/M3FjgqcejJYBnsPIxBucb/RODFiGiL6/FLvVYLUAPUerAkCSAAxzE7/bu9sWR2EgDuA7QyAvBTUSSHxsfHa//9c70/Zo4c7euVpdZucnFZaFhf6ZNNm0k2ZKIhziEeADdlRi1BLeCuGVkWPcI8qayGtjlhwQ4/K8dfpZ/ztxCcIGW3M0RBY8xZEx4h85Utlw9DGeB2siMbpzYxyJDOrMwrEQnsiexhQjUg3HwuccVUNjwRNMJexo7cFImsi2bdhK2B8u/6bUCp97OmjEGNe4Z3J4vZahVAqf29OJvKWVbZ2o8Q6uj5VneKiWyHonLbdGCI9rdauHzWnMMGJS2zZiN71oSnP5ICFoEY5DttutqvEte90/rJ8j03CesiUyT4tcwmmkodKXHnUIZ0FL5ogtp+E0qqPSoiUmCTtCQPwGh4AfrkhWf/YGdzpfHZOJyGJnVV8/Xi9/W0pxVY5oGyqHlIm0hP2sKkbULZVOarGwK3FAYzXqnsq5rCKrEQ6DVFN0o3xbUK9J29BJsZdvjxD/tguEykwZkaWOKAYNp0Dd5Y7Il+WJOE8QToAyadKCyD8vH+FllHACqcc8I1KK12K0CIfDsh4uMZVS9DFOGg6GUo8TpRB3qEb87b8jrPshLSIqw/lGhOkoN7S1KG2TxFqrdankYpao9MyascnnKhSCVoZe4HKjEL8SYZmYrhmmPJ+maRiatquNncOU+ExKVSZtFs6igF58j3J0eWd0qZSS3r+G6D0andT98JlmrijiYhZXYRhXsUunpmnbvu9vN59yeqGys/2KCGJ3+cyH29PvunEc69oYk3j3AatL7dn5Z1OPfTPkn+nFxb6+bp7+WhBE0XwTwt8ojt9X/LOOHsKwqvyjin2tOa9wRTyrwij6gfkwxhhjjDHGGGOMMcYYY4wxxhhjjDHGvodfI7w8dpRp7NcAAAAASUVORK5CYII=" alt="Pre 1900" data-testid="ImageSlideComponentImgPartTestId" width="326" height="326"/>'
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

    def _check(self, html, expectedHtml):
        rewriter = HTMLRewriter()

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


if __name__ == '__main__':
    unittest.main()
