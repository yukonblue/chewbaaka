/**
 * Path.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 20, 2021
 * Updated  : Aug 20, 2021
 */

/** Utilities dealing with file paths. */

const GetImagePath = (imageNameBase, ext, matches, mini=true) => {
  const imageSizeSuffix = matches ? (matches.small ? "_S" : (matches.medium ? "_M" : "_L")) : "_L";

  const miniExt = mini ? "-min" : "";

  return imageNameBase + imageSizeSuffix + miniExt + ext;
};

export {
  GetImagePath
}
