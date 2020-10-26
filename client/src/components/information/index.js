import React, { useState, useEffect } from 'react';
import Toggle from '../toggle';
import TrailsTable from '../trailstable';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import './style.css';

function Information({
	selectedTrail,
	updateTrailStatus,
	updateTrailCondition,
	updateCurrentDate,
	results,
	selectedClass,
	addTrailComment,
}) {
	const [weather, setWeather] = useState(null);
	const [show, setShow] = useState('hide');
	const notify = () => toast.dark('Address Copied!');
	let status = '';

	if (selectedTrail.open === 'true') {
		status = 'OPEN';
	}
	if (selectedTrail.open === 'false') {
		status = 'CLOSED';
	}
	if (selectedTrail.open === 'unknown') {
		status = 'UNKNOWN';
	}

	useEffect(() => {
		if (selectedTrail.name) {
			fetch(
				`https://api.openweathermap.org/data/2.5/onecall?lat=${selectedTrail.lat}&lon=${selectedTrail.lng}&appid=96e27da4f61bebe5c6e5c7c18c453252`
			)
				.then((response) => response.json())
				.then((json) => {
					setWeather(json);
					console.log(json);
				});
		}
	}, [selectedTrail.name]);

	if (!selectedTrail.name) {
		return (
			<div className={`container col my-auto mt-5 ${selectedClass} padbtm`}>
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
		<div className={`col-lg-6 col-md-12 infoDiv ${selectedClass} padbtm`}>
			<div
				className="row px-3 mt-4 selectedTrail justify-content-center"
				// ref={results}
			>
				<div className="px-3 text-center">{selectedTrail.name}</div>
			</div>
			<div className="row mt-3 justify-content-center">
				<Toggle
					selectedTrail={selectedTrail}
					updateTrailStatus={updateTrailStatus}
				/>
			</div>
			{/* <hr></hr> */}
			<div className="row mt-4 px-3 detailRow">Status</div>
			<div className="row mt-2 px-3">
				<div className="col pl-3">
					<div className={`row trailStatus ${selectedTrail.open}`}>
						{status}
					</div>
					<div className="row trailUpdated">
						Last updated {updateCurrentDate(selectedTrail.lastToggled)}
					</div>
				</div>
				{/* <div className="col">
					<Toggle
						selectedTrail={selectedTrail}
						updateTrailStatus={updateTrailStatus}
					/>
				</div> */}
			</div>
			<hr></hr>
			<div className="row mt-2 px-3 detailRow">Weather</div>
			<div className="row px-3 mt-2 text-center trailUpdated">
				weather goes here
			</div>
			<hr></hr>
			<div className="row mt-2 px-3 detailRow">Parking</div>
			<div className="row mt-2 trailUpdated">
				<CopyToClipboard text={selectedTrail.address}>
					<div className="col my-auto pl-3 address" onClick={notify}>
						{selectedTrail.address}
					</div>
				</CopyToClipboard>
			</div>
			<hr></hr>
			<div className="row mt-2 px-3 detailRow">Trailhead Coordinates</div>
			<div className="row mt-2 pl-3 trailUpdated">numbers</div>
			<hr></hr>
			{selectedTrail.open === 'false' ? (
				<div className="row justify-content-center selectedTrail">
					DON'T RIDE MUDDY TRAILS!
				</div>
			) : (
				<React.Fragment>
					<div
						className="row mt-2 px-3 detailRow conditionRow"
						onClick={() => {
							if (show === 'hide') {
								setShow('show');
							} else {
								setShow('hide');
							}
						}}
					>
						<div className="col">Individual Trail Conditions</div>
						<div className="col my-auto">
							{show === 'show' ? (
								<i className="fa fa-angle-up pull-right"></i>
							) : (
								<i className="fa fa-angle-down pull-right"></i>
							)}
						</div>
					</div>
					<div className={`row ${show}`}>
						<TrailsTable
							selectedTrail={selectedTrail}
							updateTrailCondition={updateTrailCondition}
							updateCurrentDate={updateCurrentDate}
							addTrailComment={addTrailComment}
						/>
					</div>
				</React.Fragment>
			)}
		</div>
	);
}

export default Information;
