/**
 * CenteredFullWidthContainer.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 30, 2020
 * Updated  : Jul 30, 2020
 */

import React from 'react'

import './ContentPageSharedStyles.css'

export default function CenteredFullWidthContainer(props) {
  return (
    <div className="Centered FullWidth" style={{maxWidth: props.maxWidth}}>
      {props.children}
    </div>
  );
}
