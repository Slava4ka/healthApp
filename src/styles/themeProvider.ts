import { createMuiTheme } from '@material-ui/core/styles'

export interface IPalette {
	[key: string]: string;
}

const defaultMaterialTheme = () =>
	createMuiTheme({
		palette: {
			primary: {
				main: `#0672A2`,
			},
			secondary: {
				main: '#000000',
			},
		},
		typography: {
			body1: {
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
				fontSize: '14px',
			},
			subtitle1: {
				fontWeight: 500,
				marginBottom: '4px',
			},
		},
		overrides: {
			MuiButton: {
				root: {
					fontWeight: 'bold',
				},
			},
			MuiDrawer: {
				paper: {
					background:
						'linear-gradient(180deg, #3ED0D0 31.25%, #0672A2 100%)',
				},
			},
			MuiTypography: {
				body1: {
					fontSize: '1.4rem',
				},
			},
		},
	})

export default defaultMaterialTheme
