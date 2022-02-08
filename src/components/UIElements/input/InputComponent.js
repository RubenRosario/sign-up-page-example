import React, { useEffect, useState } from 'react';
import { InputElement, InputContainer, Label } from './inputElement';

const Input = ({ type, placeholder, label, id, halfWidth, inputHandler }) => {
	const [value, setValue] = useState('');

	useEffect(() => {
		inputHandler(id, value);
	}, [id, value, inputHandler]);

	return (
		<InputContainer halfWidth={halfWidth}>
			<Label>{label}</Label>
			<InputElement
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={(event) => {
					setValue(event.target.value);
				}}
			/>
		</InputContainer>
	);
};

export default Input;
