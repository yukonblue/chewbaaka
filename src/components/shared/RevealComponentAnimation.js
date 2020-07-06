/**
 * RevealComponentAnimation.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 05, 2020
 * Updated  : Jul 05, 2020
 */

const supportedRevealComponentAnimations = [
  "fade",
  "small fade",
  "move",
  "move right",
  "move up",
  "move down",
  "rotate",
  "rotate left"
];

export const getRevealComponentAnimation = function(animation) {
  let idx = supportedRevealComponentAnimations.indexOf(animation);

  // If cannot find the specified animation, then just
  // randomly pick one.
  if ( idx === -1 ) {
    idx = Math.floor(Math.random() * supportedRevealComponentAnimations.length);
  }

  return supportedRevealComponentAnimations[idx];
}
