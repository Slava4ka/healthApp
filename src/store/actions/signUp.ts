import { createCustomAction } from 'typesafe-actions'
import { SignUpTypes } from '../constants/signUp'
import { IUserData } from '../types/signUp.d'

export const setUserData = createCustomAction(
	SignUpTypes.SET_USER_DATA,
	(data: IUserData) => ({ data })
)
