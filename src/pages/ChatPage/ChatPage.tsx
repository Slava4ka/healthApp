import React, { useEffect } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { createStyles, Theme } from '@material-ui/core/styles'
import { Card } from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import ChatInput from '../../components/ChatInput/ChatInput'
import styles from './chatPage.module.scss'
import { IChatMessage } from '../../store/types/chat.d'
import { IUserData } from '../../store/types/signUp.d'
import Loader from '../../components/Loader/Loader'

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
	userData: IUserData;
	typing: boolean;
	sendMessage: (message: string) => void;
	recordMessage: (messageData: IChatMessage) => void;
}

const ChatPage = ({
	messages,
	sendMessage,
	typing,
	userData,
	recordMessage,
}: IChatPage) => {
	const classes = useStyles()

	useEffect(() => {
		if (messages.length < 1) {
			setTimeout(
				() =>
					recordMessage({
						message: `Привет, ${userData.name}!!!`,
						date: new Date(),
						from: 'bot',
						sent: 1,
						id: undefined,
					}),
				300
			)
		}
	}, [])

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
				{typing && <Loader />}
				{messages
					.map((message: IChatMessage, key: number) => {
						if (message.from === 'user') {
							return (
								<div key={key} className={styles.userMessage}>
									{message.message}
								</div>
							)
						} else {
							return (
								<div
									key={message.date.toString()}
									className={styles.botMessage}
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
