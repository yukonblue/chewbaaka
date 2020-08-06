/**
 * App.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jun 30, 2020
 * Updated  : Aug 06, 2020
 */

import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import HomePage from './components/homepage/HomePage'

import HistoryPage from './components/history/HistoryPage'
import BiologyPage from './components/biology/BiologyPage'
import EcologyPage from './components/ecology/EcologyPage'
import FuturePage from './components/future/FuturePage'

import './components/shared/GlobalPageStyles.css'
import './styling/DebugStyles.css'

import { config } from './config'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/history'>
            <HistoryPage
              appConfig={config}
            />
          </Route>
          <Route exact path='/biology'>
            <BiologyPage
              appConfig={config}
            />
          </Route>
          <Route exact path='/ecology'>
            <EcologyPage
              appConfig={config}
            />
          </Route>
          <Route exact path='/future'>
            <FuturePage
              appConfig={config}
            />
          </Route>
          <Route exact path="/" >
            <HomePage
              appConfig={config}
            />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    )
  }
}
