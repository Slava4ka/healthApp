import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import MainPage from './MainPage'

const mapDispatchToProps = {
	push,
}

const MainPageContainer = connect(null, mapDispatchToProps)(MainPage)

export default MainPageContainer
