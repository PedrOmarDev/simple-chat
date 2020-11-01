import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: #00b8f0;
	border-radius: 4px 4px 0 0;
	height: 60px;
	width: 100%;
`

export const LeftContent = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	margin-left: 5%;
	color: white;

	> svg {
		color: #69f0ae;
		margin-right: 5px;
	}
`

export const RightContent = styled.div`
	display: flex;
	flex: 0.5;
	justify-content: flex-end;
	margin-right: 5%;

	a svg {
		color: #fff;
	}
`
