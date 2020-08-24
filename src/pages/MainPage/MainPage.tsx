import React, { useEffect, useState } from 'react'
import Slide from '@material-ui/core/Slide'
import NewLoader from '../../components/NewLoader/NewLoader'
import styles from './mainPage.module.scss'
import { IChatMessage } from '../../store/types/chat.d'
import ItemsMenu from '../../components/ItemsMenu/ItemsMenuContainer'

interface IMainPage {
	messages: IChatMessage[];
	push: (path: string) => void;
	setStressParams: (percent: number) => void;
	name: string;
	openDrawer: () => void;
	isDrawerOpen: boolean;
}

const MainPage = ({ push, setStressParams, messages }: IMainPage) => {
	const [checked, setChecked] = useState(false)

	useEffect(() => {
		setTimeout(() => setChecked(true), 1000)

		if (messages.length > 4) {
			setStressParams(64)
		}
	}, [])

	return (
		<div className={styles.main}>
			<NewLoader />
			<Slide direction="up" in={checked} mountOnEnter unmountOnExit>
				<div className={styles.mainButtons}>
					<div
						className={styles.chatButton}
						onClick={() => push('chat')}
					>
						<span>Мой ассистент</span>
					</div>
					<ItemsMenu />
				</div>
			</Slide>
		</div>
	)
}

export default MainPage
