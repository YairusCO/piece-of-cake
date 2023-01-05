import App from './App'
import './App.scss'

import { inject, observer } from 'mobx-react'

export default inject(({ appMounted, appWillUnmount }) => ({
	appMounted,
	appWillUnmount,
}))(observer(App))
