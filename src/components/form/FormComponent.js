import React from 'react';
import { Container, ElementsWrapper } from './FormElements';

const Form = ({ children, id }) => {
	return (
		<Container name='container'>
			<ElementsWrapper name='element-wrapper'>{children}</ElementsWrapper>
		</Container>
	);
};

export default Form;
