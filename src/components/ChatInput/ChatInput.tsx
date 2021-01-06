import React, { useState } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Paper, Divider } from '@material-ui/core'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SendIcon from '@material-ui/icons/Send'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			padding: '2px 4px',
			display: 'flex',
			alignItems: 'center',
			width: '100%',
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

interface IChatInput {
	onButtonClick: (message: string) => void;
}

const ChatInput = ({ onButtonClick }: IChatInput) => {
	const classes = useStyles()
	const [currentMessageText, setCurrentMessageText] = useState('')

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentMessageText(event.target.value)
	}

	const onEnterHandler = (e: any) => {
		if (e.ctrlKey && e.keyCode === 13) {
			onButtonClick(currentMessageText)
			setCurrentMessageText('')
		}
	}

	return (
		<Paper component="form" className={classes.root}>
			<InputBase
				onChange={onChangeHandler}
				value={currentMessageText}
				multiline
				rows={2}
				className={classes.input}
				placeholder="Text a message"
				inputProps={{ 'aria-label': 'send message' }}
				onKeyDown={onEnterHandler}
			/>
			<Divider className={classes.divider} orientation="vertical" />
			<IconButton
				onClick={() => {
					onButtonClick(currentMessageText)
					setCurrentMessageText('')
				}}
				color="primary"
				className={classes.iconButton}
				aria-label="directions"
			>
				<SendIcon />
			</IconButton>
		</Paper>
	)
}

export default ChatInput
