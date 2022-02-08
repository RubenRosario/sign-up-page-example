import styled from 'styled-components';

export const PageWrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;

	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
	}
`;

export const FormsContainer = styled.div`
	background-color: var(--main-grey);
	height: 100%;
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 768px) {
		height: 80%;
		width: 100%;
		align-items: flex-start;
	}
`;

export const FormWrapper = styled.div`
	width: 60%;
	height: 80%;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	h1 {
		align-self: flex-start;
		color: #fff;
		font-weight: bold;
		font-size: 3rem;
		margin: 4px 2px;
	}

	@media screen and (max-width: 768px) {
		width: 80%;

		h1 {
			font-size: 2rem;
		}
	}
`;

export const FormContext = styled.div`
	height: 100%;
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	@media screen and (max-width: 768px) {
		height: 20%;
		width: 100%;
		background-color: var(--main-grey);
		flex-direction: row;
		justify-content: flex-start;
		align-items: baseline;
		/* transition: background-color 0.8s ease; */
	}
`;

export const Header = styled.header`
	top: 0;
	left: 0;
	height: 10%;
	width: 100%;
	display: flex;

	#logo_2 {
		display: none;
	}

	@media screen and (max-width: 768px) {
		height: 30%;
		width: 6%;
		#logo_1 {
			display: none;
		}
		#logo_2 {
			display: block;
		}
	}
`;

export const FormInfo = styled.div`
	width: 100%;
	height: 70%;
	display: flex;
	align-items: flex-start;
`;

export const Section = styled.section`
	width: 100%;
	padding: 30px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h2 {
		text-align: center;
		margin: 5px;
		font-size: 2rem;
		font-weight: bolder;
	}
	p {
		margin: 5px;
		text-align: center;
		font-size: medium;
		font-weight: bold;
	}
	@media screen and (max-width: 768px) {
		padding: 10px 5px;
		color: #fff;

		h2 {
			font-size: 1.5rem;
		}
		p {
			font-size: smaller;
		}
	}
`;
