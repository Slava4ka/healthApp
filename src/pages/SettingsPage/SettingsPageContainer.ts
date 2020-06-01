import { connect } from 'react-redux'
import { goBack } from 'connected-react-router'
import SettingsPage from './SettingsPage'

const mapDispatchToProps = {
	goBack,
}

const PageSettingsContainer = connect(null, mapDispatchToProps)(SettingsPage)

export default PageSettingsContainer
