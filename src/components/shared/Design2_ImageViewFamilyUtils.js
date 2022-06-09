/**
 * Design2_ImageViewFamilyUtils.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jun 09, 2022
 * Updated  : Jun 09, 2022
 */

const __Design2ImageViewFamilyImgStyles = [
  "ImageViewFamilyImgLayoutStyles",
  "ImageViewFamilyImgBorderStyles"
]

const __Design2ImageViewFamilyContainerStyles = [
  "ImageViewFamilyContainerBorderStyles",
  "ImageViewFamilyContainerShadow",
  "ImageViewFamilyContainerBackgroundStyles"
]

function join(arr) {
  return arr.join(" ")
}

const Design2ImageViewFamilyImgStyles = join(__Design2ImageViewFamilyImgStyles)

const Design2ImageViewFamilyContainerStyles = join(__Design2ImageViewFamilyContainerStyles)

function combineStyles(a, b) {
  return (a + " " + b);
}

export {
  Design2ImageViewFamilyImgStyles,
  Design2ImageViewFamilyContainerStyles,
  combineStyles
}
