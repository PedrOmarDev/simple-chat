import React from 'react'

import { Form } from './styles'

interface InputChatProps {
	setMessage(value: string): void
	sendMessage(message: React.KeyboardEvent | React.MouseEvent): void
	message: string
}

const Input: React.FC<InputChatProps> = ({
	setMessage,
	sendMessage,
	message,
}) => (
	<Form className="form">
		<input
			className="input"
			type="text"
			placeholder="Digite sua mensagem..."
			value={message}
			onChange={({ target: { value } }) => setMessage(value)}
			onKeyPress={(event: React.KeyboardEvent) =>
				event.key === 'Enter' ? sendMessage(event) : null
			}
		/>
		<button className="sendButton" onClick={e => sendMessage(e)}>
			Enviar
		</button>
	</Form>
)

export default Input
