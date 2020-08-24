import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import ItemsMenu from './ItemsMenu'
import { RootState } from '../../store/reducers'

const mapStateToProps = (state: RootState) => ({
	haveStressData: state.app.haveStressData,
	stressPercent: state.app.stressPercent,
	dream: state.app.dream,
	pulse: state.app.pulse,
})

const mapDispatchToProps = {
	push,
}

const ItemsMenuContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ItemsMenu)

export default ItemsMenuContainer
