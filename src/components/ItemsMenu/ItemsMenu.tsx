import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import GroupIcon from '@material-ui/icons/Group'

import { v4 as uuidv4 } from 'uuid'
import styles from './itemsMenu.module.scss'
import { IMenuData } from '../../store/types/app.d'

interface IItemsMenu {
	push: (path: string) => void;
	haveStressData: boolean;
	menuData: IMenuData;
	dream: number;
	pulse: number;
	newMenuData: boolean;
	setNewMenuData: (status: boolean) => void;
}

interface IMenuItem {
	push: (path: string) => void;
	itemName: string;
	percent: number;
	animate: boolean;
}

const MenuItem = ({ push, itemName, percent, animate }: IMenuItem) => {
	const [dynamicPercent, setDynamicPercent] = useState<number>(0)
	useEffect(() => {
		if (percent > 0 && animate) {
			if (dynamicPercent < percent) {
				setTimeout(() => setDynamicPercent(dynamicPercent + 1), 30)
			} else {
				setTimeout(() => setDynamicPercent(percent), 300)
			}
		} else {
			setDynamicPercent(percent)
		}
	}, [dynamicPercent])

	return (
		<div className={styles.stressIndicator}>
			<div
				className={styles.process}
				style={{
					width: `${dynamicPercent === 0 ? 1 : dynamicPercent}%`,
					height: `${dynamicPercent === 0 ? 92 : 100}%`,
					background: `rgba(10, 227, 21, ${
						dynamicPercent <= 10 ? 0.1 : dynamicPercent / 100
					})`,
				}}
			/>
			<div
				className={styles.stressData}
				onClick={() => push('/StressData')}
			>
				<GroupIcon style={{ fontSize: '2.6rem' }} />
				<span>{itemName}</span>
				<span>{`${dynamicPercent}%`}</span>
			</div>
		</div>
	)
}

const ItemsMenu = ({
	push,
	menuData,
	dream,
	pulse,
	newMenuData,
	setNewMenuData,
}: IItemsMenu) => {
	useEffect(() => {
		return () => {
			setNewMenuData(false)
		}
	}, [])

	return (
		<div className={styles.root}>
			<Grid container spacing={3}>
				{Object.keys(menuData).map((item: string) => (
					<Grid
						item
						xs={12}
						sm={12}
						md={6}
						lg={6}
						xl={6}
						key={uuidv4()}
					>
						<MenuItem
							push={push}
							itemName={menuData[item].name}
							percent={menuData[item].value}
							animate={newMenuData}
						/>
					</Grid>
				))}
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
						<div className={styles.label}>Sleep</div>
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
						<div className={styles.label}>Pulse</div>
					</div>
				</Grid>
			</Grid>
		</div>
	)
}

export default ItemsMenu
