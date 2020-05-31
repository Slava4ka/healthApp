import React, { useEffect, useState } from 'react'
import Slide from '@material-ui/core/Slide'
import Face from '../../components/Face/Face'
import styles from './mainPage.module.scss'
import ItemsMenu from '../../components/ItemsMenu/ItemsMenuContainer'

const MainPage = () => {
	const [checked, setChecked] = useState(false)

	useEffect(() => {
		setTimeout(() => setChecked(true), 1000)
	}, [])

	return (
		<div className={styles.root}>
			<Face />
			<Slide direction="up" in={checked} mountOnEnter unmountOnExit>
				<div>
					<ItemsMenu />
				</div>
			</Slide>
		</div>
	)
}

export default MainPage
