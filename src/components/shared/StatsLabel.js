/**
 * StatsLabel.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 25, 2020
 * Updated  : Jul 25, 2020
 */

import React from 'react'

import { Statistic, Segment } from 'semantic-ui-react'

import "semantic-ui-css/semantic.min.css"

export default function StatsLabel(props) {
  return (
    <Segment inverted>
      <Statistic inverted size="huge" color={props.color}>
        <Statistic.Value>{props.value}</Statistic.Value>
        <Statistic.Label>
          {props.label}
        </Statistic.Label>
      </Statistic>
    </Segment>
  );
}
