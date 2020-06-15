import { connect } from 'react-redux'
import { goBack } from 'connected-react-router'
import StressDataPage from './StressDataPage'

const mapDispatchToProps = {
	goBack,
}

const StressDataPageContainer = connect(
	null,
	mapDispatchToProps
)(StressDataPage)

export default StressDataPageContainer
