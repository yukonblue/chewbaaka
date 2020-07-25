/**
 * ImageCaptionUtils.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 25, 2020
 * Updated  : Jul 25, 2020
 */

/**
 * Returns a formatted string of an image caption and its
 * associated credit string.
 *
 * @param {String} caption 
 * @param {String} credit 
 */
function getFormattedImageCaptionStringWithCredit(caption, credit) {
  return credit ? (caption + ` (Image credit: ${credit})`) : caption;
}

export {
  getFormattedImageCaptionStringWithCredit
}
