import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Home'
import Layout from '../Layout'
import SelectIngredient from '../NewBake/SelectIngredient'
import { HOME, SELECT_INGREDIENT } from '../../util/routes'

function App() {
	return (
		<div className="app">
			<div className="center">
				<BrowserRouter>
					<Layout>
						<Routes>
							<Route exact path={HOME} element={<Home />} />
							<Route
								exact
								path={SELECT_INGREDIENT}
								element={<SelectIngredient />}
							/>
						</Routes>
					</Layout>
				</BrowserRouter>
			</div>
		</div>
	)
}

export default App
