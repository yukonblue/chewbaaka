/**
 * src/config.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 09, 2020
 * Updated  : Jul 29, 2020
 */

import packageJson from '../package.json'

export const config = {
  version: packageJson.version,
  styling: {
    mode: 'prod',
    debugStyles: {
      'DebugColor': true,
      'DebugWireframe': true,
    }
  }
};
