import React, { useState, useEffect } from 'react';
import Map from '../../components/map';
import Jumbotron from '../../components/jumbotron';
import Information from '../../components/information';
import Geocode from 'react-geocode';
import API from '../../utils/API';
import Locate from '../../components/locate';
import './style.css';
// import Footer from '../../components/footer';

function Home() {
	const [trails, setTrails] = useState([]);
	const [search, setSearch] = useState('');
	const [selectedTrail, setSelectedTrail] = useState({
		trails: [],
	});
	const [centerPoint, setCenterPoint] = useState({
		lat: 29.749907,
		lng: -95.358421,
	});
	const [userLocation, setUserLocation] = useState({});

	const getUserLocation = () => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				setCenterPoint({
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				});
				setUserLocation({
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				});
			},
			() => null
		);
	};

	const mapRef = React.useRef();
	const onMapLoad = React.useCallback((map) => {
		mapRef.current = map;
	}, []);

	const panTo = React.useCallback(({ lat, lng }) => {
		mapRef.current.panTo({ lat, lng });
		mapRef.current.setZoom(10);
	}, []);

	useEffect(() => {
		getTrails();
		getUserLocation();
	}, []);

	const getTrails = () => {
		API.search().then((res) => {
			setTrails(res.data);
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
		setSearch('');
	};

	const updateTrailCondition = (id, event) => {
		const condition = event.target.getAttribute('data-condition');
		API.updateCondition(id, condition, selectedTrail._id).then((res) => {
			console.log(res);
			// setTrails(res);
		});
		// getTrails();
	};

	const updateTrailStatus = () => {
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
						<Locate panTo={panTo} userLocation={userLocation} />
						<Map
							centerPoint={centerPoint}
							trails={trails}
							selectedTrail={selectedTrail}
							selectTrail={selectTrail}
							onMapLoad={onMapLoad}
						/>
						{/* <Footer /> */}
					</div>
					<div className="col">
						<Information
							selectedTrail={selectedTrail}
							updateTrailStatus={updateTrailStatus}
							updateTrailCondition={updateTrailCondition}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
