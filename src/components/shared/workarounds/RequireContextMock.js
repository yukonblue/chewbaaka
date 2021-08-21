/**
 * RequireContextMock.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 21, 2021
 * Updated  : Aug 21, 2021
 */

/**
 * This file consists of a mock version of `require.context` in a function form
 * that achieves somewhat similar things and is intended to be used in Jest tests
 * where `require.context` cannot be used.
 *
 * Example usage:
 * 
 * ```
 * const context = __TEST__ ? () => (requireContext(__dirname, "./assets/", true)) : () => (require.context("./assets/", true));
 * const context = requireContextWrapper;
 * const images = context(__dirname);
 *
 * <img src={images("background.png")} />
 * ```
 *
 * More at:
 * https://stackoverflow.com/questions/38332094/how-can-i-mock-webpacks-require-context-in-jest
 */

const requireContext = (dirname, base = '.', scanSubDirectories = false, regularExpression = /\.js$/) => {
  const fs = require('fs');
  const path = require('path');

  const files = {};

  function readDirectory(directory) {
    fs.readdirSync(directory).forEach((file) => {
      const fullPath = path.resolve(directory, file);

      if (fs.statSync(fullPath).isDirectory()) {
        if (scanSubDirectories) readDirectory(fullPath);

        return;
      }

      if (!regularExpression.test(fullPath)) return;

      files[fullPath] = true;
    });
  }

  readDirectory(path.resolve(dirname, base));

  function Module(file) {
    // return require(file);
    return require(path.resolve(dirname, base, file));
  }

  Module.keys = () => Object.keys(files);

  return Module;
};

export {
  requireContext
}
