import { get } from '../http/http'
import list from './list.json'
export const getProducts = async () => {
	return list.products
	try {
		const products = await get({ url: '/api/products' })
		return products
	} catch (error) {
		console.error(error)
		throw error
	}
}
