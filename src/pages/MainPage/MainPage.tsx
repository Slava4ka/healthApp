import React, { useEffect, useState } from 'react'
import Slide from '@material-ui/core/Slide'
import Face from '../../components/Face/Face'
import styles from './mainPage.module.scss'
import ItemsMenu from '../../components/ItemsMenu/ItemsMenuContainer'
import { IChatMessage } from '../../store/types/chat.d'

interface IMainPage {
	messages: IChatMessage[];
	push: (path: string) => void;
	setStressParams: (percent: number) => void;
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
		<div className={styles.root}>
			<Face onLogoClick={() => push('chat')} />
			<Slide direction="up" in={checked} mountOnEnter unmountOnExit>
				<div>
					<ItemsMenu />
				</div>
			</Slide>
		</div>
	)
}

export default MainPage
