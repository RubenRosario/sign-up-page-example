import styled from 'styled-components';

export const ButtonElement = styled.button`
	height: 3rem;
	width: 100%;
	margin: 8px 2px;
	background-color: var(--main-blue);
	color: white;
	border: none;
	border-radius: 30px;
	outline: none;
	font-size: large;
	font-weight: bold;
	cursor: pointer;

	&:hover {
		transform: translateY(-10%);
		transition: all 300ms ease-in-out;
	}
`;
