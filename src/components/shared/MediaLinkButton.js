/**
 * MediaLinkButton.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jun 11, 2022
 */

/**
 * MediaLinkButton
 *
 * `MediaLinkButton` is a component that shows
 * button that links to an external media source,
 * such as a video, a file, etc.
 *
 * Props
 *
 *  - `title`: Title of the button.
 *
 *  - `href`: The href link to be associated with the button.
 *
 *  - `icon` (optional): Name of the icon.
 *    Must be one of the supported names documented here:
 *    https://react.semantic-ui.com/elements/icon/
 */

import React from 'react'

import { Icon } from 'semantic-ui-react'
 
import { Design2CommonButtonRoundedBorderRadiusStyle } from './Design2_CommonUtils';

import { combineStyles } from './Utils';

import './MediaLinkButton.css'

export default function MediaLinkButton(props) {
  return (
    <div className={combineStyles("MediaLinkButton", Design2CommonButtonRoundedBorderRadiusStyle)}>
      <a href={props.href}>
        <span>{props.title}</span>
        <Icon name={props.icon ? props.icon : "file video"} />
      </a>
    </div>
  );
}
