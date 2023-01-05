import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App'
import i18n from './i18n'
import { I18nextProvider } from 'react-i18next'
import appState from './store/RootStore'
import { Provider } from 'mobx-react'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Provider {...appState}>
			<I18nextProvider i18n={i18n}>
				<App {...appState} />
			</I18nextProvider>
		</Provider>
	</React.StrictMode>
)
