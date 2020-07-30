/**
 * src/config.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 09, 2020
 * Updated  : Jul 30, 2020
 */

import packageJson from '../package.json'

export const config = {
  version: packageJson.version,
  author: 'Will',
  styling: {
    mode: 'prod',
    debugStyles: {
      'DebugColor': true,
      'DebugWireframe': true,
    }
  }
};
