import React, { useState } from 'react';
import TrailData from '../traildata';
import Instructions from '../instructions';
import Contact from '../contact';
import About from '../about';
import { ButtonGroup, Button } from 'react-bootstrap';

function Information({
	selectedTrail,
	updateTrailStatus,
	updateTrailCondition,
}) {
	const [pageState, setPageState] = useState('Instructions');

	return (
		<div>
			{!selectedTrail.name ? (
				<div>
					<div className="row mt-3 justify-content-center">
						<ButtonGroup aria-label="Basic example">
							<Button
								variant="outline-dark"
								onClick={() => {
									setPageState('About');
								}}
							>
								About
							</Button>
							<Button
								variant="outline-dark"
								onClick={() => {
									setPageState('Instructions');
								}}
							>
								Instructions
							</Button>
							<Button
								variant="outline-dark"
								onClick={() => {
									setPageState('Contact');
								}}
							>
								Contact
							</Button>
						</ButtonGroup>
					</div>
					{pageState === 'Instructions' ? <Instructions /> : null}
					{pageState === 'Contact' ? <Contact /> : null}
					{pageState === 'About' ? <About /> : null}
				</div>
			) : null}
			<div>
				<TrailData
					selectedTrail={selectedTrail}
					updateTrailStatus={updateTrailStatus}
					updateTrailCondition={updateTrailCondition}
				/>
			</div>
		</div>
	);
}

export default Information;
