import history from '../history'
import { dispatch } from '../pubsub'
import Actions from '../util/actions.js'
import { HOME, ADD } from '../util/routes.js'

import routerConfig from './routerConfig'

const router = routerConfig({ history })
const extractParams = ({ search }) =>
	search
		.substr(1)
		.split('&')
		.filter((value) => value)
		.reduce((acc, pair) => {
			const [key, value] = pair.split('=')
			return { ...acc, [key]: value }
		}, {})

router
	.setRoute(
		HOME,
		{ exact: false },
		({ params, path, routeParams, urlRoute }) => {
			dispatch(Actions.ROUTE_CHANGED, { params, path, routeParams, urlRoute })
		}
	)
	// .setRoute(
	//   HOME,
	//   { exact: false, exclude: { url: LOGIN, exact: true } },
	//   ({ params, path, routeParams }) => {
	//     dispatch(Actions.HOME_PAGE_ROUTE_REQUESTED, routeParams)
	//   },
	// )

	.setRoute(ADD, { exact: true }, () => {
		dispatch(Actions.ADD)
	})

export default router
