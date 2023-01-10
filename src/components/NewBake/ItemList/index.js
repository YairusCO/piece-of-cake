import ItemList from './ItemList'
import './ItemList.scss'
import { withTranslation } from 'react-i18next'
import { inject, observer } from 'mobx-react'

export default inject(({ listStore }) => ({
	shoppingList: listStore.shoppingList,
	removeFromShoppingList: listStore.removeFromShoppingList,
}))(observer(withTranslation()(ItemList)))
