export type IAppReducer = Readonly<{
	isInitialized: boolean,
	haveUserData: boolean,
	haveStressData: boolean,
	stressPercent: number,
	message: string,
	globalLoader: boolean,
	isDrawerOpen: boolean,
	dream: number,
	pulse: number,
	isDataDigitized: boolean,
	haveNewRisks: boolean,
}>
