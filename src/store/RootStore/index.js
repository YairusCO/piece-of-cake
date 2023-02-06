import RootStore from './RootStore'
import ListStore from '../ListStore'
import router from '../../services/router'
import RouteStore from '../RouteStore'

export default new RootStore({
	router,
	listStore: new ListStore(),
	routeStore: new RouteStore(),
})
