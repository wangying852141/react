import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import ErrorBoundary from './ErrorBoundary.jsx'
import App from './App.jsx'
import Detail from '@/components/Detail.jsx'
import Register from '@/components/Register.jsx'
import Login from '@/components/Login.jsx'

// import 'antd-mobile/dist/antd-mobile.css'
import './main.scss'

/**
 * Router内部只能有一个子元素
 */
ReactDOM.render(
  <ErrorBoundary>
    <Router>
      <Switch>
        <Route path = '/login' component = {Login} />
        <Route path = '/register' component = {Register} />
        <Route path = '/detail/:goodsID' component = {Detail} />
        <Route path = '/' component = {App} />
      </Switch>
    </Router>
  </ErrorBoundary>,
  document.getElementById('root')
)

