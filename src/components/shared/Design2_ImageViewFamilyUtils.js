/**
 * Design2_ImageViewFamilyUtils.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jun 09, 2022
 * Updated  : Jun 11, 2022
 */

import { join } from './Utils'

const __Design2ImageViewFamilyImgStyles = [
  "ImageViewFamilyImgLayoutStyles",
  "ImageViewFamilyImgBorderStyles"
]

const __Design2ImageViewFamilyContainerStyles = [
  "ImageViewFamilyContainerBorderStyles",
  "ImageViewFamilyContainerShadowStyles",
  "ImageViewFamilyContainerBackgroundStyles"
]

const __Design2ImageViewFamilyCaptionContainerStyles = [
  "ImageViewFamilyCaptionContainerStyles"
]

const Design2ImageViewFamilyImgStyles = join(__Design2ImageViewFamilyImgStyles)

const Design2ImageViewFamilyContainerStyles = join(__Design2ImageViewFamilyContainerStyles)

const Design2ImageViewFamilyCaptionContainerStyles = join(__Design2ImageViewFamilyCaptionContainerStyles)

export {
  Design2ImageViewFamilyImgStyles,
  Design2ImageViewFamilyContainerStyles,
  Design2ImageViewFamilyCaptionContainerStyles
}
