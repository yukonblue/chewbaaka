/**
 * MediaEmbed.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 09, 2020
 * Updated  : Aug 09, 2020
 */

import React from 'react'

export default function MediaEmbed({ title, width, height, src }) {
  width = width ? width : 560;
  height = height ? height : 315;

  title = title ? title : "YouTube video";

  const componentDimensionStyle = {
    width: width,
    height: height
  };

  return (
    <div style={componentDimensionStyle}>
      <iframe
        title={title}
        width={width}
        height={height}
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
    </div>
  );
}
