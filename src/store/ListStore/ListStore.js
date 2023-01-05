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
      getProducts: action,
    })
    this.getProducts = this.getProducts.bind(this)
  }

  async getProducts() {
    this.products = await getProducts()
    console.log(this.products)
  }

  addToShoppingList = (string) => {
    this.shoppingList = [...this.shoppingList, string]
  }
}

export default ListStore
