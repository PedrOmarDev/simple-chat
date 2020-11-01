import styled from 'styled-components'

export const Form = styled.div`
	display: flex;
	border: 2px solid #d3d3d3;

	> input {
		border: none;
		border-radius: 0;
		padding: 5%;
		width: 80%;
		font-size: 1.2em;
	}

	> button {
		color: #fff !important;
		text-transform: uppercase;
		text-decoration: none;
		background: #004a80;
		padding: 20px;
		display: inline-block;
		border: none;
		width: 20%;
	}
`
