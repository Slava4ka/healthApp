import withStyles from '@material-ui/core/styles/withStyles'
import { Button } from '@material-ui/core'

export default withStyles({
	root: {
		boxShadow: 'none',
		textTransform: 'none',
		fontSize: '1rem',
		padding: '5px 38px',
		border: '1px solid',
		borderRadius: '10px',
		lineHeight: 1.5,
		background: 'linear-gradient(180deg, #3ED0D0 31.25%, #0672A2 100%)',
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		'&:hover': {
			backgroundColor: '#0069d9',
			borderColor: '#0062cc',
			boxShadow: 'none',
		},
		'&:active': {
			boxShadow: 'none',
			backgroundColor: '#0062cc',
			borderColor: '#005cbf',
		},
		'&:focus': {
			boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
		},
	},
})(Button)
