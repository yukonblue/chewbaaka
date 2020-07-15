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

import { getElementStyleClassName } from '../../styling/styling'

export default function ContentPageParagraph({ children }) {
  return (
    <p className={getElementStyleClassName("ContentPageContentParagraphText")}>
      {children}
    </p>
  );
}
