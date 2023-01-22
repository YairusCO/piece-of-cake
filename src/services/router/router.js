import history from '../history'
import { dispatch } from '../pubsub'
import Actions from '../../util/actions.js'
import { HOME, SELECT_INGREDIENT, RECIPE } from '../../util/routes'
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
	.setRoute(HOME, { exact: false }, ({ params }) => {
		dispatch(Actions.HOME, params)
	})
	.setRoute(SELECT_INGREDIENT, ({ params }) => {
		dispatch(Actions.SELECT_INGREDIENT, params)
	})
	.setRoute(RECIPE, ({ params }) => {
		dispatch(Actions.RECIPE, params)
	})

export default router
