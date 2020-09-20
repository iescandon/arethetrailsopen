import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import './style.css';

function Locate({ panTo, centerPoint }) {
	const renderTooltip = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Go to Current Location
		</Tooltip>
	);

	return (
		<OverlayTrigger
			placement="top"
			delay={{ show: 250, hide: 400 }}
			overlay={renderTooltip}
		>
			<button className="locate btn" onClick={() => panTo(centerPoint)}>
				<img src={require('./wheel.svg')} alt="wheel" />
				{/* Go to Current Location */}
			</button>
		</OverlayTrigger>
	);
}

export default Locate;
