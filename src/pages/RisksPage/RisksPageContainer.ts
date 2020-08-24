import { connect } from 'react-redux'
import { RootState } from '../../store/reducers'
import RisksPage from './RisksPage'

const mapStateToProps = (state: RootState) => ({
	isDataDigitized: state.app.isDataDigitized,
})

const mapDispatchToProps = {}

const RisksPageContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(RisksPage)

export default RisksPageContainer
