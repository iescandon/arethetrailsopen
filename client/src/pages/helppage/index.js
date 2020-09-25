import React, { useState, useEffect } from 'react';
import Jumbotron from '../../components/jumbotron';
import './style.css';
import { Card, Accordion, Button } from 'react-bootstrap';

function HelpPage() {
	const [pageState, setPageState] = useState('');

	useEffect(() => {
		setPageState('help');
	}, []);

	return (
		<div>
			<Jumbotron pageState={pageState} />
			<div className="container body-container">
				<div className="text-center header mt-3">Help</div>
				<Accordion className="mt-3">
					<Card>
						<Card.Header>
							<Accordion.Toggle as={Button} variant="link" eventKey="0">
								Click me!
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="0">
							<Card.Body>Hello! I'm the body</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Card.Header>
							<Accordion.Toggle as={Button} variant="link" eventKey="1">
								Click me!
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="1">
							<Card.Body>Hello! I'm another body</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Card.Header>
							<Accordion.Toggle as={Button} variant="link" eventKey="2">
								Click me!
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="2">
							<Card.Body>Hello! I'm another body</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
			</div>
		</div>
	);
}

export default HelpPage;
