/**
 * addPreloadWoff.js
 *
 * Add "preload" <link> tags in a html page's head markup
 * for all static font .woff/.woff2 files built.
 *
 * https://web.dev/preload-critical-assets/
 *
 * This script is taken from dicussion on this topic (CRA's issue)
 *
 * facebook / create-react-app
 *
 * How to preload web fonts? #6860
 * https://github.com/facebook/create-react-app/issues/6860
 *
 * Add preload to script and link tags in production builds #3319 
 * https://github.com/facebook/create-react-app/issues/3319
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const assets = glob.sync(__dirname + '/build/static/media/*.woff*')
  .map((assetPath) => {
    // console.log(assetPath);
    return path.relative(__dirname + '/build', assetPath);
  });

const pathToEntry = './build/index.html';
const splitBy = '</title>';

const builtHTMLContent = fs.readFileSync(pathToEntry).toString();

const parts = builtHTMLContent.split(splitBy);

const fileWithPreload = [
  parts[0],
  splitBy
];

console.log('Adding preload links for the following static files in index.html head:');
for (const link of assets) {
  console.log(link);
  fileWithPreload.push(`<link rel="preload" href="${link}" as="font">`);
}

fileWithPreload.push(parts[1]);

fs.writeFileSync(pathToEntry, fileWithPreload.join(''));
