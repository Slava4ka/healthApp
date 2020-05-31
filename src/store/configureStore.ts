import { applyMiddleware, createStore, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { History } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { createRootReducer, RootState } from './reducers'
import { rootSaga } from './sagas'

const configureStore = (
	history: History,
	initialState: RootState
): Store<RootState> => {
	const composeEnhancers = composeWithDevTools({})
	const sagaMiddleware = createSagaMiddleware()

	const store = createStore(
		createRootReducer(history),
		initialState,
		composeEnhancers(
			applyMiddleware(routerMiddleware(history), sagaMiddleware)
		)
	)

	sagaMiddleware.run(rootSaga)

	// const persistor = persistStore(store)
	// return { store, persistor }

	return store
}

export default configureStore
