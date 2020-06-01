import { connect } from 'react-redux'
import { goBack } from 'connected-react-router'
import SettingInfoPage from './SettingInfoPage'

const mapDispatchToProps = {
	goBack,
}

const SettingsInfoPageContainer = connect(
	null,
	mapDispatchToProps
)(SettingInfoPage)

export default SettingsInfoPageContainer
