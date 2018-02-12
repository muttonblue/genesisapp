import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { App, Home, Pages } from './components'

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='pages' component={Pages} />
      </Route>
    </Router>
  )
}