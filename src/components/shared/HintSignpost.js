/**
 * HintSignpost.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 07, 2020
 */

 /**
 * HintSignpost
 *
 * `HintSignpost` is a component that illustrates
 * a specified text string as a hint message.
 *
 * This component/widget is intended to demonstrate
 * suggested actions or cues to users.
 *
 * Props:
 *
 *  - `hintText`: Text of the hint message.
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
