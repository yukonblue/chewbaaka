/**
 * App.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jun 30, 2020
 * Updated  : Jul 05, 2020
 */

import React from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import "semantic-ui-css/semantic.min.css";

import HomePage from './components/homepage/HomePage'

import HistoryPage from './components/history/HistoryPage'

import TestPage from './components/shared/TestPage'

class App extends React.Component {
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
          <Route exact path="/" >
            <HomePage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    )
  }
}

export default App;
