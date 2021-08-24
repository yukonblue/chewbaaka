/**
 * addPreloadLink.js
 *
 * Converts a stylesheet <link> tags in a html page's head markup
 * to be "preload" links.
 *
 * https://web.dev/preload-critical-assets/
 *
 * This script is taken from dicussion on this topic (CRA's issue)
 *
 * facebook / create-react-app
 * Add preload to script and link tags in production builds #3319
 *
 * https://github.com/facebook/create-react-app/issues/3319
 */

const fs = require('fs');
const pathToEntry = './build/index.html';
const bundlesRegExp = /\/static\/\w+\/\w+.[a-z0-9]+.[a-z0-9]+.\w{2,3}/g;
const splitBy = '</title>';

const builtHTMLContent = fs.readFileSync(pathToEntry).toString();
const links = builtHTMLContent.match(bundlesRegExp);
const parts = builtHTMLContent.split(splitBy);

let fileWithPreload = [
  parts[0],
  splitBy,
];

console.log('Adding preload links for the following static files in index.html head:');
links.forEach(link => {
  console.log(link);

  let fileType = 'script';

  if (/\.css$/.test(link)) {
    fileType = 'style';
  }

  fileWithPreload = [
    ...fileWithPreload,
    `<link rel="preload" href="${link}" as="${fileType}">`,
  ];
});

fileWithPreload = [
  ...fileWithPreload,
  parts[1],
];

fs.writeFileSync(pathToEntry, fileWithPreload.join(''));
