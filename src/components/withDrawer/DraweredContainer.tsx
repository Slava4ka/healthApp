import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { RootState } from '../../store/reducers'
import { closeDrawer, openDrawer } from '../../store/actions/app'
import Drawered from './Drawered'

const mapStateToProps = (state: RootState) => ({
	isDrawerOpen: state.app.isDrawerOpen,
	name: state.signUp.userData.name,
})

const mapDispatchToProps = {
	closeDrawer,
	openDrawer,
	push,
}

export default connect(mapStateToProps, mapDispatchToProps)(Drawered)
