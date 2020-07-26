/**
 * ContentPageSubsectionSubtitleSecondary.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 25, 2020
 * Updated  : Jul 25, 2020
 */

import React from 'react'

import './ContentPageSubsectionSubtitleSecondary.css'

import { getElementStyleClassName } from '../../styling/styling'

export default function ContentPageSubsectionSubtitleSecondary({ children }) {
  return (
    <h5 className={getElementStyleClassName("ContentPageSubsectionSubtitleSecondary")}>
      {children}
    </h5>
  );
}
