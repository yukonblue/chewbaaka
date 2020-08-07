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

/**
 * Wraps a component under `BrowserRouter`.
 *
 * This is mostly needed in unit tests where <Link>
 * and other react-router components need to be
 * wrapped under a instance of concrete class
 * derived from <Router>.
 */
export default function RouterWrapped(children) {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
}
