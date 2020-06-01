import React from 'react'
import { Card, IconButton } from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent'
import makeStyles from '@material-ui/core/styles/makeStyles'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import SettingsList from '../../components/SettingsList/SettingsList'
import styles from './settingsPage.module.scss'

const useStyles = makeStyles((theme) => ({
	root: {
		width: '600px',
		[theme.breakpoints.down('sm')]: {
			boxShadow: 'none',
		},
	},
}))

interface ISettingsPage {
	goBack: () => void;
	push: (path: string) => void;
}

// значения пептиков сохранять в ls.

const SettingsPage = ({ goBack, push }: ISettingsPage) => {
	const classes = useStyles()

	return (
		<div className={styles.settingsPage}>
			<div className={styles.settingsPage__header}>
				<IconButton aria-label="back" onClick={goBack}>
					<ArrowBackIosIcon fontSize="large" />
				</IconButton>
			</div>
			<div className={styles.settingsPage__body}>
				<Card className={classes.root} variant="elevation">
					<CardContent>
						<SettingsList
							push={push}
							name="Индикаторы персонального здоровья"
						/>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}

export default SettingsPage
