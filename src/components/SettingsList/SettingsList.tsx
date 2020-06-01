import React from 'react'
import { ListSubheader } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import clsx from 'clsx'
import makeStyles from '@material-ui/core/styles/makeStyles'
import IOSSWitch from '../IOSSwitch/IOSSwitch'
import styles from './settingsList.module.scss'

interface ISetting {
	id: number;
	name: string;
	value: boolean;
}

const settingsList: ISetting[] = [
	{ id: 0, name: 'Контроль количества часов сна', value: false },
	{ id: 1, name: 'Контроль пульса', value: false },
	{ id: 2, name: 'Контроль артериального давления', value: false },
	{ id: 3, name: 'Контроль температуры тела', value: false },
	{ id: 5, name: 'Контроль рациона питания', value: false },
	{ id: 6, name: 'Еженедельный контроль веса', value: false },
	{ id: 7, name: 'Контроль физических упражнений', value: false },
	{ id: 8, name: 'Контроль эмоционального состояния', value: false },
]

const useStyles = makeStyles(() => ({
	root: {
		fontSize: '1.5rem',
	},
}))

interface ISettingsList {
	name: string;
}

const SettingsList = ({ name }: ISettingsList) => {
	const [checked, setChecked] = React.useState<number[]>([])
	const classes = useStyles()

	const handleToggle = (value: number) => () => {
		const currentIndex = checked.indexOf(value)
		const newChecked = [...checked]

		if (currentIndex === -1) {
			newChecked.push(value)
		} else {
			newChecked.splice(currentIndex, 1)
		}

		setChecked(newChecked)
	}
	return (
		<List
			subheader={
				<ListSubheader className={clsx(classes.root, styles.header)}>
					{name}
				</ListSubheader>
			}
			className={styles.root}
		>
			{settingsList.map((setting: ISetting) => (
				<ListItem>
					<ListItemText
						id={`switch-list-label-${setting.id}`}
						primary={setting.name}
					/>
					<ListItemSecondaryAction>
						<IOSSWitch
							edge="end"
							onChange={handleToggle(setting.id)}
							checked={checked.indexOf(setting.id) !== -1}
							inputProps={{
								'aria-labelledby': `switch-list-label-${setting.id}`,
							}}
						/>
					</ListItemSecondaryAction>
				</ListItem>
			))}
		</List>
	)
}

export default SettingsList
