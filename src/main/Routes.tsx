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
			<Route path="/" exact component={SignUpPage} />
			<Route
				path="/main"
				component={() => <Protected Page={MainPage} />}
			/>
			<Route
				path="/chat"
				component={() => <Protected Page={ChatPage} />}
			/>
			<Route
				path="/Settings"
				exact
				component={() => <Protected Page={SettingsPage} />}
			/>
			<Route
				path="/Settings/Info"
				exact
				component={() => <Protected Page={SettingsInfoPage} />}
			/>
			{/* <Route path="/main" component={MainPage} />
			<Route path="/chat" component={ChatPage} />
			<Route path="/Settings" exact component={SettingsPage} />
			<Route path="/Settings/Info" exact component={SettingsInfoPage} /> */}
		</Switch>
	)
}

export default Routes
