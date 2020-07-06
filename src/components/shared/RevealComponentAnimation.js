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

/**
 * Utility function that returns the supported animation of the `Reveal`
 * component from Semantic UI.
 *
 * @param {string} animation : Desired animation of the component.
 * If the specified animation is not one of the supported animations,
 * or if the argument is null, then returns one of the supported
 * animations at random.
 */
export const getRevealComponentAnimation = function(animation) {
  let idx = supportedRevealComponentAnimations.indexOf(animation);

  // If cannot find the specified animation, then just
  // randomly pick one.
  if ( idx === -1 ) {
    idx = Math.floor(Math.random() * supportedRevealComponentAnimations.length);
  }

  return supportedRevealComponentAnimations[idx];
}
