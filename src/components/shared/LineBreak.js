/**
 * LineBreak.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 12, 2020
 * Updated  : Aug 19, 2020
 */

import React from 'react'

import times from './times'

export default function LineBreak(props) {
  return (
    times(props.lines, (idx) => ( <br key={idx}/> ))
  );
}
