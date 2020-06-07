import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import MainPage from './MainPage'
import { setStressParams } from '../../store/actions/app'
import { RootState } from '../../store/reducers'

const mapStateToProps = (state: RootState) => ({
	messages: state.chat.messages,
})

const mapDispatchToProps = {
	push,
	setStressParams,
}

const MainPageContainer = connect(mapStateToProps, mapDispatchToProps)(MainPage)

export default MainPageContainer
