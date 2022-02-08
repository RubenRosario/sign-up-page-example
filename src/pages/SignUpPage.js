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
import logo_1 from '../assets/images/logo_1.jpg';
import logo_2 from '../assets/images/logo_2_nb.png';

const SignUpPage = () => {
	// which form should be visible? the default is form #1
	const [whichForm, setWhichForm] = useState(1);
	const [showForm, setShowForm] = useState(true);
	const navigate = useNavigate();
	const [inputData, setInputData] = useState({
		email: '',
		password: '',
		firstName: '',
		lastName: '',
		username: '',
		address: '',
		city: '',
		state: '',
		country: '',
		phone: '',
	});

	const updateInputData = (id, value) => {
		inputData[id] = value;
		setInputData(inputData);
	};

	const navigateToPage = () => {
		navigate('/new-account', { state: inputData });
	};

	const formEmailPassword = (
		<Form visible={whichForm === 1} id='1'>
			<Input
				type='email'
				id='email'
				key={'form1_email'}
				placeholder='Type in your email'
				label='Email'
				inputHandler={updateInputData}
			/>
			<Input
				id='password'
				type='password'
				key={'form1_password'}
				placeholder='Set a password'
				label='Password'
				inputHandler={updateInputData}
			/>
		</Form>
	);
	const formNameUserName = (
		<Form visible={whichForm === 2} id='2'>
			<Input
				key={'form2_firsName'}
				id='firsName'
				type='text'
				placeholder='What is your first name'
				label='First Name'
				inputHandler={updateInputData}
			/>
			<Input
				id='lastName'
				key={'form2_lastName'}
				type='text'
				placeholder='... and your last name'
				label='Last Name'
				inputHandler={updateInputData}
			/>
			<Input
				id='username'
				key={'form2_username'}
				type='text'
				placeholder='Choose a username'
				label='Username'
				inputHandler={updateInputData}
			/>
		</Form>
	);

	const formAddressPhone = (
		<Form visible={whichForm === 3} id='3'>
			<Input
				id='address'
				key={'form3_address'}
				type='text'
				placeholder='What is your address'
				label='Address'
				inputHandler={updateInputData}
			/>
			<Input
				id='city'
				key={'form3_city'}
				type='text'
				placeholder='City'
				halfWidth
				label='City'
				inputHandler={updateInputData}
			/>
			<Input
				id='state'
				key={'form3_state'}
				type='text'
				placeholder='State'
				halfWidth
				label='State'
				inputHandler={updateInputData}
			/>
			<Input
				id='country'
				key={'form3_country'}
				type='text'
				placeholder='County'
				label='Country'
				inputHandler={updateInputData}
			/>
			<Input
				id='phone'
				key={'form3_phone'}
				type='phone'
				placeholder='What is your phone number'
				label='Phone'
				inputHandler={updateInputData}
			/>
		</Form>
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
	const continueHandler = () => {
		setWhichForm(whichForm + 1);
		setShowForm(!showForm);
	};
	return (
		<PageWrapper>
			<FormsContainer name='form-container'>
				<FormWrapper name='form-wrapper'>
					<h1>Sign Up</h1>
					{whichForm === 1
						? formEmailPassword
						: whichForm === 2
						? formNameUserName
						: formAddressPhone}
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
