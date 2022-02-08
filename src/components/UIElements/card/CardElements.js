import styled from 'styled-components';

export const Container = styled.div`
	width: 300px;
	height: 400px;
	margin: 5px 3px;
	border-radius: 10px;
	border: 1px solid var(--light-grey);
	/* box-shadow: 1px 1px 7px 1px var(--main-grey); */
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 20% auto 15%;
	grid-template-areas:
		'header'
		'content'
		'footer';

	&:hover {
		transform: translateY(-5%);
		transition: all 300ms ease-in-out;
		border: 2px solid var(--main-blue);
	}

	@media screen and (max-width: 768px) {
		width: 80%;
		height: 100px;
		background-color: var(--main-blue);
		color: #fff;
		transition: all 500ms ease-in-out;
		grid-template-rows: 1fr;
		grid-template-columns: 2fr 1fr;
		grid-template-areas: 'header header footer';

		& > div:nth-child(2) {
			display: none;
		}

		&:hover {
			transform: translateY(0%);
			transition: all 500ms ease-in-out;
			height: 200px;
			grid-template-rows: 1fr 2fr;
			grid-template-columns: 2fr 1fr;
			grid-template-areas:
				'header header footer'
				'content content content'
				'content content content';

			& > div:nth-child(2) {
				display: block;
			}
		}
	}
`;

export const Header = styled.div`
	grid-area: header;
	padding: 5% 10%;
	font-size: 2rem;
	font-weight: bold;
	text-align: center;

	@media screen and (max-width: 768px) {
		grid-area: header;
		font-size: 1.2rem;
		padding: 2% 5%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
`;
export const Content = styled.div`
	grid-area: content;
	padding: 5%;
	font-size: 1.5rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	background-color: var(--main-blue);
	color: #fff;
	h3 {
		text-align: center;
	}
	p {
		text-align: start;
		padding: 5%;
	}

	@media screen and (max-width: 768px) {
		display: flex;
		padding: 2%;
		font-size: 1rem;
		p {
			text-align: start;
			padding: 2%;
		}
	}
`;
export const Footer = styled.div`
	grid-area: footer;
	padding: 2%;
	text-align: end;
	font-size: 2rem;

	@media screen and (max-width: 768px) {
		grid-area: footer;
		padding: 2% 8%;
		font-size: 1.5rem;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
`;
