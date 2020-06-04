import { combineReducers } from 'redux'
import { History } from 'history'
import { connectRouter, RouterState } from 'connected-react-router'
import AppReducer from './app-reducer'
import SignUpReducer from './signUp-reducer'
import ChatReducer from './chat-reducer'
import { IAppReducer } from '../types/app.d'
import { ISignUpReducer } from '../types/signUp.d'
import { IChatReducer } from '../types/chat.d'

export interface RootState {
	app: IAppReducer;
	signUp: ISignUpReducer;
	router: RouterState;
	chat: IChatReducer;
}

export const createRootReducer = (history: History) =>
	combineReducers({
		app: AppReducer,
		signUp: SignUpReducer,
		chat: ChatReducer,
		router: connectRouter(history),
	})
