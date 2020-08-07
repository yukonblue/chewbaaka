/**
 * RouterWrapped.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 06, 2020
 * Updated  : Aug 06, 2020
 */

import React from 'react'

import { BrowserRouter } from 'react-router-dom'

export default function RouterWrapped(children) {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
}
