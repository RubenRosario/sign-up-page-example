import React from 'react';
import { Container, Header, Content, Footer } from './CardElements';

const Card = ({ header, content, footer, clickHandler }) => {
	return (
		<Container name='card-container' onClick={clickHandler}>
			<Header>{header}</Header>
			<Content>
				<h3>{content[1]}</h3>
				<p>{content[0]}</p>
			</Content>
			<Footer>${footer}</Footer>
		</Container>
	);
};

export default Card;
