import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { setUserData } from '../../store/actions/signUp'
import SignUpPage from './SignUpPage'
import { setHaveUserData } from '../../store/actions/app'

const mapDispatchToProps = {
	setHaveUserData,
	setUserData,
	push,
}

const SignUpPageContainer = connect(null, mapDispatchToProps)(SignUpPage)

export default SignUpPageContainer
