export type IAppReducer = Readonly<{
	isInitialized: boolean,
	haveUserData: boolean,
	message: string,
	globalLoader: boolean,
}>
