import keyMirror from 'key-mirror'
import { NULL } from 'node-sass'

const appActions = Object.freeze(
	keyMirror({
		APPLICATION_MOUNTED: null,
		APPLICATION_UNMOUNTED: null,
		WINDOW_RESIZED: null,
	})
)

const routeActions = Object.freeze(
	keyMirror({
		HOME_PAGE_ROUTE_REQUESTED: null,
		ROUTE_CHANGED: null,
	})
)

const add = Object.freeze(
	keyMirror({
		ADD: null,
		SELECTED: null,
	})
)

export const Actions = {
	...appActions,
	...routeActions,
	...add,
}
export default Actions
