import React from 'react';
import Switch from 'react-switch';
import Table from '../table';
import './style.css';

function Information({
	selectedTrail,
	updateTrailStatus,
	updateTrailCondition,
}) {
	if (!selectedTrail) {
		return (
			<div className="message text-center mt-5">
				Search for a trail near you!
			</div>
		);
	}

	return (
		<div>
			<div className="mt-3 row justify-content-center selectedTrail">
				<div className="col-8 offset-md-2 text-center">
					{selectedTrail.name}
				</div>
				<div className="col-2">
					<label>
						<Switch
							onChange={updateTrailStatus}
							checked={selectedTrail.open}
							offColor="#e61d1d"
						/>
					</label>
				</div>
			</div>
			<div className="row">
				<Table
					selectedTrail={selectedTrail}
					updateTrailCondition={updateTrailCondition}
				/>
			</div>
		</div>
	);
}

export default Information;
