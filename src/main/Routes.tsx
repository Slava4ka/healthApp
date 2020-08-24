import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { compose } from 'redux'
import MainPage from '../pages/MainPage/MainPageContainer'
import SettingsPage from '../pages/SettingsPage/SettingsPageContainer'
import SettingsInfoPage from '../pages/SettingInfoPage/SettingsInfoPageContainer'
import StressDataPage from '../pages/StressDataPage/StressDataPageContainer'
import SignUpPage from '../pages/SignUpPage/SignUpPageContainer'
import ChatPage from '../pages/ChatPage/ChatPageContainer'
import Protected from '../components/Protected/Protected'
import IntroPage from '../pages/IntroPage/IntroPageContainer'
import withThemeProvider from '../components/withThemeProvider/withThemeProvider'
import Drawered from '../components/withDrawer/DraweredContainer'
import MyDataContainer from '../pages/MyData/MyDataContainer'
import RisksPageContainer from '../pages/RisksPage/RisksPageContainer'

const Routes = () => {
	const mainWithDrawerAndHeader = <Drawered WrappedComponent={MainPage} />
	const myDataWithDrawerAndHeader = (
		<Drawered WrappedComponent={MyDataContainer} />
	)
	const myRisksWithDrawerAndHeader = (
		<Drawered WrappedComponent={RisksPageContainer} />
	)

	return (
		<Switch>
			<Route path="/" exact component={IntroPage} />
			<Route path="/registration" component={SignUpPage} />
			<Route
				path="/main"
				component={() => (
					<Protected Page={() => mainWithDrawerAndHeader} />
				)}
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
			<Route
				path="/StressData"
				exact
				component={() => <Protected Page={StressDataPage} />}
			/>
			<Route
				path="/myData"
				exact
				component={() => (
					<Protected Page={() => myDataWithDrawerAndHeader} />
				)}
			/>
			<Route
				path="/risks"
				exact
				component={() => (
					<Protected Page={() => myRisksWithDrawerAndHeader} />
				)}
			/>
		</Switch>
	)
}

export default compose<typeof React.Component>(withThemeProvider)(Routes)
