export type IChatReducer = Readonly<{
	messages: IChatMessage[],
	typing: boolean,
}>

export interface IChatMessage {
	message: string[];
	date: Date;
	from: 'bot' | 'user';
}
