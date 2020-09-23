import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import MainPage from './MainPage'
import { setCrutch, setMenuData, setNewMenuData } from '../../store/actions/app'
import { RootState } from '../../store/reducers'

const mapStateToProps = (state: RootState) => ({
	messages: state.chat.messages,
	crutch: state.app.crutch,
})

const mapDispatchToProps = {
	push,
	setMenuData,
	setNewMenuData,
	setCrutch,
}

const MainPageContainer = connect(mapStateToProps, mapDispatchToProps)(MainPage)

export default MainPageContainer
