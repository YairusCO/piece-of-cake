import { action, configure, makeObservable } from 'mobx'

configure({ enforceActions: 'observed' })

class RootStore {
  constructor({ listStore }) {
    makeObservable(this, {
      appMounted: action,
      appWillUnmount: action,
    })

    this.listStore = listStore
    this.appMounted = this.appMounted.bind(this)
    this.appWillUnmount = this.appWillUnmount.bind(this)
  }

  appMounted() {
    this.listStore.getProducts()
  }
  appWillUnmount() {}
}

export default RootStore
