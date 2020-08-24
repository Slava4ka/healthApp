import React from 'react'
import { Grid } from '@material-ui/core'
import RestaurantIcon from '@material-ui/icons/Restaurant'
import GroupIcon from '@material-ui/icons/Group'
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun'
import SystemUpdateIcon from '@material-ui/icons/SystemUpdate'

import styles from './itemsMenu.module.scss'

interface IItemsMenu {
	push: (path: string) => void;
	haveStressData: boolean;
	stressPercent: number;
	dream: number;
	pulse: number;
}

const ItemsMenu = ({ push, stressPercent, dream, pulse }: IItemsMenu) => {
	return (
		<div className={styles.root}>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
					<div className={styles.stressIndicator}>
						<div
							className={styles.process}
							style={{
								width: `${
									stressPercent === 0 ? 5 : stressPercent
								}%`,
							}}
						/>
						<div
							className={styles.stressData}
							onClick={() => push('/StressData')}
						>
							<GroupIcon style={{ fontSize: '2.6rem' }} />
							<span>СТРЕССОУСТОЙЧИВОСТЬ</span>
							<span>{`${stressPercent}%`}</span>
						</div>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
					<div className={styles.stressIndicator}>
						<div
							className={styles.process}
							style={{ width: '5%' }}
						/>
						<div className={styles.stressData}>
							<RestaurantIcon style={{ fontSize: '2.6rem' }} />
							<span>ПРАВИЛЬНОЕ ПИТАНИЕ</span>
							<span>0%</span>
						</div>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
					<div className={styles.stressIndicator}>
						<div
							className={styles.process}
							style={{ width: '5%' }}
						/>
						<div className={styles.stressData}>
							<DirectionsRunIcon style={{ fontSize: '2.6rem' }} />
							<span>ФИЗИЧЕСКАЯ АКТИВНОСТЬ</span>
							<span>0%</span>
						</div>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
					<div className={styles.stressIndicator}>
						<div
							className={styles.process}
							style={{ width: '10%', borderRadius: '10px' }}
						/>
						<div className={styles.stressData}>
							<SystemUpdateIcon style={{ fontSize: '2.6rem' }} />
							<span>ОБЪЕМ ДАННЫХ</span>
							<span>4%</span>
						</div>
					</div>
				</Grid>
			</Grid>
			<Grid
				container
				spacing={3}
				className={styles.grid}
				style={{ height: '100%' }}
			>
				<Grid
					item
					xs={12}
					sm={12}
					md={6}
					lg={4}
					xl={3}
					className={styles.grid}
				>
					<div className={styles.roundIndicator}>
						<div className={styles.number}>{dream}</div>
						<div className={styles.label}>Сон</div>
					</div>
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={6}
					lg={4}
					xl={3}
					className={styles.grid}
				>
					<div className={styles.roundIndicator}>
						<div className={styles.number}>{pulse}</div>
						<div className={styles.label}>Пульс</div>
					</div>
				</Grid>
			</Grid>
		</div>
	)
}

export default ItemsMenu
