import { ActionType, getType } from 'typesafe-actions'
import * as actions from '../actions/app'
import { IAppReducer } from '../types/app.d'

const initialState: IAppReducer = {
	isInitialized: false,
	haveUserData: false,
	haveStressData: false,
	stressPercent: 0,
	message: '',
	globalLoader: false,
	isDrawerOpen: false,
	dream: Math.round(Math.random() * (10 - 6) + 6),
	pulse: Math.round(Math.random() * (104 - 80) + 80),

	isDataDigitized: false,
}

export type AppActions = ActionType<typeof actions>

export default (state = initialState, action: AppActions): IAppReducer => {
	switch (action.type) {
		case getType(actions.setInitialized): {
			return { ...state, isInitialized: true }
		}

		case getType(actions.showMessage): {
			return { ...state, message: action.message }
		}

		case getType(actions.deleteMessage): {
			return { ...state, message: '' }
		}

		case getType(actions.setGlobalLoader): {
			return { ...state, globalLoader: action.status }
		}

		case getType(actions.setHaveUserData): {
			return { ...state, haveUserData: true }
		}

		case getType(actions.setStressParams): {
			return {
				...state,
				stressPercent: action.percent,
				haveStressData: true,
			}
		}

		case getType(actions.openDrawer): {
			return {
				...state,
				isDrawerOpen: true,
			}
		}

		case getType(actions.closeDrawer): {
			return {
				...state,
				isDrawerOpen: false,
			}
		}

		case getType(actions.setDataDigitized): {
			return {
				...state,
				isDataDigitized: action.state,
			}
		}

		default: {
			return state
		}
	}
}
