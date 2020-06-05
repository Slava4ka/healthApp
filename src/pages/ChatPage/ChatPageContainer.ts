import { connect } from 'react-redux'
import ChatPage from './ChatPage'
import { RootState } from '../../store/reducers'
import { recordMessage, sendMessage } from '../../store/actions/chat'

const mapStateToProps = (state: RootState) => ({
	messages: state.chat.messages,
	userData: state.signUp.userData,
})

const mapDispatchToProps = {
	sendMessage,
	recordMessage,
}

const ChatPageContainer = connect(mapStateToProps, mapDispatchToProps)(ChatPage)

export default ChatPageContainer
