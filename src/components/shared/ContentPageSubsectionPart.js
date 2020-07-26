/**
 * ContentPageSubsectionPart.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 25, 2020
 * Updated  : Jul 25, 2020
 */

import React from 'react'

import './ContentPageSharedStyles.css'

import { getElementStyleClassName } from '../../styling/styling'

import './ContentPageSubsectionPart.css'

export default function ContentPageSubsectionPart({children}) {
  return (
    <div className={getElementStyleClassName("ContentPageSubsectionPartContainer")}>
      {children}
    </div>
  );
}
