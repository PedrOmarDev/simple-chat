import React from 'react'

// import ScrollToBottom from 'react-scroll-to-bottom'

import { Container } from './styles'

import Message from './Message'

// import './Messages.css'

interface MessageProps {
	user: string
	text: string
}

interface MessagesProps {
	messages: MessageProps[]
	name: string
}

const Messages: React.FC<MessagesProps> = ({ messages, name }) => (
	// <ScrollToBottom className="messages">
	<Container>
		{messages.map((message, i) => (
			<div key={i}>
				<Message message={message} name={name} />
			</div>
		))}
	</Container>
)

export default Messages
