import { action, configure, makeObservable } from 'mobx'
import { dispatch, subscribe } from '../../services/pubsub'
import Actions from '../../util/actions.js'
configure({ enforceActions: 'observed' })

class RootStore {
	constructor({ listStore, router, routeStore }) {
		makeObservable(this, {
			appMounted: action,
			appWillUnmount: action,
		})

		this.router = router
		this.listStore = listStore
		this.routeStore = routeStore
		this.appMounted = this.appMounted.bind(this)
		this.appWillUnmount = this.appWillUnmount.bind(this)
	}

	appMounted() {
		this.listStore.getProducts()
	}
	appWillUnmount() {}
}

export default RootStore
