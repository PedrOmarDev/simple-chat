import React from 'react'
import { FaCircle } from 'react-icons/fa'

import { ActiveItem, Container } from './styles'

interface UserProps {
	name: string
}

interface TextContainerProps {
	users: UserProps[]
}

const TextContainer: React.FC<TextContainerProps> = ({ users }) => (
	<Container>
		{users ? (
			<>
				<h1>Pessoas buscando parcerias online:</h1>
				<div>
					{users.map(({ name }) => (
						<div key={name}>
							<ActiveItem>
								<FaCircle />
								{name}
							</ActiveItem>
						</div>
					))}
				</div>
			</>
		) : null}
	</Container>
)

export default TextContainer
