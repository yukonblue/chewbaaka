"""
versionutil_test.py

Author   : Tomiko
Created  : Aug 07, 2021
Updated  : Aug 17, 2021
"""

import unittest

from collections import namedtuple

import versionutil


## -----------------------------------------------------------------------------


class TestValidateSemverPrerelease(unittest.TestCase):

    valid_inputs = [
        "alpha",
        "alpha.1",
        "0.3.7",
        "x.7.z.92",
        "x-y-z.-",
    ]

    invalid_inputs = [
        "",
        "01",
    ]

    def testValidateSemverPrereleaseWithValidCases(self):
        for item in self.valid_inputs:
            self.assertTrue(versionutil.validateSemverPrerelease(item),
                'semver prerelease component \'{prerelease}\' expected to be valid'.format(prerelease=item))

    def testValidateSemverPrereleaseWithInvalidCases(self):
        for item in self.invalid_inputs:
            self.assertFalse(versionutil.validateSemverPrerelease(item),
                'semver prerelease component \'{prerelease}\' expected to be invalid'.format(prerelease=item))


## -----------------------------------------------------------------------------


class TestValidateSemverBuild(unittest.TestCase):

    valid_inputs = [
        "001",
        "20130313144700",
        "exp.sha.5114f85",
        "01"
    ]

    invalid_inputs = [
        "",
        "xyz+",
    ]

    def testValidateSemverBuildWithValidCases(self):
        for item in self.valid_inputs:
            self.assertTrue(versionutil.validateSemverBuild(item),
                'semver build component \'{build}\' expected to be valid'.format(build=item))

    def testValidateSemverBuildWithInvalidCases(self):
        for item in self.invalid_inputs:
            self.assertFalse(versionutil.validateSemverBuild(item),
                'semver build component \'{build}\' expected to be invalid'.format(build=item))


## -----------------------------------------------------------------------------


class TestBumpVersionString(unittest.TestCase):

    Args = namedtuple('Args', ['bump_major', 'bump_minor', 'bump_patch', 'prerelease', 'build'])

    inputs = [
        {
            'verStr': '1.0.0',
            'args': {
                'bump_major': False,
                'bump_minor': False,
                'bump_patch': True,
                'prerelease': None,
                'build': None,
            },
            'expected': '1.0.1'
        },
        {
            'verStr': '1.23.456',
            'args': {
                'bump_major': False,
                'bump_minor': True,
                'bump_patch': False,
                'prerelease': None,
                'build': None,
            },
            'expected': '1.24.0'
        },
        {
            'verStr': '123.45.6',
            'args': {
                'bump_major': True,
                'bump_minor': False,
                'bump_patch': False,
                'prerelease': None,
                'build': None,
            },
            'expected': '124.0.0'
        },
        {
            'verStr': '1.23.456-alpha.1+build.xyz',
            'args': {
                'bump_major': False,
                'bump_minor': False,
                'bump_patch': True,
                'prerelease': None,
                'build': None,
            },
            'expected': '1.23.457'
        },
        {
            'verStr': '1.23.456-alpha.1+build.xyz',
            'args': {
                'bump_major': False,
                'bump_minor': True,
                'bump_patch': False,
                'prerelease': None,
                'build': None,
            },
            'expected': '1.24.0'
        },
        {
            'verStr': '1.23.456-alpha.1+build.xyz',
            'args': {
                'bump_major': True,
                'bump_minor': False,
                'bump_patch': False,
                'prerelease': None,
                'build': None,
            },
            'expected': '2.0.0'
        },
        {
            'verStr': '123.45.6',
            'args': {
                'bump_major': False,
                'bump_minor': False,
                'bump_patch': True,
                'prerelease': 'alpha.1.2.3',
                'build': 'build.xyz',
            },
            'expected': '123.45.7-alpha.1.2.3+build.xyz'
        },
        {
            'verStr': '123.45.6-alpha.1.2.3',
            'args': {
                'bump_major': False,
                'bump_minor': False,
                'bump_patch': False,
                'prerelease': None,
                'build': '08.17.2021-0900',
            },
            'expected': '123.45.6+08.17.2021-0900'
        },
        {
            'verStr': '123.45.6+08.17.2021-0815',
            'args': {
                'bump_major': False,
                'bump_minor': False,
                'bump_patch': False,
                'prerelease': None,
                'build': '08.17.2021-0900',
            },
            'expected': '123.45.6+08.17.2021-0900'
        },
        {
            'verStr': '123.45.6+08.17.2021-0815',
            'args': {
                'bump_major': False,
                'bump_minor': False,
                'bump_patch': False,
                'prerelease': 'alpha.1.2.3',
                'build': None,
            },
            'expected': '123.45.6-alpha.1.2.3'
        },
        {
            'verStr': '1.23.456-alpha.1+build.xyz',
            'args': {
                'bump_major': True,
                'bump_minor': False,
                'bump_patch': False,
                'prerelease': 'beta.2',
                'build': '08.17.2021-0900',
            },
            'expected': '2.0.0-beta.2+08.17.2021-0900'
        },
        {
            'verStr': '1.23.456-alpha.1',
            'args': {
                'bump_major': False,
                'bump_minor': False,
                'bump_patch': True,
                'prerelease': None,
                'build': '08.17.2021-0900',
            },
            'expected': '1.23.457+08.17.2021-0900'
        },
    ]

    def testBumpVersionString(self):
        class Struct:
            def __init__(self, **entries):
                self.__dict__.update(entries)

        for item in self.inputs:
            verStr = item['verStr']
            args = self.Args(**item['args'])
            expected = item['expected']
            bumpedVersionStr = versionutil.bumpVersionStr(verStr, args)
            self.assertEqual(expected, bumpedVersionStr)


## -----------------------------------------------------------------------------


if __name__ == '__main__':
    unittest.main()
