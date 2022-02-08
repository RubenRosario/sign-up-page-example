import styled from 'styled-components';

export const InputContainer = styled.div`
	width: ${({ halfWidth }) => (halfWidth ? '48%' : '100%')};
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 4px 2px;
`;

export const Label = styled.label`
	color: #fff;
	padding-left: 10px;
`;

export const InputElement = styled.input`
	width: 100%;
	height: 2.5rem;
	border: 2px solid var(--main-grey);
	border-radius: 10px;
	outline: none;
	padding: 10px;
	margin: 4px 2px;
	font-size: large;

	&:focus {
		border: 3px solid var(--main-blue);
	}
`;
