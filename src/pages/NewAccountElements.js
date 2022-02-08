import styled from 'styled-components';

export const PageWrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
`;

export const Header = styled.header`
	top: 0;
	left: 0;
	height: 10%;
	width: 100%;
	background-color: var(--main-grey);
	display: flex;

	#logo_2 {
		display: none;
	}

	@media screen and (max-width: 768px) {
		height: 10%;
		width: 100%;
		#logo_1 {
			display: none;
		}
		#logo_2 {
			display: block;
		}
	}
`;

export const MainSection = styled.main`
	width: 100%;
	/* min-height: 90%; */
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;

	h1 {
		display: block;
		text-align: center;
		margin: 2%;
	}

	h2 {
		display: block;
		text-align: center;
		margin: 2%;
	}
`;

export const PlansContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const Checkout = styled.div`
	width: 40%;
	display: grid;
	grid-template-rows: 1fr 1fr;
	grid-template-columns: 65% 30%;
	grid-template-areas:
		'code price'
		'button button';
	grid-column-gap: 5%;
	& > div {
		grid-area: code;
		color: #000 !important;
	}

	& > p {
		grid-area: price;
		font-size: 1.5rem;
		font-weight: bold;
		display: flex;
		justify-content: center;
		align-items: flex-end;
		padding: 8%;
	}
	& > button {
		grid-area: button;
	}

	@media screen and (max-width: 768px) {
		width: 80%;
	}
`;
