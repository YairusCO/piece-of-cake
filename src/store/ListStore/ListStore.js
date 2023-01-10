import { observable, makeObservable, action, configure } from 'mobx'
import { getProducts } from '../../services/apis/products'
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
	}

	async getProducts() {
		this.products = await getProducts()
		console.log(this.products)
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
