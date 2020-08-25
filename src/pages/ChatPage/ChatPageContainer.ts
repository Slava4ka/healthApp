import { connect } from 'react-redux'
import ChatPage from './ChatPage'
import { RootState } from '../../store/reducers'
import {
	recordMessage,
	sendMessage,
	setNewMessage,
} from '../../store/actions/chat'

const mapStateToProps = (state: RootState) => ({
	messages: state.chat.messages,
	userData: state.signUp.userData,
	typing: state.chat.typing,
	isDataDigitized: state.app.isDataDigitized,
	newMessage: state.chat.newMessage,
})

const mapDispatchToProps = {
	sendMessage,
	recordMessage,
	setNewMessage,
}

const ChatPageContainer = connect(mapStateToProps, mapDispatchToProps)(ChatPage)

export default ChatPageContainer
