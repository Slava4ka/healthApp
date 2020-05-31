import { combineReducers } from 'redux'
import { History } from 'history'
import { connectRouter, RouterState } from 'connected-react-router'
import AppReducer from './app-reducer'
import { IAppReducer } from '../types/app'

export interface RootState {
	app: IAppReducer;
	router: RouterState;
}

export const createRootReducer = (history: History) =>
	combineReducers({
		app: AppReducer,
		router: connectRouter(history),
	})
