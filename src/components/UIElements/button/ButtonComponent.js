import React from 'react';
import { ButtonElement } from './ButtonElements';

const Button = ({ type, children, onClick }) => {
	return (
		<ButtonElement type={type} onClick={onClick}>
			{children}
		</ButtonElement>
	);
};

export default Button;
