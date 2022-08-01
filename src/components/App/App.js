import logo from '../../logo.svg'
import React, { useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../Home'
import Header from '../Header'
import Intro from '../Intro'
import Layout from '../Layout'
import Selected from '../Selected'
import history from '../../service/history'
import {ADD, HOME} from '../../util/routes'
function App() {
  return (
    <div className="app">
      <Header/>
      <div className="center">
      <Router history={history}>
        <Layout>
          <Routes>
        <Route exact path={HOME} element={<Home/>} />
        <Route exact path="/ADD" element={<Intro/>} />
        <Route exact path="/selected" element={<Selected/>} />
          </Routes>
        </Layout>
        </Router>
    </div>
    </div>
  )
}

export default App
