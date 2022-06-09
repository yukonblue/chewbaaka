/**
 * Design2_ImageViewFamilyUtils.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jun 09, 2022
 * Updated  : Jun 09, 2022
 */

const Design2ImageViewFamilyImgStyles = "ImageViewFamilyImgLayoutStyles ImageViewFamilyImgBorderStyles"

const Design2ImageViewFamilyContainerStyles = "ImageViewFamilyContainerBorderStyles ImageViewFamilyContainerShadow ImageViewFamilyContainerBackgroundStyles"

function combineStyles(a, b) {
  return (a + " " + b);
}

export {
  Design2ImageViewFamilyImgStyles,
  Design2ImageViewFamilyContainerStyles,
  combineStyles
}
