import React from 'react'

import { ContainerSentCurrentUser, ContainerSentOtherUser } from './styles'

// import ReactEmoji from 'react-emoji'

import Emoji from 'react-emoji-render'

interface MessageProps {
	message: {
		text: string
		user: string
	}
	name: string
}

const Message: React.FC<MessageProps> = ({ message, name }) => {
	let isSentByCurrentUser = false

	const trimmedName = name.trim().toLowerCase()

	if (message.user === trimmedName) {
		isSentByCurrentUser = true
	}

	return isSentByCurrentUser ? (
		<ContainerSentCurrentUser>
			<p>{trimmedName}</p>
			<div>
				<p>
					<Emoji text={message.text} />
				</p>
			</div>
		</ContainerSentCurrentUser>
	) : (
		<ContainerSentOtherUser>
			<div>
				<p>
					<Emoji text={message.text} />
				</p>
			</div>
			<p>{message.user}</p>
		</ContainerSentOtherUser>
	)
}

export default Message
