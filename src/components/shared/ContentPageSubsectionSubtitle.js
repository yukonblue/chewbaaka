/**
 * ContentPageSubsectionSubtitle.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 25, 2020
 * Updated  : Jul 25, 2020
 */

import React from 'react'

import '../shared/ContentPageSharedStyles.css'

import { getElementStyleClassName } from '../../styling/styling'

export default function ContentPageSubsectionSubtitle({ children }) {
  return (
    <h4 className={getElementStyleClassName("ContentPageSubsectionSubtitle")}>
      {children}
    </h4>
  );
}
