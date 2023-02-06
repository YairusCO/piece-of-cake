import { observable, makeObservable, action, configure } from 'mobx'
import { getProducts } from '../../services/apis/products'
import { subscribe } from '../../services/pubsub'
import Actions from '../../util/actions'
class ListStore {
	products = []
	shoppingList = []
	constructor() {
		makeObservable(this, {
			products: observable,
			shoppingList: observable,

			/* Actions */
			addToShoppingList: action,
			removeFromShoppingList: action,
			getProducts: action,
		})
		this.getProducts = this.getProducts.bind(this)
		subscribe(Actions.RECIPE, () => {
			console.log('RECIPE')
		})
		subscribe(Actions, () => {
			console.log(Actions)
		})
	}

	async getProducts() {
		this.products = await getProducts()
	}

	addToShoppingList = (obj) => {
		this.shoppingList = [...this.shoppingList, obj]
	}
	removeFromShoppingList = (product) => {
		this.shoppingList = [
			...this.shoppingList.filter((item) => item !== product),
		]
	}
}

export default ListStore
