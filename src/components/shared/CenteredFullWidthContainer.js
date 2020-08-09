/**
 * CenteredFullWidthContainer.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 30, 2020
 * Updated  : Aug 08, 2020
 */

import React from 'react'

import './ContentPageSharedStyles.css'

export default function CenteredFullWidthContainer( {children, width} ) {
  return (
    <div className="Centered FullWidth" style={{width: width}}>
      {children}
    </div>
  );
}
