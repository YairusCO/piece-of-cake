import Ingredientes from './Ingredientes'
import './Ingredientes.scss'
import { withTranslation } from 'react-i18next'
import { inject, observer } from 'mobx-react'

export default inject(({ listStore }) => ({
	addToShoppingList: listStore.addToShoppingList,
}))(observer(withTranslation()(Ingredientes)))
