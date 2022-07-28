import logo from '../../logo.svg'
import React, { useEffect } from 'react'
import { Router, Switch, Route, Redirect } from 'react-router'
import Home from '../Home'
import Header from '../Header'
import Layout from '../Layout'

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="center">
        <Layout>

     <Home/>
        </Layout>
    </div>
    </div>
  )
}

export default App
