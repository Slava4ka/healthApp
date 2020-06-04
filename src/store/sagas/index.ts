import { all, fork } from 'redux-saga/effects'
import chatSaga from './chatSaga'

export function* rootSaga() {
	yield all([fork(chatSaga)])
}
