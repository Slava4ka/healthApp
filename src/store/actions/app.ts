import { createAction, createCustomAction } from 'typesafe-actions'
import { AppTypes } from '../constants/app'

export const setInitialized = createAction(AppTypes.INITIALIZED_SUCCESS)()

export const setHaveUserData = createAction(AppTypes.SET_HAVE_USER_DATA)()

export const showMessage = createCustomAction(
	AppTypes.SHOW_MESSAGE,
	(message: string) => ({ message })
)

export const setDataDigitized = createCustomAction(
	AppTypes.SET_DATA_DIGITIZED,
	(state: boolean) => ({ state })
)

export const deleteMessage = createAction(AppTypes.DELETE_MESSAGE)()

export const setGlobalLoader = createCustomAction(
	AppTypes.SET_GLOBAL_LOADER,
	(status: boolean) => ({ status })
)

export const setStressParams = createCustomAction(
	AppTypes.SET_STRESS_PARAMS,
	(percent: number) => ({ percent })
)

export const setNewRisks = createCustomAction(
	AppTypes.SET_NEW_RISKS,
	(status: boolean) => ({ status })
)

export const openDrawer = createAction(AppTypes.SET_DRAWER_OPEN)()

export const closeDrawer = createAction(AppTypes.SET_DRAWER_CLOSE)()
