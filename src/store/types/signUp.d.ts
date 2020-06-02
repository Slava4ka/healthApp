export interface IUserData {
	name: string;
	sex: string;
	weight: number;
	height: number;
	age: number;
}

export type ISignUpReducer = Readonly<{
	userData: IUserData,
}>
