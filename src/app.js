import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

import ExpenseDashboardPage from './components/ExpenseDashboardPage'
import NotFoundPage from './components/NotFoundPage'


const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={ExpenseDashboardPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)


ReactDOM.render(routes, document.getElementById('app'))
