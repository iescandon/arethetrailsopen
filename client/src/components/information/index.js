import React from 'react';
// import Switch from 'react-switch';
import Toggle from '../toggle';
import Table from '../table';
import ListView from '../listview';
import './style.css';

function Information({
	trails,
	selectedTrail,
	updateTrailStatus,
	updateTrailCondition,
	updateCurrentDate,
	results,
}) {
	if (!selectedTrail.name) {
		return (
			// <div className="container col my-auto">
			<div className="col-lg-6 col-md-12 px-0 mt-3" ref={results}>
				<div className="col-6 offset-3 text-center selectedTrail">
					Trails Near You!
				</div>
				{/* <div className="message text-center mt-3">Find a trail near you!</div>
				<div className="text-center mt-3">
					<p>Type in your city/state or zip code in the search bar.</p>
				</div>
				<div className="text-center mt-3">
					<p>Or just click on one of the markers on the map!</p>
				</div> */}
				<ListView trails={trails} updateCurrentDate={updateCurrentDate} />
			</div>
		);
	}

	return (
		<div className="col-lg-6 col-md-12" ref={results}>
			<div className="mt-3 row justify-content-center selectedTrail">
				<div className="col-6 offset-3 text-center">{selectedTrail.name}</div>
				<div className="col-3 my-auto">
					{/* <label className="mr-3"> */}
					{/* <Switch
							onChange={updateTrailStatus}
							checked={selectedTrail.open}
							offColor="#e61d1d"
						/> */}
					<Toggle
						selectedTrail={selectedTrail}
						updateTrailStatus={updateTrailStatus}
					/>
					{/* </label> */}
				</div>
			</div>
			<div className="row">
				<Table
					selectedTrail={selectedTrail}
					updateTrailCondition={updateTrailCondition}
					updateCurrentDate={updateCurrentDate}
				/>
			</div>
		</div>
	);
}

export default Information;
