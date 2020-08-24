import { takeLatest, call, put } from 'redux-saga/effects'
import * as chatActions from '../actions/chat'
import { ChatTypes } from '../constants/chat'
import * as chatApi from '../../api/chat'

function* sendMessage(action: ReturnType<typeof chatActions.sendMessage>) {
	try {
		yield put(chatActions.setTyping(true))
		yield put(
			chatActions.recordMessage({
				message: action.message,
				date: new Date(),
				from: 'user',
				sent: 1,
				id: undefined,
			})
		)
		const response = yield call(chatApi.sendMessage, action.message)
		yield put(
			chatActions.recordMessage({
				message:
					response.data.text === ''
						? 'Извините, я Вас не понял. Перефразируйте, пожалуйста, Ваш вопрос'
						: response.data.text,
				date: response.data.time,
				from: 'bot',
				sent: response.data.sent,
				id: response.data.id,
			})
		)
		console.log(response)
	} catch (error) {
		console.log(error)
	} finally {
		yield put(chatActions.setTyping(false))
	}
}

export default function* watchEntities() {
	yield takeLatest(ChatTypes.SEND_MESSAGE, sendMessage)
}
