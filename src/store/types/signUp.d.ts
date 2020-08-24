export interface IUserData {
	name: string;
	mail: string;
	sex: string;
	weight: number;
	height: number;
	age: number;
}

export type ISignUpReducer = Readonly<{
	userData: IUserData,
}>
