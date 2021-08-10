/**
 * Debug.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 10, 2021
 * Updated  : Aug 10, 2021
 */

import React from 'react'

import HtmlComment from '../shared/HtmlComment'

const __TEST__ = ( process.env.NODE_ENV === "test" );

export default function RenderVersionString(version) {
  return (!__TEST__) ? (
    <HtmlComment
      text={`Version: ${version}`}
    />
  ) : null;
}
