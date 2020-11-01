import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	color: white;
	height: 60%;
	justify-content: space-between;
	padding-right: 50px;
	min-width: 45%;

	> h1 {
		margin-bottom: 10px;
	}
`

export const ActiveItem = styled.div`
	display: flex;
	align-items: center;

	& + div {
		padding-top: 5px;
	}

	svg {
		color: #69f0ae;
		margin-right: 5px;
	}
`
