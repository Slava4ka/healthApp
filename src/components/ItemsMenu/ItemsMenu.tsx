import React from 'react'
import { Grid } from '@material-ui/core'
import RestaurantIcon from '@material-ui/icons/Restaurant'
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun'
import GroupIcon from '@material-ui/icons/Group'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import Brightness3Icon from '@material-ui/icons/Brightness3'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import Button from '@material-ui/core/Button'
import styles from './itemsMenu.module.scss'

interface IItemsMenu {
	push: (path: string) => void;
	haveStressData: boolean;
	stressPercent: number;
}

const items = [
	{ id: 1, name: 'Правильное питание', icon: <RestaurantIcon /> },
	{ id: 2, name: 'Контроль упражнений', icon: <DirectionsRunIcon /> },
	{ id: 3, name: 'Индикатор депрессии', icon: <GroupIcon /> },
	{ id: 4, name: 'Контроль пульса', icon: <FavoriteBorderIcon /> },
	{ id: 5, name: 'Длительность сна', icon: <Brightness3Icon /> },
	{ id: 6, name: 'Советы по ЗОЖ', icon: <LocalHospitalIcon /> },
]

const ItemsMenu = ({ push, haveStressData, stressPercent }: IItemsMenu) => {
	return (
		<div className={styles.root}>
			<Grid container spacing={3}>
				{items.map((item: any) => (
					<Grid
						item
						xs={12}
						sm={12}
						md={6}
						lg={4}
						xl={3}
						key={item.id}
					>
						{haveStressData && item.id === 2 ? (
							<div className={styles.stressIndicator}>
								<div className={styles.process} />
								<div className={styles.stressData}>
									<DirectionsRunIcon />
									<span>{`${stressPercent}%`}</span>
								</div>
							</div>
						) : (
							<Button
								variant="text"
								startIcon={item.icon}
								color="default"
								className={styles.root__item}
								onClick={() => push('/Settings')}
							>
								{item.name}
							</Button>
						)}
					</Grid>
				))}
			</Grid>
		</div>
	)
}

export default ItemsMenu
