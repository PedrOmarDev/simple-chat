import styled from 'styled-components'

export const ContainerSentCurrentUser = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 0 5%;
	margin-top: 15px;

	justify-content: flex-end;

	p {
		display: flex;
		align-items: center;
		font-family: Helvetica;
		color: #828282;
		letter-spacing: 0.3px;

		padding-right: 10px;
	}

	> div {
		background: #f3f3f3;
		border-radius: 20px;
		padding: 5px 20px;
		color: white;
		display: inline-block;
		max-width: 80%;

		background: #2979ff;

		> p {
			width: 100%;
			letter-spacing: 0;
			float: left;
			font-size: 1.1em;
			word-wrap: break-word;

			color: white;
		}
	}
`

export const ContainerSentOtherUser = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 0 5%;
	margin-top: 3px;

	justify-content: flex-start;

	> div {
		background: #f3f3f3;
		border-radius: 20px;
		padding: 5px 20px;
		color: white;
		display: inline-block;
		max-width: 80%;

		background: #f3f3f3;

		> p {
			width: 100%;
			letter-spacing: 0;
			float: left;
			font-size: 1.1em;
			word-wrap: break-word;

			color: #00b8f0;
		}
	}

	> p {
		display: flex;
		align-items: center;
		font-family: Helvetica;
		color: #828282;
		letter-spacing: 0.3px;
		padding-left: 15px;
	}
`
