import { get } from '../http/http'
import product from './list.json'
export const getProducts = async () => {
	return product
	// try {
	//     const products = await get({url:'/api/products'})
	//     return products
	// } catch (error) {
	//     console.error(error)
	//     throw error
	// }
}
