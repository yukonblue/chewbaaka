/**
 * src/config.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 09, 2020
 * Updated  : Aug 20, 2020
 */

import packageJson from '../package.json'

export const config = {
  version: packageJson.version,
  author: 'Will Li',
  styling: {
    mode: 'prod',
    debugStyles: {
      'DebugColor': true,
      'DebugWireframe': true,
    }
  },
  headMeta: {
    title: "Learn about cheetahs",
    description: "Learn about cheetahs by exploring the Cheetah Museum at Cheetah Conservation Fund",
    keywords: [
      "cheetah",
      "cheetah conservation",
      "cheetah facts",
      "learn about cheetahs",
      "hope for cheetahs",
      "Cheetah Conservation Fund",
      "wildlife conservation",
      "conservation"
    ]
  }
};
