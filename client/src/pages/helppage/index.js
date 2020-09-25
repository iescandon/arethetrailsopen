import React, { useState, useEffect } from 'react';
import Jumbotron from '../../components/jumbotron';
import './style.css';
import { Card, Accordion } from 'react-bootstrap';

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
						<Accordion.Toggle
							as={Card.Header}
							variant="link"
							eventKey="0"
							className="help-header"
						>
							How does "Are the trails open?" get its trail status and condition
							data?
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="0">
							<Card.Body>
								"Are the trails open?" trail status and condition data relies
								100% on the users! So if you see a trail status or condition has
								changed and it hasn't been updated, please update it so that
								everyone else can see it!
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Accordion.Toggle
							as={Card.Header}
							variant="link"
							eventKey="9"
							className="help-header"
						>
							How can I search for trails nearby?
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="9">
							<Card.Body>
								In the search bar you can search using zip code, city/state, or
								address.
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Accordion.Toggle
							as={Card.Header}
							variant="link"
							eventKey="10"
							className="help-header"
						>
							Why are some trail markers on the map red and others are green?
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="10">
							<Card.Body>
								If a marker is red, it means the trails are closed. If the
								marker is green, it means the trails are open.
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Accordion.Toggle
							as={Card.Header}
							variant="link"
							eventKey="1"
							className="help-header"
						>
							Can anyone update trail status or condition?
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="1">
							<Card.Body>
								Yes! Absolutely! If you go to Memorial Park and see that it is
								closed, come to "Are the trails open?" and close the trail if it
								isn't already closed.
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Accordion.Toggle
							as={Card.Header}
							variant="link"
							eventKey="2"
							className="help-header"
						>
							How do I open or close a trail?
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="2">
							<Card.Body>
								Use the toggle switch next to the name of the trail. If it is
								green with a checkmark that means the trail is open. If it is
								red and has an X that means the trail is closed.
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Accordion.Toggle
							as={Card.Header}
							variant="link"
							eventKey="3"
							className="help-header"
						>
							How do I updated a specific trail's condition?
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="3">
							<Card.Body>
								Just click on the current trail condition and click on the new
								condition in the dropdown menu.
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Accordion.Toggle
							as={Card.Header}
							variant="link"
							eventKey="4"
							className="help-header"
						>
							How do I copy a trail's address?
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="4">
							<Card.Body>
								Just click on the trail marker and click on the address. TADA!
								It's now copied to your clipboard and ready to be pasted into
								your google maps!
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Accordion.Toggle
							as={Card.Header}
							variant="link"
							eventKey="5"
							className="help-header"
						>
							What does the wheel icon do?
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="5">
							<Card.Body>
								The wheel icon brings you back to your current location. You
								would typically use this if you moved the map to a different
								location and wanted to return the map back to your current
								location.
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Accordion.Toggle
							as={Card.Header}
							variant="link"
							eventKey="6"
							className="help-header"
						>
							Why is the wheel icon not working?
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="6">
							<Card.Body>
								The wheel icon uses your devices geolocation tracking service to
								get your current location. You must allow permissions to use
								your location and have location services on if you're on mobile.
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Accordion.Toggle
							as={Card.Header}
							variant="link"
							eventKey="7"
							className="help-header"
						>
							How do I download the app to my mobile device?
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="7">
							<Card.Body>{/* <img src={require('')} /> */}</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Accordion.Toggle
							as={Card.Header}
							variant="link"
							eventKey="8"
							className="help-header"
						>
							Why is the data not being updated on my mobile app?
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="8">
							<Card.Body>
								You must either refresh the page or close the app and reopen it
								if you have downloaded it as an app to your mobile device.
							</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
			</div>
		</div>
	);
}

export default HelpPage;
