import { connect } from 'react-redux'
import ChatPage from './ChatPage'
import { RootState } from '../../store/reducers'
import {
	recordMessage,
	sendMessage,
	setNewMessage,
} from '../../store/actions/chat'
import { setCrutchMessage } from '../../store/actions/app'

const mapStateToProps = (state: RootState) => ({
	messages: state.chat.messages,
	userData: state.signUp.userData,
	typing: state.chat.typing,
	isDataDigitized: state.app.isDataDigitized,
	newMessage: state.chat.newMessage,
	crutchMessage: state.app.crutchMessage,
})

const mapDispatchToProps = {
	sendMessage,
	recordMessage,
	setNewMessage,
	setCrutchMessage,
}

const ChatPageContainer = connect(mapStateToProps, mapDispatchToProps)(ChatPage)

export default ChatPageContainer
