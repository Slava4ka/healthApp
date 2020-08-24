import React from 'react'
import { Paper } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import PersonIcon from '@material-ui/icons/Person'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import SettingsIcon from '@material-ui/icons/Settings'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import Slide from '@material-ui/core/Slide'
import styles from './miniMenu.module.scss'

interface IMiniMenu {
	miniMenuOpen: boolean;
	push: (address: string) => void;
}

const MiniMenu = ({ miniMenuOpen, push }: IMiniMenu) => {
	return (
		<Slide direction="up" in={miniMenuOpen} mountOnEnter unmountOnExit>
			<Paper variant="elevation" className={styles.miniMenu}>
				<div className={styles.miniMenuBody}>
					<Avatar style={{ width: '60px', height: '60px' }}>
						<PersonIcon style={{ fontSize: '2rem' }} />
					</Avatar>
					<div className={styles.miniMenuBody__item}>
						<SubscriptionsIcon />
						<span className={styles.name}>Подписки</span>
					</div>
					<div
						className={styles.miniMenuBody__item}
						onClick={() => push('/Settings')}
					>
						<SettingsIcon />
						<span className={styles.name}>Настройки</span>
					</div>
					<div className={styles.miniMenuBody__item}>
						<ExitToAppIcon />
						<span className={styles.name}>Выход</span>
					</div>
				</div>
			</Paper>
		</Slide>
	)
}

export default MiniMenu
