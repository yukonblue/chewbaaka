/**
 * MediaLinkButton.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 07, 2020
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
 *  - `icon` (optional): Name of the icon.
 *    Must be one of the supported names documented here:
 *    https://react.semantic-ui.com/elements/icon/
 */

import React from 'react';

import { Button, Icon } from 'semantic-ui-react'

function MediaLinkButton(props) {
  return (
    <div>
      <a href={props.href}>
        <Button icon color="blue">
          {props.title}
          <Icon name={props.icon ? props.icon : "file video"} />
        </Button>
      </a>
    </div>
  );
}

export default MediaLinkButton;
