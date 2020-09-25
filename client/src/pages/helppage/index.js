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
								How does "Are the trails open?" get its trail status and
								condition data?
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="0">
							<Card.Body>Hello! I'm the body</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Card.Header>
							<Accordion.Toggle as={Button} variant="link" eventKey="1">
								Can anyone update trail status or condition?
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="1">
							<Card.Body>Hello! I'm another body</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Card.Header>
							<Accordion.Toggle as={Button} variant="link" eventKey="2">
								How do I open or close a trail?
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="2">
							<Card.Body>Hello! I'm another body</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Card.Header>
							<Accordion.Toggle as={Button} variant="link" eventKey="3">
								How do I updated a specific trail's condition?
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="3">
							<Card.Body>Hello! I'm another body</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Card.Header>
							<Accordion.Toggle as={Button} variant="link" eventKey="4">
								How do I copy a trail's address?
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="4">
							<Card.Body>Hello! I'm another body</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Card.Header>
							<Accordion.Toggle as={Button} variant="link" eventKey="5">
								What does the wheel/tire icon do?
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="5">
							<Card.Body>Hello! I'm another body</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Card.Header>
							<Accordion.Toggle as={Button} variant="link" eventKey="6">
								Why is the wheel icon not working?
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="6">
							<Card.Body>Hello! I'm another body</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Card.Header>
							<Accordion.Toggle as={Button} variant="link" eventKey="7">
								How do I download the app to my phone?
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="7">
							<Card.Body>Hello! I'm another body</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
			</div>
		</div>
	);
}

export default HelpPage;
