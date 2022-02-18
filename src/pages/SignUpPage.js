import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/form/FormComponent';
import {
	FormsContainer,
	PageWrapper,
	FormContext,
	FormWrapper,
	Header,
	FormInfo,
	Section,
} from './SignUpElements';
import Input from '../components/UIElements/input/InputComponent';
import Button from '../components/UIElements/button/ButtonComponent';
import {
	VALIDATOR_REQUIRE,
	VALIDATOR_EMAIL,
	VALIDATOR_MINLENGTH,
	VALIDATOR_ALPHA,
} from '../utils/validators';
import logo_1 from '../assets/images/logo_1.jpg';
import logo_2 from '../assets/images/logo_2_nb.png';

const SignUpPage = () => {
	// which form should be visible? the default is form #1
	const [whichForm, setWhichForm] = useState(1);
	const navigate = useNavigate();
	const [inputData, setInputData] = useState({
		email: { value: '', isValid: false },
		password: { value: '', isValid: false },
		firstName: { value: '', isValid: false },
		lastName: { value: '', isValid: false },
		username: { value: '', isValid: false },
		address: { value: '', isValid: false },
		city: { value: '', isValid: false },
		state: { value: '', isValid: false },
		country: { value: '', isValid: false },
		phone: { value: '', isValid: false },
	});

	const updateInputHandler = (id, value, isValid) => {
		inputData[id].value = value;
		inputData[id].isValid = isValid;

		setInputData(inputData);
	};

	const isFormValid = () => {
		switch (whichForm) {
			case 1:
				const { email, password } = inputData;
				return (
					email.value !== '' &&
					email.isValid === true &&
					password.value !== '' &&
					password.isValid === true
				);
			case 2:
				const { firstName, lastName, username } = inputData;
				return (
					firstName.value !== '' &&
					firstName.isValid === true &&
					lastName.value !== '' &&
					lastName.isValid === true &&
					username.value !== '' &&
					username.isValid === true
				);
			case 3:
				const { address, city, state, country, phone } = inputData;
				return (
					address.value !== '' &&
					address.isValid === true &&
					city.value !== '' &&
					city.isValid === true &&
					state.value !== '' &&
					state.isValid === true &&
					country.value !== '' &&
					country.isValid === true &&
					phone.value !== '' &&
					phone.isValid === true
				);
			default:
				return false;
		}
	};

	const continueHandler = () => {
		if (isFormValid()) {
			setWhichForm(whichForm + 1);
		}
	};

	const navigateToPage = () => {
		console.log(isFormValid());
		if (isFormValid()) {
			navigate('/new-account', { state: inputData });
		}
	};

	const formEmailPassword = (
		<>
			<Input
				type='email'
				id='email'
				key={'form1_email'}
				placeholder='Type in your email'
				label='Email'
				err='Insert a valid email.'
				validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
				inputHandler={updateInputHandler}
			/>
			<Input
				id='password'
				type='password'
				key={'form1_password'}
				placeholder='Set a password'
				label='Password'
				err='Password must have at least 8 character.'
				validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(8)]}
				inputHandler={updateInputHandler}
			/>
		</>
	);
	const formNameUserName = (
		<>
			<Input
				key={'form2_firsName'}
				id='firstName'
				type='text'
				placeholder='What is your first name'
				label='First Name'
				err='Insert a valid first name (no spaces).'
				validators={[VALIDATOR_REQUIRE(), VALIDATOR_ALPHA()]}
				inputHandler={updateInputHandler}
			/>
			<Input
				id='lastName'
				key={'form2_lastName'}
				type='text'
				placeholder='... and your last name'
				label='Last Name'
				err='Insert a valid last name (no spaces).'
				validators={[VALIDATOR_REQUIRE(), VALIDATOR_ALPHA()]}
				inputHandler={updateInputHandler}
			/>
			<Input
				id='username'
				key={'form2_username'}
				type='text'
				placeholder='Choose a username'
				label='Username'
				err='this field is required.'
				validators={[VALIDATOR_REQUIRE()]}
				inputHandler={updateInputHandler}
			/>
		</>
	);

	const formAddressPhone = (
		<>
			<Input
				id='address'
				key={'form3_address'}
				type='text'
				placeholder='What is your address'
				label='Address'
				err='this field is required.'
				validators={[VALIDATOR_REQUIRE()]}
				inputHandler={updateInputHandler}
			/>
			<Input
				id='city'
				key={'form3_city'}
				type='text'
				placeholder='City'
				halfWidth
				label='City'
				err='Insert a valid city name.'
				validators={[VALIDATOR_REQUIRE(), VALIDATOR_ALPHA()]}
				inputHandler={updateInputHandler}
			/>
			<Input
				id='state'
				key={'form3_state'}
				type='text'
				placeholder='State'
				halfWidth
				label='State'
				err='Insert a valid state name.'
				validators={[VALIDATOR_REQUIRE(), VALIDATOR_ALPHA()]}
				inputHandler={updateInputHandler}
			/>
			<Input
				id='country'
				key={'form3_country'}
				type='text'
				placeholder='County'
				label='Country'
				err='Insert a valid country name.'
				validators={[VALIDATOR_REQUIRE(), VALIDATOR_ALPHA()]}
				inputHandler={updateInputHandler}
			/>
			<Input
				id='phone'
				key={'form3_phone'}
				type='phone'
				placeholder='What is your phone number'
				label='Phone'
				validators={[]}
				inputHandler={updateInputHandler}
			/>
		</>
	);

	const emailPasswordInfo = (
		<Section>
			<h2>{`Lets Start`}</h2>
			<p>
				{`Please provide us with your best email. Then set a strong password with
				at least 8 characters, 1 UPPER case, 1 lower case, 1 number and 1
				special character `}
			</p>
		</Section>
	);

	const nameUsernameInfo = (
		<Section>
			<h2>{`We are half way through`}</h2>
			<p>
				{`Please tells us what is your first and last name. Then choose a username. Be creative.`}
			</p>
		</Section>
	);
	const addressPhoneInfo = (
		<Section>
			<h2>{`Last set of questions. We promise.`}</h2>
			<p>
				{`Can you please provide us your address and phone number? Your data is safe with us.`}
			</p>
		</Section>
	);

	return (
		<PageWrapper>
			<FormsContainer name='form-container'>
				<FormWrapper name='form-wrapper'>
					<h1>Sign Up</h1>
					<Form>
						{whichForm === 1
							? formEmailPassword
							: whichForm === 2
							? formNameUserName
							: formAddressPhone}
					</Form>
					{whichForm !== 3 ? (
						<Button onClick={continueHandler}>{'Continue'}</Button>
					) : (
						<Button onClick={navigateToPage}>{'Create Account'}</Button>
					)}
				</FormWrapper>
			</FormsContainer>
			<FormContext>
				<Header>
					<img
						src={logo_1}
						id='logo_1'
						alt='Legendary Collections logo - long version'
					/>
					<img
						src={logo_2}
						id='logo_2'
						alt='Legendary Collections logo -  short version'
					/>
				</Header>
				<FormInfo>
					{whichForm === 1
						? emailPasswordInfo
						: whichForm === 2
						? nameUsernameInfo
						: addressPhoneInfo}
				</FormInfo>
			</FormContext>
		</PageWrapper>
	);
};

export default SignUpPage;
