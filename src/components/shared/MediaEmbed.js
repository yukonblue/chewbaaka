/**
 * MediaEmbed.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 09, 2020
 * Updated  : Aug 12, 2020
 */

import React from 'react'

export default function MediaEmbed({ title, width, height, src }) {
  width = width ? width : 560;
  height = height ? height : 315;

  title = title ? title : "YouTube video";

  return (
    <iframe
      className="FullWidth"
      title={title}
      width={width}
      height={height}
      src={src}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}
