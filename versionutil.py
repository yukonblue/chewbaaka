"""
versionutil.py

Author   : Tomiko
Created  : Jul 29, 2020
Updated  : Aug 07, 2021
"""

"""
This script is not the best, but life is too short ...
"""

import argparse
import errno
import json
import logging
import os
import sys


## -----------------------------------------------------------------------------


PROG = 'versionutils'


## -----------------------------------------------------------------------------


PACKAGE_JSON_FILENAME = 'package.json'


## -----------------------------------------------------------------------------


EXIT_SUCCESS = 0


## -----------------------------------------------------------------------------


def toInt(s):
    try:
        return int(s)
    except:
        return 0


## -----------------------------------------------------------------------------


def bumpStr(s):
    i = toInt(s)
    return (str(i+1))


## -----------------------------------------------------------------------------


def bumpVersionStr(versionStr, args):
    pieces = versionStr.split('.')
    majorStr = pieces[0] if pieces else '0'
    minorStr = pieces[1] if len(pieces) >= 1 else '0'
    patchStr = pieces[2] if len(pieces) >= 2 else '0'

    patchStr = patchStr.split('-')[0]

    if args.bump_patch:
        patchStr = bumpStr(patchStr)
    elif args.bump_minor:
        minorStr = bumpStr(minorStr)
        patchStr = '0'
    elif args.bump_major:
        majorStr = bumpStr(majorStr)
        minorStr = '0'
        patchStr = '0'

    result = '.'.join([majorStr, minorStr, patchStr])

    if args.prerelease:
        result += ('-' + args.prerelease)
    if args.build:
        result += ('+' + args.build)

    return result


## -----------------------------------------------------------------------------


def process_impl(args, filepath, logger):
    newd = None
    with open(filepath, 'r') as fd:
        d = json.load(fd)
        versionStr = d['version']
        logger.info('Current version: {version}'.format(version=versionStr))
        bumpedVersionStr = bumpVersionStr(versionStr, args)
        logger.info('New version: {version}'.format(version=bumpedVersionStr))
        d['version'] = bumpedVersionStr
        newd = d

    if newd and not args.display_only:
        with open(filepath, 'w') as fd:
            json.dump(newd, fd, separators=(',', ': '), indent=2, sort_keys=True)

    return EXIT_SUCCESS


## -----------------------------------------------------------------------------


def process(args, filepath, logger):
    try:
        return process_impl(args, filepath, logger)
    except Exception as ex:
        logger.exception(ex)
        return -1


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


def validateSemverPrerelease(s):
    """
    https://semver.org/#spec-item-9

    A pre-release version MAY be denoted by appending a hyphen and a series
    of dot separated identifiers immediately following the patch version.
    Identifiers MUST comprise only ASCII alphanumerics and hyphens [0-9A-Za-z-].
    Identifiers MUST NOT be empty. Numeric identifiers MUST NOT include leading
    zeroes. Pre-release versions have a lower precedence than the associated
    normal version. A pre-release version indicates that the version is unstable
    and might not satisfy the intended compatibility requirements as denoted by
    its associated normal version. Examples: 1.0.0-alpha, 1.0.0-alpha.1,
    1.0.0-0.3.7, 1.0.0-x.7.z.92, 1.0.0-x-y-z.–.
    """
    for component in s.split('.'):
        if len(component) == 0 or not all((c.isalnum() or c == '-') for c in component):
            return False
        if component[0] == '0' and len(component) > 1:
            try:
                int(component)
                return False
            except:
                pass
    return True


## -----------------------------------------------------------------------------


def validateSemverBuild(s):
    """
    https://semver.org/#spec-item-10

    Build metadata MAY be denoted by appending a plus sign and a series of dot
    separated identifiers immediately following the patch or pre-release
    version. Identifiers MUST comprise only ASCII alphanumerics and hyphens
    [0-9A-Za-z-]. Identifiers MUST NOT be empty. Build metadata MUST be ignored
    when determining version precedence. Thus two versions that differ only in
    the build metadata, have the same precedence. Examples: 1.0.0-alpha+001,
    1.0.0+20130313144700, 1.0.0-beta+exp.sha.5114f85,
    1.0.0+21AF26D3—-117B344092BD.
    """
    for component in s.split('.'):
        if len(component) == 0 or not all((c.isalnum() or c == '-') for c in component):
            return False
    return True


## -----------------------------------------------------------------------------


def driver(args):
    logger = getLogger()

    if not any((args.bump_patch, args.bump_minor, args.bump_major, args.prerelease, args.build)):
        sys.stderr.write('Must supply at least one of --bump-patch, --bump-minor, --bump-major, --prerelease, and --build.\n')
        return errno.EINVAL

    arg_vals = [args.bump_patch, args.bump_minor, args.bump_major]

    args_count = arg_vals.count(True)

    if args_count > 1:
        sys.stderr.write('Must supply exactly one of --bump-patch, --bump-minor, and --bump-major.\n')
        return errno.EINVAL

    if args.prerelease and not validateSemverPrerelease(args.prerelease):
        sys.stderr.write('Invalid semver prerelease component: \'{prerelease}\'.\n'.format(prerelease=args.prerelease))
        return errno.EINVAL

    if args.build and not validateSemverBuild(args.build):
        sys.stderr.write('Invalid semver build component: \'{build}\'.\n'.format(build=args.build))
        return errno.EINVAL

    filepath = os.path.join(os.getcwd(), PACKAGE_JSON_FILENAME)

    logger.info(filepath)

    if (not os.path.exists(filepath)) or (not os.path.isfile(filepath)):
        sys.stderr.write('Cannot find {filename}.\n'.format(filename=PACKAGE_JSON_FILENAME))
        return errno.ENOENT

    return process(args, filepath, logger)


## -----------------------------------------------------------------------------


def main():
    parser = argparse.ArgumentParser(prog=PROG, description='Version utility.')
    parser.add_argument('--bump-patch', dest='bump_patch', action='store_true', default=False, help='Bump version patch number.')
    parser.add_argument('--bump-minor', dest='bump_minor', action='store_true', default=False, help='Bump version minor number.')
    parser.add_argument('--bump-major', dest='bump_major', action='store_true', default=False, help='Bump version major number.')
    parser.add_argument('--prerelease', dest='prerelease', action='store', type=str, help='Specifies the prerelease component of the version string.')
    parser.add_argument('--build', dest='build', action='store', type=str, help='Specifies the build component of the version string.')
    parser.add_argument('--display-only', dest='display_only', action='store_true', help='Display the bumped version string only, does not write to file.')
    args = parser.parse_args()

    sys.exit(driver(args))


## -----------------------------------------------------------------------------


if __name__ == '__main__':
    main()
