import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Home'
import Header from '../Header'
import Layout from '../Layout'
import SelectIngredient from '../NewBake/SelectIngredient'
import history from '../../services/history'
import { HOME, SELECT_INGREDIENT } from '../../util/routes'
function App() {
	return (
		<div className="app">
			<Header />
			<div className="center">
				<Layout>
					<BrowserRouter history={history}>
						<Routes>
							<Route exact path={HOME} element={<Home />} />
							<Route
								exact
								path={SELECT_INGREDIENT}
								element={<SelectIngredient />}
							/>
						</Routes>
					</BrowserRouter>
				</Layout>
			</div>
		</div>
	)
}

export default App
