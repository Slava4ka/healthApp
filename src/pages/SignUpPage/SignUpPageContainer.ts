import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { setUserData } from '../../store/actions/signUp'
import SignUpPage from './SignUpPage'

const mapDispatchToProps = {
	setUserData,
	push,
}

const SignUpPageContainer = connect(null, mapDispatchToProps)(SignUpPage)

export default SignUpPageContainer
