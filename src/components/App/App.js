import React, { useEffect } from 'react'
import { BrowserRouter  , Routes, Route } from 'react-router-dom'
import Home from '../Home'
import Header from '../Header'
import Intro from '../Intro'
import Layout from '../Layout'
import SelectIngredient from '../NewBake/SelectIngredient'
import history from '../../services/history'
import {ADD, HOME, SELECT_INGREDIENT} from '../../util/routes'
function App() {
  return (
    <div className="app"> 
      <Header/>
      <div className="center">
      <BrowserRouter history={history}>
          <Routes>
          {/* <Route exact path="/" element={<Layout/>}> */}
   
        <Route exact path={HOME} element={<Home/>} />
        <Route exact path={ADD} element={<Intro/> } />
        <Route exact path={SELECT_INGREDIENT} element={<SelectIngredient/> } />
{/* </Route> */}
          </Routes>
        </BrowserRouter>
    </div>
    </div>
  )
}

export default App
