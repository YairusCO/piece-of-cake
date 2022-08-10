import logo from '../../logo.svg'
import React, { useEffect } from 'react'
import {Router , Switch, Route } from 'react-router-dom'
import Home from '../Home'
import Header from '../Header'
import Intro from '../Intro'
import Layout from '../Layout'
import Selected from '../Selected'
import history from '../../services/history'
import {ADD, HOME, SELECT_INGREDIENT} from '../../util/routes'
function App() {
  return (
    <div className="app"> 
      <Header/>
      <div className="center">
      <Router history={history}>
          <Switch>
      <Layout> 
        <Route exact path={HOME} component={Home} />
        <Route exact path={ADD} component={Intro } />
        <Route exact path={SELECT_INGREDIENT} component={Selected } />
         </Layout> 
          </Switch>
        </Router>
    </div>
    </div>
  )
}

export default App
