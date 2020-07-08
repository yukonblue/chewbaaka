/**
 * MediaLinkButton.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 07, 2020
 * Updated  : Jul 07, 2020
 */

import React from 'react';

import { Button, Icon } from 'semantic-ui-react'

function MediaLinkButton(props) {
  return (
    <div>
      <a href={props.href}>
        <Button icon color="blue">
          {props.title}
          <Icon name="file video" />
        </Button>
      </a>
    </div>
  );
}

export default MediaLinkButton;
