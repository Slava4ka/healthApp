import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainPage from '../pages/MainPage/MainPage'
import SettingsPage from '../pages/SettingsPage/SettingsPageContainer'

const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={MainPage} />
			<Route path="/Settings" component={SettingsPage} />
		</Switch>
	)
}

export default Routes
