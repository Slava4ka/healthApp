import React from 'react'
import styles from './loader.module.scss'

const Loader = () => {
	return (
		<div className={styles.center}>
			<div className={styles.pulse} />
		</div>
	)
}

export default Loader
