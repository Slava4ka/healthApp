import axios from 'axios'

const fetch = axios.create({
	baseURL: 'http://84.201.133.59:5555/',
})

export const sendMessage = (message: string) =>
	fetch.post('model', {
		question_raw: [message],
	})
