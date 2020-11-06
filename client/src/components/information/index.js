import React, { useState, useEffect } from 'react';
import Toggle from '../toggle';
import TrailsTable from '../trailstable';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import { fromUnixTime } from 'date-fns';
import { isPointWithinRadius } from 'geolib';
import './style.css';

function Information({
	selectedTrail,
	updateTrailStatus,
	updateTrailCondition,
	updateCurrentDate,
	results,
	selectedClass,
	addTrailComment,
	userLocation,
}) {
	const [weather, setWeather] = useState(null);
	const [show, setShow] = useState('hide');
	const [withinRadius, setWithinRadius] = useState('show');
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
		if (selectedTrail.name) {
			const result = isPointWithinRadius(
				{ latitude: userLocation.lat, longitude: userLocation.lng },
				{ latitude: selectedTrail.lat, longitude: selectedTrail.lng },
				16093.4
			);
			if (result === true) {
				setWithinRadius('show');
			} else {
				setWithinRadius('hide');
			}
			console.log(result);
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

	// console.log(fromUnixTime(1330515905));

	return (
		<div
			className={`col-lg-6 col-md-12 infoDiv justify-content-center${selectedClass} padbtm`}
		>
			<div
				className="row px-3 mt-4 selectedTrail justify-content-center"
				// ref={results}
			>
				<div className="px-3 text-center">{selectedTrail.name}</div>
			</div>
			<div
				className={`row mt-3 mx-auto justify-content-center text-center centerToggle ${withinRadius}`}
			>
				<div className="col mx-auto justify-content-center text-center centerToggle">
					<Toggle
						selectedTrail={selectedTrail}
						updateTrailStatus={updateTrailStatus}
					/>
				</div>
			</div>
			{/* <hr></hr> */}
			<div className="row mt-4 px-3 detailRow">Status</div>
			<div className="row mt-2 px-3">
				<div className="col">
					<div className={`row pl-3 trailStatus2 ${selectedTrail.open}`}>
						{status}
					</div>
					<div className="row pl-3">
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
			<div className="row px-3 mt-2 text-center">
				{weather === null ? (
					<div>Loading...</div>
				) : (
					<div>Coming Soon!</div>
					// <div>{new Date(weather.hourly[0].dt * 1000).toLocaleString()}</div>
					// <div>{fromUnixTime(1330515905)}</div>
					// <div>{fromUnixTime(weather.hourly[0].dt)}</div>
				)}
			</div>
			<hr></hr>
			<div className="row mt-2 px-3 detailRow">Parking</div>
			<div className="row pl-3 mt-2">
				<CopyToClipboard text={selectedTrail.address}>
					<div className="col my-auto address" onClick={notify}>
						<div className="row pl-3">{selectedTrail.address}</div>
					</div>
				</CopyToClipboard>
			</div>
			<hr></hr>
			<div className="row mt-2 px-3 detailRow">Trailhead Coordinates</div>
			<div className="row mt-2 pl-3">{`${selectedTrail.lat}, ${selectedTrail.lng}`}</div>
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
						<div className="col-2 my-auto">
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
							withinRadius={withinRadius}
						/>
					</div>
				</React.Fragment>
			)}
		</div>
	);
}

export default Information;
