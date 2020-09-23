import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import ItemsMenu from './ItemsMenu'
import { RootState } from '../../store/reducers'
import { setNewMenuData } from '../../store/actions/app'

const mapStateToProps = (state: RootState) => ({
	haveStressData: state.app.haveStressData,
	menuData: state.app.menuData,
	dream: state.app.dream,
	pulse: state.app.pulse,
	newMenuData: state.app.newMenuData,
})

const mapDispatchToProps = {
	push,
	setNewMenuData,
}

const ItemsMenuContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ItemsMenu)

export default ItemsMenuContainer
