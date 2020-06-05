import React from 'react'
import { ButtonBase } from '@material-ui/core'
import PulseBall from '../PulseBall/PulseBall'
import styles from './face.module.scss'

interface IFace {
	onLogoClick?: () => void;
}

const Face = ({ onLogoClick }: IFace) => {
	return (
		<div className={styles.root}>
			<PulseBall />
			<div className={styles.logo}>
				{onLogoClick ? (
					<ButtonBase onClick={onLogoClick} className={styles.button}>
						<img src="logoTest.png" alt="logo" />
					</ButtonBase>
				) : (
					<img
						className={styles.image}
						src="logoTest.png"
						alt="logo"
					/>
				)}
			</div>
		</div>
	)
}

export default Face
