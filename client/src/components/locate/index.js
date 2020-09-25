import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import './style.css';

function Locate({ panTo, userLocation, resetCenterPoint }) {
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
			<button
				className="locate btn"
				onClick={() => resetCenterPoint(userLocation)}
			>
				<img src={require('../../assets/wheel.svg')} alt="wheel" />
			</button>
		</OverlayTrigger>
	);
}

export default Locate;
