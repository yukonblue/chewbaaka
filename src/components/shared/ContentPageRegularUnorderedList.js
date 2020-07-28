/**
 * ContentPageRegularUnorderedList.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 26, 2020
 * Updated  : Jul 28, 2020
 */

import React from 'react'

export default function ContentPageRegularUnorderedList({ obj, formatter }) {
  return (
    <ul>
      {
        obj.map((item, idx) => (
          <li key={idx} className="ContentPageRegularTextSize ContentPageRegularTextLineHeight">
            {(formatter ? formatter(item) : item)}
          </li>
        ))
      }
    </ul>
  );
}
