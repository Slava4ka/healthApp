import { combineReducers } from 'redux'
import { History } from 'history'
import { connectRouter, RouterState } from 'connected-react-router'
import AppReducer from './app-reducer'
import SignUpReducer from './signUp-reducer'
import { IAppReducer } from '../types/app.d'
import { ISignUpReducer } from '../types/signUp.d'

export interface RootState {
	app: IAppReducer;
	signUp: ISignUpReducer;
	router: RouterState;
}

export const createRootReducer = (history: History) =>
	combineReducers({
		app: AppReducer,
		signUp: SignUpReducer,
		router: connectRouter(history),
	})
