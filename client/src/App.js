import React, { useState, useEffect } from 'react';
// import Switch from 'react-switch';
import './App.css';
import Map from './components/map';
import Jumbotron from './components/jumbotron';
// import Table from './components/table';
import Information from './components/information';
import Geocode from 'react-geocode';
import API from './utils/API';

function App() {
	const [trails, setTrails] = useState([]);
	const [search, setSearch] = useState(77054);
	const [selectedTrail, setSelectedTrail] = useState({
		trails: [],
	});

	// const trailStatus = selectedTrail.open;

	const [centerPoint, setCenterPoint] = useState({
		lat: 29.749907,
		lng: -95.358421,
	});

	useEffect(() => {
		getTrails();
	}, []);

	const getTrails = () => {
		API.search().then((res) => {
			setTrails(res.data);
			// setSelectedTrail(res.data[0]);
		});
	};

	const selectTrail = (trail) => {
		setSelectedTrail(trail);
	};

	const handleInputChange = ({ target }) => {
		const { value } = target;
		setSearch(value);
	};

	const getLatAndLong = (search, event) => {
		event.preventDefault();
		Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);
		Geocode.fromAddress(search).then(
			(response) => {
				const { lat, lng } = response.results[0].geometry.location;
				setCenterPoint({
					lat,
					lng,
				});
				console.log(lat, lng);
			},
			(error) => {
				console.error(error);
			}
		);
	};

	const updateTrailCondition = (id, event) => {
		const condition = event.target.getAttribute('data-condition');
		API.updateCondition(id, condition, selectedTrail._id).then((res) => {
			console.log(res);
			// setTrails(res);
		});
	};

	const updateTrailStatus = () => {
		//call api
		console.log('toggle');
		if (selectedTrail.open === true) {
			const newStatus = false;
			API.updateStatus(selectedTrail._id, newStatus).then((res) => {
				console.log(res);
			});
		} else {
			const newStatus = true;
			API.updateStatus(selectedTrail._id, newStatus).then((res) => {
				console.log(res);
			});
		}
		getTrails();
	};

	return (
		<div>
			<Jumbotron
				search={search}
				handleInputChange={handleInputChange}
				getLatAndLong={getLatAndLong}
			/>
			<div className="container-fluid">
				<div className="row">
					<div className="col">
						<Map
							centerPoint={centerPoint}
							trails={trails}
							selectTrail={selectTrail}
						/>
					</div>
					<div className="col">
						<Information
							selectedTrail={selectedTrail}
							updateTrailStatus={updateTrailStatus}
							updateTrailCondition={updateTrailCondition}
						/>
					</div>

					{/* <div className="col">
						<div className="mt-3 row justify-content-center selectedTrail">
							<div className="col offset-md-4 text-center">
								{selectedTrail.name}
							</div>
							<div className="col">
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
					</div> */}
				</div>
			</div>
		</div>
	);
}

export default App;

{
	/* <div className="row justify-content-center">
							<img
								src={require(`./assets/${selectedTrail.open}.png`)}
								alt="open or closed sign"
								className="sign"
							/>
						</div> */
}
