import React from 'react';
import Switch from 'react-switch';
import Table from '../table';
// import { ToastContainer } from 'react-toastify';
import './style.css';

function Information({
	selectedTrail,
	updateTrailStatus,
	updateTrailCondition,
	results,
}) {
	if (!selectedTrail.name) {
		return (
			<div className="container col my-auto">
				<div className="message text-center mt-3">Find a trail near you!</div>
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
		<div className="col-lg-6 col-md-12" ref={results}>
			<div className="mt-3 row justify-content-center selectedTrail">
				<div className="col-6 offset-3 text-center">{selectedTrail.name}</div>
				<div className="col-3">
					<label className="mr-3">
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
			{/* <ToastContainer
				position="bottom-left"
				autoClose={2000}
				hideProgressBar={true}
				pauseOnHover={false}
				closeOnClick={true}
			/> */}
		</div>
	);
}

export default Information;
