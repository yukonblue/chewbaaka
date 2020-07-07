/**
 * HintSignpost.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 07, 2020
 */

import React from 'react';

import { Icon, Label } from 'semantic-ui-react'

import './HintSignpost.css'

function HintSignpost(props) {
  return (
    <div className="HintSignpostOuterContainer">
      <div className="HintSignpostInnerContainer">
        <Label size="large" color="blue">
          {props.hintText}
          <div className="HintSignpostIconContainer">
            <Icon name="arrow circle down" size="large"/>
          </div>
        </Label>
      </div>
    </div>
  );
}

export default HintSignpost;
