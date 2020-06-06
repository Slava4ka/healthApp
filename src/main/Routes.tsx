import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainPage from '../pages/MainPage/MainPageContainer'
import SettingsPage from '../pages/SettingsPage/SettingsPageContainer'
import SettingsInfoPage from '../pages/SettingInfoPage/SettingsInfoPageContainer'
import SignUpPage from '../pages/SignUpPage/SignUpPageContainer'
import ChatPage from '../pages/ChatPage/ChatPageContainer'
import Protected from '../components/Protected/Protected'

const Routes = () => {
	return (
		<Switch>
			<Route path="/healthApp" exact component={SignUpPage} />
			<Route
				path="/healthApp/main"
				component={() => <Protected Page={MainPage} />}
			/>
			<Route
				path="/healthApp/chat"
				component={() => <Protected Page={ChatPage} />}
			/>
			<Route
				path="/healthApp/Settings"
				exact
				component={() => <Protected Page={SettingsPage} />}
			/>
			<Route
				path="healthApp/Settings/Info"
				exact
				component={() => <Protected Page={SettingsInfoPage} />}
			/>
		</Switch>
	)
}

export default Routes
