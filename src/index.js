/**
 * index.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jun 30, 2020
 * Updated  : Aug 21, 2020
 */

import React from 'react';
import { hydrate, render } from "react-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
