import React from 'react'
import PulseBall from '../PulseBall/PulseBall'
import styles from './face.module.scss'

const Face = () => {
	return (
		<div className={styles.root}>
			<PulseBall />
			<div className={styles.logo}>
				<img src="logoTest.png" alt="logo" />
			</div>
		</div>
	)
}

export default Face
