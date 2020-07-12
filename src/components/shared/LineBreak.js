/**
 * LineBreak.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 12, 2020
 * Updated  : Jul 12, 2020
 */

import React from 'react';

import _ from 'lodash';

export default function LineBreak(props) {
  return (
    _.times(props.lines, (idx) => ( <br key={idx}/> ))
  );
}
