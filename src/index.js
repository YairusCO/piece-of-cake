import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Router, Switch, Route } from 'react-router'

import './index.css'
import App from './components/App'
import i18n from './i18n'
import { I18nextProvider } from 'react-i18next'
import appState from './store/RootStore'
import { Provider } from 'mobx-react'
import router from './services/router/router'
router.init()
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<StrictMode>
		<Provider {...appState}>
			<I18nextProvider i18n={i18n}>
				<App {...appState} />
			</I18nextProvider>
		</Provider>
	</StrictMode>
)
