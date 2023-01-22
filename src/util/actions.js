import keyMirror from 'key-mirror'

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
		SELECT_INGREDIENT: null,
		RECIPE: null,
	})
)

export const Actions = {
	...appActions,
	...routeActions,
	...add,
}
export default Actions
