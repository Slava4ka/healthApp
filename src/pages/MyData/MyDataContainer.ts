import { connect } from 'react-redux'
import { RootState } from '../../store/reducers'
import { setDataDigitized } from '../../store/actions/app'
import MyData from './MyData'

const mapStateToProps = (state: RootState) => ({
	isDataDigitized: state.app.isDataDigitized,
})

const mapDispatchToProps = {
	setDataDigitized,
}

const MyDataContainer = connect(mapStateToProps, mapDispatchToProps)(MyData)

export default MyDataContainer
