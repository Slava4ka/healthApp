import { connect } from 'react-redux'
import { goBack, push } from 'connected-react-router'
import SettingsPage from './SettingsPage'

const mapDispatchToProps = {
	goBack,
	push,
}

const SettingsPageContainer = connect(null, mapDispatchToProps)(SettingsPage)

export default SettingsPageContainer
