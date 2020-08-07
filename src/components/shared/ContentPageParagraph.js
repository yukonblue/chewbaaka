/**
 * ContentPageParagraph.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 14, 2020
 * Updated  : Aug 07, 2020
 */

import React from 'react'

import { getElementStyleClassNames } from '../../styling/styling'

import './ContentPageSharedStyles.css'

import './ContentPageParagraph.css'

if ( process.env.NODE_ENV === 'development' )
  require('./ContentPageParagraph-debug.css')

export default function ContentPageParagraph({ children }) {
  return (
    <p className={getElementStyleClassNames(["ContentPageRegularTextSize",
                                            "ContentPageRegularTextLineHeight",
                                            "ContentPageContentParagraphText"])}
    >
      {children}
    </p>
  );
}
