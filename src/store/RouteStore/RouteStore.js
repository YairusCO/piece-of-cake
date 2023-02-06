import { action, configure, makeObservable, observable } from 'mobx'
import { subscribe } from '../../services/pubsub'
import Actions from '../../util/actions'
import { HOME } from '../../util/routes'
configure({ enforceActions: 'observed' })

class RouteStore {
	currentRoute = HOME
	constructor() {
		makeObservable(this, {
			currentRoute: observable,
			setCurrentRoute: action,
		})
		this.setCurrentRoute = this.setCurrentRoute.bind(this)
		subscribe(Actions.ROUTE_CHANGED, this.setCurrentRoute)
	}

	setCurrentRoute({ urlRoute }) {
		debugger
		this.currentRoute = urlRoute
	}
}

export default RouteStore
