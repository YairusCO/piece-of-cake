import SelectIngredient from './SelectIngredient'
import './SelectIngredient.scss'

import { inject, observer } from 'mobx-react'
import { withTranslation } from 'react-i18next'

export default inject(({ listStore }) => ({
	products: listStore.products,
	addToShoppingList: listStore.addToShoppingList,
}))(observer(withTranslation()(SelectIngredient)))
