import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainPage from '../pages/MainPage/MainPage'
import SettingsPage from '../pages/SettingsPage/SettingsPageContainer'
import SettingsInfoPage from '../pages/SettingInfoPage/SettingsInfoPageContainer'

const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={MainPage} />
			<Route path="/Settings" exact component={SettingsPage} />
			<Route path="/Settings/Info" exact component={SettingsInfoPage} />
		</Switch>
	)
}

export default Routes
