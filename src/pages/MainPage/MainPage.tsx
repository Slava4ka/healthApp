import React, { useEffect, useState } from 'react'
import Slide from '@material-ui/core/Slide'
import Face from '../../components/Face/Face'
import styles from './mainPage.module.scss'
import ItemsMenu from '../../components/ItemsMenu/ItemsMenuContainer'

interface IMainPage {
	push: (path: string) => void;
}

const MainPage = ({ push }: IMainPage) => {
	const [checked, setChecked] = useState(false)

	useEffect(() => {
		setTimeout(() => setChecked(true), 1000)
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
