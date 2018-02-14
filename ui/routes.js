import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Pages, ShowPage, NewPage } from './containers'
import { App, Home } from './components'

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
      <IndexRoute component={Home} />
        <route path='pages'>
          <IndexRoute  component={Pages} />
          <Route path=':id' component={ShowPage} />
        </route>
      </Route>
    </Router>
  )
}