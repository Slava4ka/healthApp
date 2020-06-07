export type IAppReducer = Readonly<{
	isInitialized: boolean,
	haveUserData: boolean,
	haveStressData: boolean,
	stressPercent: number,
	message: string,
	globalLoader: boolean,
}>
