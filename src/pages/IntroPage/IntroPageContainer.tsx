import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import IntroPage from './IntroPage'

const mapDispatchToProps = {
	push,
}

const IntroPageContainer = connect(null, mapDispatchToProps)(IntroPage)

export default IntroPageContainer
