import React from 'react';
// import Switch from 'react-switch';
import Toggle from '../toggle';
import TrailsTable from '../trailstable';
import { Card, Button } from 'react-bootstrap';
// import ListView from '../listview';
import './style.css';

function Information({
	trails,
	selectedTrail,
	updateTrailStatus,
	updateTrailCondition,
	updateCurrentDate,
	results,
	clearSelectedTrail,
	selectedClass,
}) {
	if (!selectedTrail.name) {
		return (
			<div className={`container col my-auto mt-5 ${selectedClass}`}>
				<div className="message text-center mt-3">Are the trails open?</div>
				<div className="text-center mt-3">
					<p>Type in your city/state or zip code in the search bar.</p>
				</div>
				<div className="text-center mt-3">
					<p>Or just click on one of the markers on the map!</p>
				</div>
			</div>
		);
	}

	return (
		<div
			className={`col-lg-6 col-md-12 infoDiv ${selectedClass}`}
			ref={results}
		>
			<div className="row px-3 mt-4 selectedTrail justify-content-center">
				<div className="col-1">
					<p onClick={clearSelectedTrail}>
						<i
							class="fa fa-arrow-circle-left circle-back"
							aria-hidden="true"
						></i>
					</p>
				</div>
				<div className="col-10 px-3 text-center">{selectedTrail.name}</div>
				<div className="col-1"></div>
			</div>
			<div className="row pl-4 mt-3">
				<div className="col-4 my-auto justify-content-center">
					<Toggle
						selectedTrail={selectedTrail}
						updateTrailStatus={updateTrailStatus}
					/>
				</div>
				<div className="col-4 my-auto text-center address">
					{selectedTrail.address}
				</div>
				<div className="col-4 my-auto text-center coordinate">
					Trailhead coordinate
				</div>
			</div>
			<div className="row px-2 mt-3 text-center">
				<div className="col">
					<img
						src={require('../../assets/weather.jpg')}
						alt="weather placeholder"
						className="weatherimg"
					/>
				</div>
			</div>
			<div className="row mt-3">
				<TrailsTable
					selectedTrail={selectedTrail}
					updateTrailCondition={updateTrailCondition}
					updateCurrentDate={updateCurrentDate}
				/>
			</div>
		</div>
	);
}

export default Information;
