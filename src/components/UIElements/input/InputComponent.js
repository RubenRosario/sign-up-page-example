import React, { useEffect, useReducer } from 'react';
import {
	InputElement,
	InputContainer,
	Label,
	ErrMessage,
} from './inputElement';
import { validate } from '../../../utils/validators';

const inputReducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE':
			return {
				...state,
				value: action.value,
				isValid: validate(action.value, action.validators),
			};
		case 'TOUCH':
			return {
				...state,
				isTouched: true,
			};
		default:
			return state;
	}
};

const Input = ({
	type,
	placeholder,
	label,
	id,
	halfWidth,
	inputHandler,
	validators,
	err,
}) => {
	const [inputState, dispatch] = useReducer(inputReducer, {
		value: '',
		isTouched: false,
		isValid: true,
	});

	const changeHandler = (event) => {
		dispatch({
			type: 'CHANGE',
			value: event.target.value,
			validators,
		});
	};

	const touchHandler = () => {
		dispatch({
			type: 'TOUCH',
		});
	};

	useEffect(() => {
		inputHandler(id, inputState.value);
	}, [id, inputState.value, inputHandler]);

	return (
		<InputContainer halfWidth={halfWidth}>
			<Label notValid={!inputState.isValid && inputState.isTouched}>
				{label}
			</Label>
			<InputElement
				notValid={!inputState.isValid && inputState.isTouched}
				type={type}
				placeholder={placeholder}
				value={inputState.value}
				onChange={changeHandler}
				onBlur={touchHandler}
			/>
			<ErrMessage show={!inputState.isValid && inputState.isTouched}>
				{err}
			</ErrMessage>
		</InputContainer>
	);
};

export default Input;
