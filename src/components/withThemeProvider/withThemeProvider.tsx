import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import defaultMaterialTheme from '../../styles/themeProvider'

const withThemeProvider = (WrappedComponent: React.FunctionComponent) => {
	return () => (
		<ThemeProvider theme={defaultMaterialTheme()}>
			<WrappedComponent />
		</ThemeProvider>
	)
}

export default withThemeProvider
