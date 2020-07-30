"""
versionutils.py

Author   : Tomiko
Created  : Jul 29, 2020
Updated  : Jul 29, 2020
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

    if args.bump_patch:
        patchStr = bumpStr(patchStr)
    elif args.bump_minor:
        minorStr = bumpStr(minorStr)
    else:
        majorStr = bumpStr(majorStr)

    return '.'.join([majorStr, minorStr, patchStr])


## -----------------------------------------------------------------------------


def process_impl(args, filepath, logger):
    newd = None
    with open(filepath, 'r') as fd:
        d = json.load(fd)
        versionStr = d['version']
        logger.info('Current version: {version}'.format(version=versionStr))
        if (any((args.bump_patch, args.bump_minor, args.bump_major))):
            bumpedVersionStr = bumpVersionStr(versionStr, args)
            logger.info('New version: {version}'.format(version=bumpedVersionStr))
            d['version'] = bumpedVersionStr
            newd = d

    if newd:
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


def driver(args):
    logger = getLogger()

    arg_vals = [args.bump_patch, args.bump_minor, args.bump_major]

    true_count =  arg_vals.count(True)

    if true_count > 1:
        sys.stderr.write('Must supply one of bump-patch, bump-minor, and bump-major.\n')
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

    args = parser.parse_args()

    sys.exit(driver(args))


## -----------------------------------------------------------------------------


if __name__ == '__main__':
    main()
