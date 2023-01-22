import RootStore from './RootStore'
import ListStore from '../ListStore'
import router from '../../services/router'

export default new RootStore({
	router,
	listStore: new ListStore(),
})
