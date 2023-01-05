import RootStore from './RootStore'
import ListStore from '../ListStore'



export default new RootStore({

  listStore: new ListStore(),
})
