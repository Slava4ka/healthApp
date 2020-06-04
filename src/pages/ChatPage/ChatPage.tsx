import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { createStyles, Theme } from '@material-ui/core/styles'
import { Card } from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import ChatInput from '../../components/ChatInput/ChatInput'
import styles from './chatPage.module.scss'
import { IChatMessage } from '../../store/types/chat.d'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			height: '70vh',
			width: '60vw',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
			[theme.breakpoints.down('sm')]: {
				height: '99%',
				width: '99%',
				border: 'none',
			},
		},
		bullet: {
			display: 'inline-block',
			margin: '0 2px',
			transform: 'scale(0.8)',
		},
		title: {
			fontSize: 14,
		},
		pos: {
			marginBottom: 12,
		},
		input: {
			marginLeft: theme.spacing(1),
			flex: 1,
		},
		iconButton: {
			padding: 10,
		},
		divider: {
			height: 28,
			margin: 4,
		},
	})
)

interface IChatPage {
	messages: IChatMessage[];
	sendMessage: (message: string) => void;
}

const ChatPage = ({ messages, sendMessage }: IChatPage) => {
	const classes = useStyles()
	const m = messages.reverse()
	console.log('messages: ', messages)
	console.log('m: ', m)

	const t = [{ name: 'a' }, { name: 'r' }, { name: 'v' }]
	console.log(t.reverse())

	const onButtonClickHandler = (message: string) => {
		if (message.length > 0) {
			sendMessage(message)
		} else {
			alert('введите сообщение')
		}
	}

	return (
		<Card className={classes.root} variant="outlined">
			<CardContent className={styles.cart}>
				{messages
					.map((message: IChatMessage) => {
						if (message.from === 'user') {
							return (
								<div
									key={message.date.toString()}
									className={styles.botMessage}
								>
									{message.message}
								</div>
							)
						} else {
							return (
								<div
									key={message.date.toString()}
									className={styles.userMessage}
								>
									{message.message}
								</div>
							)
						}
					})
					.reverse()}
			</CardContent>
			<CardActions>
				<ChatInput onButtonClick={onButtonClickHandler} />
			</CardActions>
		</Card>
	)
}

export default ChatPage
