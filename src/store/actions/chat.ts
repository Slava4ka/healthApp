import { createCustomAction } from 'typesafe-actions'
import { ChatTypes } from '../constants/chat'
import { IChatMessage } from '../types/chat.d'

export const sendMessage = createCustomAction(
	ChatTypes.SEND_MESSAGE,
	(message: string) => ({ message })
)

export const recordMessage = createCustomAction(
	ChatTypes.PUT_MESSAGE_TO_STORE,
	(messageData: IChatMessage) => ({ messageData })
)

export const setTyping = createCustomAction(
	ChatTypes.SET_TYPING,
	(status: boolean) => ({ status })
)

export const setNewMessage = createCustomAction(
	ChatTypes.SET_NEW_MESSAGE,
	(count: number) => ({ count })
)
