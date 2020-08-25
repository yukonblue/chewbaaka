/**
 * App.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jun 30, 2020
 * Updated  : Aug 22, 2020
 */

import React, { Suspense } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import HomePage from './components/homepage/HomePage'

import { config } from './config'

import './components/shared/GlobalPageStyles.css'

const HistoryPage = React.lazy(() => import('./components/history/HistoryPage'));
const BiologyPage = React.lazy(() => import('./components/biology/BiologyPage'));
const EcologyPage = React.lazy(() => import('./components/ecology/EcologyPage'));
const FuturePage = React.lazy(() => import('./components/future/FuturePage'));

/* eslint-disable import/first */
if ( process.env.NODE_ENV === 'development' )
  require('./styling/DebugStyles.css')

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" >
          <HomePage
            appConfig={config}
          />
        </Route>

        <Switch>
          <Suspense fallback={<div></div>}>
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
            </Switch>
          </Suspense>

          <Redirect to="/" />
        </Switch>
      </Router>
    )
  }
}
