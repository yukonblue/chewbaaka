/**
 * ContentPageSubsectionPart.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 25, 2020
 * Updated  : Aug 07, 2020
 */

import React from 'react'

import './ContentPageSharedStyles.css'

import { getElementStyleClassName } from '../../styling/styling'

import './ContentPageSubsectionPart.css'

if ( process.env.NODE_ENV === 'development' )
  require('./ContentPageSubsectionPart-debug.css')

export default function ContentPageSubsectionPart({children}) {
  return (
    <div className={getElementStyleClassName("ContentPageSubsectionPartContainer")}>
      {children}
    </div>
  );
}
