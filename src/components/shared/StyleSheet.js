/**
 * StyleSheet.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 01, 2020
 * Updated  : Jul 03, 2020
 */

import React from 'react';

function StyleSheet(props) {
  return (
    <link rel="stylesheet" type="text/css" href={props.styleSheetPath} />
  )
};

export default StyleSheet;
