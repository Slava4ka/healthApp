import React from 'react'
import { Grid, IconButton } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import Typography from '@material-ui/core/Typography'
import styles from './settingInfoPage.module.scss'
import data from '../../components/PieChart/data'
import PieChart from '../../components/PieChart/PieChart'

interface ISettingInfoPage {
	goBack: () => void;
}

const SettingInfoPage = ({ goBack }: ISettingInfoPage) => {
	return (
		<div className={styles.settingsInfoPage}>
			<div className={styles.header}>
				<IconButton aria-label="back" onClick={goBack}>
					<ArrowBackIosIcon fontSize="large" />
				</IconButton>
			</div>

			<Grid container spacing={3} style={{ height: '100%' }}>
				<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
					<div className={styles.body} style={{ padding: '24px' }}>
						<Typography variant="h5">Sleep monitoring</Typography>
						<Typography
							variant="subtitle1"
							style={{ marginTop: '8px' }}
						>
							This indicator tracks the number of hours of sleep
							of the User within 24 hours.
						</Typography>
					</div>
				</Grid>

				<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
					<div className={styles.body}>
						<PieChart data={data} width={800} height={600} />
					</div>
				</Grid>
			</Grid>
		</div>
	)
}

export default SettingInfoPage
