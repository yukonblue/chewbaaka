/**
 * src/config.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 09, 2020
 * Updated  : Jul 31, 2020
 */

import packageJson from '../package.json'

export const config = {
  version: packageJson.version,
  author: 'Will Li',
  styling: {
    mode: 'debug',
    debugStyles: {
      'DebugColor': true,
      'DebugWireframe': false,
    }
  }
};
