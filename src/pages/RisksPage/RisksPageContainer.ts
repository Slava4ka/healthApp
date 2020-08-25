import { connect } from 'react-redux'
import { RootState } from '../../store/reducers'
import RisksPage from './RisksPage'
import { setNewRisks } from '../../store/actions/app'

const mapStateToProps = (state: RootState) => ({
	isDataDigitized: state.app.isDataDigitized,
	haveNewRisks: state.app.haveNewRisks,
})

const mapDispatchToProps = {
	setNewRisks,
}

const RisksPageContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(RisksPage)

export default RisksPageContainer
