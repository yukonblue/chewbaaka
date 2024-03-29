/**
 * StatsLabel.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 25, 2020
 * Updated  : Aug 12, 2020
 */

import React from 'react'

import { Statistic, Segment } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'

import './StatsLabel.css'

export default function StatsLabel(props) {
  return (
    <Segment inverted className="StatsLabel">
      <Statistic inverted size="huge" color={props.color}>
        <Statistic.Value>
          {props.value}
        </Statistic.Value>
        <Statistic.Label>
          {props.label}
        </Statistic.Label>
      </Statistic>
    </Segment>
  );
}
