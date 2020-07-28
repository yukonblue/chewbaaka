/**
 * ContentPageParagraph.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 14, 2020
 * Updated  : Jul 28, 2020
 */

import React from 'react'

import './ContentPageParagraph.css'
import './ContentPageSharedStyles.css'

import { getElementStyleClassNames } from '../../styling/styling'

export default function ContentPageParagraph({ children }) {
  return (
    <p className={getElementStyleClassNames(["ContentPageRegularTextSize",
                                            "ContentPageContentParagraphText"])}
    >
      {children}
    </p>
  );
}
