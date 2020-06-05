import { ActionType, getType } from 'typesafe-actions'
import * as actions from '../actions/chat'
import { IChatReducer } from '../types/chat.d'

const initialState: IChatReducer = {
	messages: [],
	typing: false,
}

export type ChatActions = ActionType<typeof actions>

export default (state = initialState, action: ChatActions): IChatReducer => {
	switch (action.type) {
		case getType(actions.recordMessage):
			return {
				...state,
				messages: [...state.messages, action.messageData],
			}
		case getType(actions.setTyping):
			return {
				...state,
				typing: action.status,
			}
		default: {
			return state
		}
	}
}
