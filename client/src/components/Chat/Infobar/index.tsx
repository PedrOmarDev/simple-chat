import React from 'react'
import { FiXCircle } from 'react-icons/fi'
import { FaCircle } from 'react-icons/fa'

import { Container, LeftContent, RightContent } from './styles'

// import onlineIcon from '../../icons/onlineIcon.png'
// import closeIcon from '../../icons/closeIcon.png'

interface InfoBarProps {
	room: string
}

const InfoBar: React.FC<InfoBarProps> = ({ room }) => (
	<Container>
		<LeftContent>
			<FaCircle />
			<h3>Assunto do chat: {room}</h3>
		</LeftContent>
		<RightContent>
			{/* <a href="/"><img src={closeIcon} alt="close icon" /></a> */}
			<a href="/">
				<FiXCircle size={20} />
			</a>
		</RightContent>
	</Container>
)

export default InfoBar
