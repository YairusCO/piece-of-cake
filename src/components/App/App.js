import { useEffect } from 'react'
import history from '../../services/history'

import { Router, Switch, Route } from 'react-router'
import Home from '../Home'
import Recipe from '../NewBake/Recipe'
import Layout from '../Layout'
import SelectIngredient from '../NewBake/SelectIngredient'
import { HOME, SELECT_INGREDIENT, RECIPE } from '../../util/routes'

function App({ appWillUnmount, appMounted }) {
	useEffect(() => {
		appMounted()
		return () => {
			appWillUnmount()
		}
	}, [appMounted, appWillUnmount])
	return (
		<div className="app">
			<Router history={history}>
				<div className="center">
					<Layout>
						{/* <Switch> */}
						<Route exact path={HOME} component={Home} />
						<Route exact path={RECIPE} component={Recipe} />
						<Route
							exact
							path={SELECT_INGREDIENT}
							component={SelectIngredient}
						/>
						{/* </Switch> */}
					</Layout>
				</div>
			</Router>
		</div>
	)
}
export default App
