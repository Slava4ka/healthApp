import axios from 'axios'

const fetch = axios.create({
	baseURL: 'http://84.201.170.162:5000/',
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		// Authorization: accessToken
	},
})

export const sendMessage = (message: string) =>
	fetch.post('bot', {
		text: message,
	})
