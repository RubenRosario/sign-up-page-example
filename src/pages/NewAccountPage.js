import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
	PageWrapper,
	Header,
	MainSection,
	PlansContainer,
	Checkout,
} from './NewAccountElements';
import Input from '../components/UIElements/input/InputComponent';
import Card from '../components/UIElements/card/CardComponent';
import logo_1 from '../assets/images/logo_1_nb.png';
import logo_2 from '../assets/images/logo_2_nb.png';
import Button from '../components/UIElements/button/ButtonComponent';

const productList = [
	{
		name: 'Product 1',
		description: 'product 1 description',
		price: 29.99,
		subscriptionLength: 'monthly',
	},
	{
		name: 'Product 2',
		description:
			'product 2 description. You save 25% off the monthly subscription',
		price: 269.91,
		subscriptionLength: 'yearly',
	},
	{
		name: 'Product 3',
		description: 'product description. Contact our customer service',
		price: '-',
		subscriptionLength: 'lifetime',
	},
];
const NewAccount = () => {
	const [selectedPlan, setSelectedPlan] = useState(0);
	const location = useLocation();

	const updateInputData = (id, value) => {};
	return (
		<PageWrapper name='main-page-wrapper'>
			<Header name='main-page-header'>
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
			<MainSection name='main-page-section'>
				<h1>{`Congratulations ${location.state.firsName}! You are now registered!`}</h1>
				<h2> Choose a plan below </h2>
				<PlansContainer>
					<Card
						clickHandler={() => setSelectedPlan(productList[0].price)}
						header={productList[0].name}
						content={[
							productList[0].description,
							productList[0].subscriptionLength,
						]}
						footer={productList[0].price}
					/>
					<Card
						clickHandler={() => setSelectedPlan(productList[1].price)}
						header={productList[1].name}
						content={[
							productList[1].description,
							productList[1].subscriptionLength,
						]}
						footer={productList[1].price}
					/>
					<Card
						header={productList[2].name}
						content={[
							productList[2].description,
							productList[2].subscriptionLength,
						]}
						footer={productList[2].price}
					/>
				</PlansContainer>
				<Checkout>
					<Input
						type='text'
						placeholder='Type in a promo code'
						label='Promo code'
						inputHandler={updateInputData}
					/>
					<p>${selectedPlan}</p>
					<Button type='button' onClick={() => {}}>
						{'Proceed to checkout'}
					</Button>
				</Checkout>
			</MainSection>
		</PageWrapper>
	);
};

export default NewAccount;
