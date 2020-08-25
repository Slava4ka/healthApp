export type IChatReducer = Readonly<{
	messages: IChatMessage[],
	typing: boolean,
	newMessage: number,
}>

export interface IChatMessage {
	message: string;
	date: Date;
	from: 'bot' | 'user';
	sent: number | undefined;
	id: string | undefined;
}
