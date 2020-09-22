import React from 'react';
import Switch from 'react-switch';
import Table from '../table';

function Information({
	selectedTrail,
	updateTrailStatus,
	updateTrailCondition,
}) {
	if (!selectedTrail.name) {
		return (
			<div>
				<div className="message text-center mt-3">Find a trail near you!</div>
				<div className="text-center mt-3">
					<p>
						Type in your zip code, city/state, or address in the search bar.
					</p>
				</div>
				<div className="text-center mt-3">
					<p>Or just click on one of the markers on the map!</p>
				</div>
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
