import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Switch, { SwitchProps } from '@material-ui/core/Switch'

const useStyles = makeStyles((theme) => ({
	root: {
		width: 42,
		height: 26,
		padding: 0,
		margin: theme.spacing(1),
	},
	switchBase: {
		padding: 1,
		'&$checked': {
			transform: 'translateX(16px)',
			color: theme.palette.common.white,
			'& + $track': {
				backgroundColor: '#52d869',
				opacity: 1,
				border: 'none',
			},
		},
		'&$focusVisible $thumb': {
			color: '#52d869',
			border: '6px solid #fff',
		},
	},
	thumb: {
		width: 24,
		height: 24,
	},
	track: {
		height: 'auto',
		borderRadius: 26 / 2,
		border: `1px solid ${theme.palette.grey[400]}`,
		backgroundColor: theme.palette.grey[50],
		opacity: 1,
		transition: theme.transitions.create(['background-color', 'border']),
	},
	checked: {},
	focusVisible: {},
}))

const IOSSWitch = ({
	checked,
	onChange,
	name,
	inputProps,
	edge,
}: SwitchProps) => {
	const classes = useStyles()

	return (
		<Switch
			focusVisibleClassName={classes.focusVisible}
			disableRipple
			classes={{
				root: classes.root,
				switchBase: classes.switchBase,
				thumb: classes.thumb,
				track: classes.track,
				checked: classes.checked,
			}}
			checked={checked}
			onChange={onChange}
			name={name}
			edge={edge}
			inputProps={inputProps}
		/>
	)
}

export default IOSSWitch
