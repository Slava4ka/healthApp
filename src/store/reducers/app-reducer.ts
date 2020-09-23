import { ActionType, getType } from 'typesafe-actions'
import * as actions from '../actions/app'
import { IAppReducer } from '../types/app.d'

const initialState: IAppReducer = {
	isInitialized: false,
	haveUserData: false,
	haveStressData: false,
	menuData: {
		activityPercent: { name: 'Физическая активность', value: 0 },
		dataPercent: { name: 'Объем данных', value: 4 },
		nutritionPercent: { name: 'Правильное питание', value: 0 },
		stressPercent: { name: 'Cтрессоустойчивость', value: 0 },
	},
	newMenuData: true,

	crutch: false,
	crutchMessage: false,

	message: '',
	globalLoader: false,
	isDrawerOpen: false,
	dream: Math.round(Math.random() * (10 - 6) + 6),
	pulse: Math.round(Math.random() * (104 - 80) + 80),

	isDataDigitized: false,
	haveNewRisks: false,
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

		case getType(actions.setMenuData): {
			return {
				...state,
				menuData: {
					...state.menuData,
					[action.name]: {
						...state.menuData[action.name],
						value: action.value,
					},
				},
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

		case getType(actions.setNewRisks): {
			return {
				...state,
				haveNewRisks: action.status,
			}
		}

		case getType(actions.setNewMenuData): {
			return {
				...state,
				newMenuData: action.status,
			}
		}

		case getType(actions.setCrutch): {
			return {
				...state,
				crutch: true,
			}
		}
		case getType(actions.setCrutchMessage): {
			return {
				...state,
				crutchMessage: true,
			}
		}

		default: {
			return state
		}
	}
}
