import { connect } from 'react-redux'
import ChatPage from './ChatPage'
import { RootState } from '../../store/reducers'
import { sendMessage } from '../../store/actions/chat'

const mapStateToProps = (state: RootState) => ({
	messages: state.chat.messages,
})

const mapDispatchToProps = {
	sendMessage,
}

const ChatPageContainer = connect(mapStateToProps, mapDispatchToProps)(ChatPage)

export default ChatPageContainer
