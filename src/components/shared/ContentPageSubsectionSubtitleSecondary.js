/**
 * ContentPageSubsectionSubtitleSecondary.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 25, 2020
 * Updated  : Aug 07, 2020
 */

import React from 'react'

import { getElementStyleClassName } from '../../styling/styling'

import './ContentPageSubsectionSubtitleSecondary.css'

if ( process.env.NODE_ENV === 'development' )
  require('./ContentPageSubsectionSubtitleSecondary-debug.css')

export default function ContentPageSubsectionSubtitleSecondary({ children }) {
  return (
    <h5 className={getElementStyleClassName("ContentPageSubsectionSubtitleSecondary")}>
      {children}
    </h5>
  );
}
