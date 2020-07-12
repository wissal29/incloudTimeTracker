import React, {PropTypes} from 'react'

import {Provider} from 'react-redux'
import {Router, Route, IndexRoute} from 'react-router'

import App from './App'
import TimeTracker from '../components/TimeTracker'

const Root = ({store, history}) => (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={TimeTracker} />
      </Route>    
    </Router>
  </Provider>
)

Root.propTypes = {
  history: PropTypes.object.isRequired
}

export default Root