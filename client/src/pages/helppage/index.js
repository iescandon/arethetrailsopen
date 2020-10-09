import React, { useState, useEffect } from 'react';
import './style.css';
import { Card, Accordion } from 'react-bootstrap';
import Google from '../../assets/google.png';
import IOS from '../../assets/ios.png';
import Trailforks from '../../assets/trailforks.png';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import MobileNav from '../../components/mobileNavbar';

function HelpPage() {
	const [pageState, setPageState] = useState('');

	useEffect(() => {
		setPageState('other');
	}, []);

	return (
		<div>
			<Navbar pageState={pageState} />
			<MobileNav pageState={pageState} />
			{/* <Jumbotron pageState={pageState} /> */}
			<div className="container padbtm">
				<div className="text-center header mt-3 hideWhenMobile">Help</div>
				<Accordion className="mt-4">
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
							eventKey="1"
							className="help-header"
						>
							How can I search for trails nearby?
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="1">
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
							eventKey="2"
							className="help-header"
						>
							Why are no trails showing up near me on my map?
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="2">
							<Card.Body>
								The developer is manually entering each trail into the database.
								So if nothing is showing up, odds are that she hasn't added any
								trails for your area yet. If you would like to request for
								trails to be added for a specific area, please contact her using
								the contact page or through email (also located on the contact
								page).
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
							Why are some trail markers on the map red and others are green?
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="3">
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
							eventKey="4"
							className="help-header"
						>
							Can anyone update trail status or condition?
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="4">
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
							eventKey="5"
							className="help-header"
						>
							How do I open or close a trail?
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="5">
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
							eventKey="6"
							className="help-header"
						>
							How do I updated a specific trail's condition?
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="6">
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
							eventKey="7"
							className="help-header"
						>
							How do I know which specific trail I am currently on?
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="7">
							<Card.Body>
								I would recommend downloading Trailforks and using their
								geolocation tool to find your current location on their map. The
								trails listed on "Are the trails open?" are named the same way
								as they are shown in Trailforks.
								<div className="row">
									<a
										href={Trailforks}
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											className="trailforks"
											src={require('../../assets/trailforks.png')}
											alt="find current trail instructions"
										/>
									</a>
								</div>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Accordion.Toggle
							as={Card.Header}
							variant="link"
							eventKey="8"
							className="help-header"
						>
							Why is the data not being updated?
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="8">
							<Card.Body>
								You must either refresh the page or close/reopen the app to get
								the most updated data. Try pulling down to refresh! Works on
								both computers and mobile devices.
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
							How do I copy a trail's address?
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="9">
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
							eventKey="10"
							className="help-header"
						>
							What does the wheel icon do?
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="10">
							<Card.Body>
								The wheel icon uses your devices geolocation tracking service to
								get your current location. When you click the icon, it renders
								the map in your current location.
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Accordion.Toggle
							as={Card.Header}
							variant="link"
							eventKey="11"
							className="help-header"
						>
							Why is the wheel icon not working?
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="11">
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
							eventKey="12"
							className="help-header"
						>
							How do I download the app to my mobile device?
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="12">
							<Card.Body>
								<div className="row">
									<div className="col-lg-6 col-md-12 text-center">
										<p>IOS</p>
										<a href={IOS} target="_blank" rel="noopener noreferrer">
											<img
												className="ios"
												src={require('../../assets/ios.png')}
												alt="ios download instructions"
											/>
										</a>
									</div>
									<div className="col-lg-6 col-md-12 text-center googlediv">
										<p>Google/Android</p>
										<a href={Google} target="_blank" rel="noopener noreferrer">
											<img
												className="google"
												src={require('../../assets/google.png')}
												alt="google/android download instructions"
											/>
										</a>
									</div>
								</div>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
			</div>
			<Footer />
		</div>
	);
}

export default HelpPage;
