/**
 * ImageCaptionUtils.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 25, 2020
 * Updated  : Jul 25, 2020
 */

import { getFormattedImageCaptionStringWithCredit } from '../ImageCaptionUtils'

test('getFormattedImageCaptionStringWithCredit', () => {

  const caption = "This is an image.";
  const credit = "Image God";

  const expectedCaptionString = "This is an image. (Image credit: Image God)";

  const result = getFormattedImageCaptionStringWithCredit(caption, credit);

  expect(result).toEqual(expectedCaptionString);
});
