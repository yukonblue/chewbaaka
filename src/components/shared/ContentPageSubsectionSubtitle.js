/**
 * ContentPageSubsectionSubtitle.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 25, 2020
 * Updated  : Aug 07, 2020
 */

import React from 'react'

import { getElementStyleClassName } from '../../styling/styling'

import './ContentPageSubsectionSubtitle.css'

if ( process.env.NODE_ENV === 'development' )
  require('./ContentPageSubsectionSubtitle-debug.css')

export default function ContentPageSubsectionSubtitle({ children }) {
  return (
    <h4 className={getElementStyleClassName("ContentPageSubsectionSubtitle")}>
      {children}
    </h4>
  );
}
