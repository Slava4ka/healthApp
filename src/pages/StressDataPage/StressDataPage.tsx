import React from 'react'
import { Card, IconButton } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import CardContent from '@material-ui/core/CardContent'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'
import styles from './stressDataPage.module.scss'
import data from '../../components/PieChart/data'
import PieChart from '../../components/PieChart/PieChart'

const useStyles = makeStyles((theme) => ({
	root: {
		[theme.breakpoints.down('sm')]: {
			boxShadow: 'none',
		},
	},
}))

interface IStressDataPage {
	goBack: () => void;
}

const StressDataPage = ({ goBack }: IStressDataPage) => {
	const classes = useStyles()

	return (
		<div className={styles.settingsInfoPage}>
			<div className={styles.header}>
				<IconButton aria-label="back" onClick={goBack}>
					<ArrowBackIosIcon fontSize="large" />
				</IconButton>
			</div>
			<div className={styles.body}>
				<Card className={classes.root} variant="elevation">
					<CardContent className={styles.body__content}>
						<Typography variant="h5">
							Стрессоустойчивость
						</Typography>
						<div className={styles.settingsInfoPage__text}>
							<Typography variant="subtitle1">
								Данный индикатор отслеживает Вашу способность
								спокойно переносить действие повседневных
								стрессоров
							</Typography>
						</div>
						<div className={styles.settingsInfoPage__chart}>
							<PieChart data={data} />
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}

export default StressDataPage
