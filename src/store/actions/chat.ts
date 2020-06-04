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
