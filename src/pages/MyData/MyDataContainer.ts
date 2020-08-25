import { connect } from 'react-redux'
import { RootState } from '../../store/reducers'
import { setDataDigitized, setNewRisks } from '../../store/actions/app'
import MyData from './MyData'
import { setNewMessage } from '../../store/actions/chat'

const mapStateToProps = (state: RootState) => ({
	isDataDigitized: state.app.isDataDigitized,
})

const mapDispatchToProps = {
	setDataDigitized,
	setNewMessage,
	setNewRisks,
}

const MyDataContainer = connect(mapStateToProps, mapDispatchToProps)(MyData)

export default MyDataContainer
