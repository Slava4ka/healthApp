import React, { useEffect, useState } from 'react'
import Slide from '@material-ui/core/Slide'
import NewLoader from '../../components/NewLoader/NewLoader'
import styles from './mainPage.module.scss'
import { IChatMessage } from '../../store/types/chat.d'
import ItemsMenu from '../../components/ItemsMenu/ItemsMenuContainer'

interface IMainPage {
	messages: IChatMessage[];
	push: (path: string) => void;
	setMenuData: (
		name:
			| 'activityPercent'
			| 'stressPercent'
			| 'nutritionPercent'
			| 'dataPercent',
		value: number
	) => void;
	name: string;
	openDrawer: () => void;
	setNewMenuData: (status: boolean) => void;
	isDrawerOpen: boolean;
	crutch: boolean;
	setCrutch: () => void;
}

const MainPage = ({
	push,
	setMenuData,
	messages,
	setNewMenuData,
	crutch,
	setCrutch,
}: IMainPage) => {
	const [checked, setChecked] = useState(false)

	useEffect(() => {
		setTimeout(() => setChecked(true), 1000)

		if (messages.length > 4 && !crutch) {
			setMenuData('stressPercent', 64)
			setMenuData('nutritionPercent', 30)
			setMenuData('dataPercent', 34)
			setNewMenuData(true)
			setCrutch()
		}
	}, [])

	return (
		<div className={styles.main}>
			<div className={styles.loader}>
				<NewLoader />
			</div>
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
