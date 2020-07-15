/**
 * ContentPageParagraph.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 14, 2020
 * Updated  : Jul 14, 2020
 */

import React from 'react';

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
