export interface IMenuData {
	[item: string]: { name: string, value: number };
}

export type IAppReducer = Readonly<{
	isInitialized: boolean,
	haveUserData: boolean,
	haveStressData: boolean,
	menuData: IMenuData,
	newMenuData: boolean,
	crutch: boolean,
	crutchMessage: boolean,
	message: string,
	globalLoader: boolean,
	isDrawerOpen: boolean,
	dream: number,
	pulse: number,
	isDataDigitized: boolean,
	haveNewRisks: boolean,
}>
