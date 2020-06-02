import { ActionType, getType } from 'typesafe-actions'
import { ISignUpReducer } from '../types/signUp.d'
import * as actions from '../actions/signUp'

const initialState: ISignUpReducer = {
	userData: { name: '', sex: '', weight: 0, height: 0, age: 0 },
}

export type SignUpActions = ActionType<typeof actions>

export default (
	state = initialState,
	action: SignUpActions
): ISignUpReducer => {
	switch (action.type) {
		case getType(actions.setUserData): {
			return { ...state, userData: action.data }
		}
		default: {
			return state
		}
	}
}
