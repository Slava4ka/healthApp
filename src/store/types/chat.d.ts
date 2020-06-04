export type IChatReducer = Readonly<{
	messages: IChatMessage[],
}>

export interface IChatMessage {
	message: string[];
	date: Date;
	from: 'bot' | 'user';
}
