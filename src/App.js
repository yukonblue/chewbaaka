/**
 * App.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jun 30, 2020
 * Updated  : Jul 14, 2020
 */

import React from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import "semantic-ui-css/semantic.min.css";

import HomePage from './components/homepage/HomePage'

import HistoryPage from './components/history/HistoryPage'
import FuturePage from './components/future/FuturePage'

import TestPage from './components/shared/TestPage'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          { /** Route for testing components in development mode. */ }
          <Route exact path="/test">
            <TestPage />
          </Route>
          <Route exact path='/history'>
            <HistoryPage />
          </Route>
          <Route exact path='/future'>
            <FuturePage />
          </Route>
          <Route exact path="/" >
            <HomePage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    )
  }
}
