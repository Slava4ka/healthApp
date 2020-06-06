import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import configureStore from './store/configureStore'
import App from './main/App'

const history = createBrowserHistory()

const initialState = window.INITIAL_REDUX_STATE

const store = configureStore(history, initialState)

ReactDOM.render(
	<React.StrictMode>
		<HashRouter>
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<App />
				</ConnectedRouter>
			</Provider>
		</HashRouter>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
