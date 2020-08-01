/**
 * ContentPageTailPrevNextButtonNavMenuButton.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 01, 2020
 * Updated  : Aug 01, 2020
 */

import React from 'react'

import {
  Button,
  Icon
} from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'

export default function ContentPageTailPrevNextButtonNavMenuButton({ isRTL, label, href }) {
  const labelPosition = isRTL ? "left" : "right";
  const iconName = isRTL ? "arrow circle left" : "arrow circle right";

  return (
    <a href={href}>
      <Button
        icon
        color='blue'
        size='massive'
        labelPosition={labelPosition}
      >
        <Icon name={iconName}/>
        {label}
      </Button>
    </a>
  );
}
