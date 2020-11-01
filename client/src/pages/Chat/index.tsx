import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

import { useHistory } from 'react-router-dom'

import { Container, ContainerChat } from './styles'

import TextContainer from '../../components/TextContainer'

import Messages from '../../components/Chat/Messages'
import InfoBar from '../../components/Chat/Infobar'
import Input from '../../components/Chat/Input'

interface UserProps {
	name: string
}

interface RoomProps {
	name: string
	users: UserProps[]
}

interface MessageProps {
	user: string
	text: string
}

const ENDPOINT = 'http://localhost:5000'

const socket = io(ENDPOINT, { secure: true })

const Chat: React.FC = () => {
	const [users, setUsers] = useState<UserProps[]>([])
	const [name, setName] = useState('')
	const [room, setRoom] = useState('')
	const [message, setMessage] = useState('')
	const [messages, setMessages] = useState<MessageProps[]>([])

	const history = useHistory()

	useEffect(() => {
		const { name, room } = queryString.parse(history.location.search)

		if (typeof room === 'string' && typeof name === 'string') {
			setRoom(room)
			setName(name)

			socket.emit('join', { name, room }, (error: string) => {
				if (error) {
					alert(error)
				}
			})

			socket.on('message', (message: MessageProps) => {
				setMessages(messages => [...messages, message])
			})
		}

		socket.on('roomData', ({ users }: RoomProps) => {
			setUsers(users)
		})
	}, [history.location.search])

	const sendMessage = (event: React.KeyboardEvent | React.MouseEvent) => {
		event.preventDefault()

		if (message) {
			socket.emit('sendMessage', message, () => setMessage(''))
		}
	}

	return (
		<Container>
			<TextContainer users={users} />
			<ContainerChat>
				<InfoBar room={room} />
				<Messages messages={messages} name={name} />
				<Input
					message={message}
					setMessage={setMessage}
					sendMessage={sendMessage}
				/>
			</ContainerChat>
		</Container>
	)
}

export default Chat
