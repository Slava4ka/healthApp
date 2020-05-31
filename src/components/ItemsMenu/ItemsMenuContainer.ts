import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import ItemsMenu from './ItemsMenu'

const mapDispatchToProps = {
	push,
}

const ItemsMenuContainer = connect(null, mapDispatchToProps)(ItemsMenu)

export default ItemsMenuContainer
