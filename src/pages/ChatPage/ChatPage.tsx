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
	isDataDigitized: boolean;
	newMessage: number;
	setNewMessage: (n: number) => void;
	setCrutchMessage: () => void;
	crutchMessage: boolean;
}

const ChatPage = ({
	messages,
	sendMessage,
	typing,
	userData,
	recordMessage,
	isDataDigitized,
	newMessage,
	setNewMessage,
	setCrutchMessage,
	crutchMessage,
}: IChatPage) => {
	const classes = useStyles()

	useEffect(() => {
		if (newMessage > 0) {
			setNewMessage(0)
		}
		if (messages.length < 1) {
			recordMessage({
				message: `${userData.name}, Hi! Thank you for using our UniM service. We will do all to help you live longer and healthier life.`,
				date: new Date(),
				from: 'bot',
				sent: 1,
				id: undefined,
			})
		}

		if (isDataDigitized && !crutchMessage) {
			setTimeout(() => {
				recordMessage({
					message:
						'На основе загруженных Вами медицинских данных выявлен малый риск развития инсульта и болезни Альцгеймера.\n\n' +
						'Для того, чтобы снизать риски - Вам необходимо чаще питаться овощами и фруктами, а так же регулярно выполнять физические' +
						'упражнения.\n\nПеречислите, пожалуйста овощи и фрукты, которые Вы употребляли за сегодняшний день?',
					date: new Date(),
					from: 'bot',
					sent: 1,
					id: undefined,
				})
				setCrutchMessage()
			}, 500)
		}
	}, [])

	const onButtonClickHandler = (message: string) => {
		if (message.length > 0) {
			sendMessage(message)
		} else {
			alert('Text a message')
		}
	}

	return (
		<div className={styles.body}>
			<Card className={classes.root} variant="outlined">
				<CardContent className={styles.cart}>
					{typing && <Loader />}
					{messages
						.map((message: IChatMessage, key: number) => {
							if (message.from === 'user') {
								return (
									<div
										key={key}
										className={styles.userMessage}
									>
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
		</div>
	)
}

export default ChatPage
