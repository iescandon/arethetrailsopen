import React, { useState, useEffect } from 'react';
import Map from '../../components/map';
import Jumbotron from '../../components/jumbotron';
import Information from '../../components/information';
import Footer from '../../components/footer';
import Geocode from 'react-geocode';
import { toast } from 'react-toastify';
import API from '../../utils/API';
import './style.css';

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
	const [pageState, setPageState] = useState('');

	const getUserLocation = () => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				// alert(
				// 	`lat: ${position.coords.latitude}, lng: ${position.coords.longitude}`
				// );
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
		setPageState('home');
		// console.log(window.navigator);
		// alert(window.navigator.userAgent);
		// if (
		// 	window.navigator.userAgent.includes('Safari') &&
		// 	window.navigator.userAgent.includes('iPhone')
		// ) {
		// 	alert('safari');
		// }
	}, []);

	const getTrails = () => {
		// console.log('test');
		API.search()
			.then((res) => {
				setTrails(res.data);
				if (selectedTrail.trails.length > 0) {
					const trail = res.data.filter(
						(trail) => selectedTrail._id === trail._id
					);
					setSelectedTrail(trail[0]);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const selectTrail = (trail) => {
		setSelectedTrail(trail);
		// scrollToResults();
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
				// console.log(lat, lng);
			},
			(error) => {
				console.error(error);
			}
		);
		setSearch('');
	};

	const updateTrailCondition = (id, event) => {
		const condition = event.target.getAttribute('data-condition');
		API.updateCondition(id, condition, selectedTrail._id)
			.then((res) => {
				console.log(res);
				getTrails();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const updateTrailStatus = () => {
		if (selectedTrail.open === true) {
			toast.error(`${selectedTrail.name} is Closed!`);
		} else {
			toast.success(`${selectedTrail.name} is Open!`);
		}
		API.updateStatus(selectedTrail._id, !selectedTrail.open)
			.then((res) => {
				console.log(res);
				getTrails();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const results = React.createRef();

	function scrollToResults(event) {
		if (results.current) {
			results.current.scrollIntoView({
				behavior: 'smooth',
				block: 'nearest',
			});
		}
	}

	return (
		<div>
			<Jumbotron
				search={search}
				handleInputChange={handleInputChange}
				getLatAndLong={getLatAndLong}
				pageState={pageState}
			/>
			<div className="container-fluid">
				<div className="row">
					<Map
						centerPoint={centerPoint}
						trails={trails}
						selectedTrail={selectedTrail}
						selectTrail={selectTrail}
						onMapLoad={onMapLoad}
						panTo={panTo}
						userLocation={userLocation}
						selectedTrail={selectedTrail}
						updateTrailStatus={updateTrailStatus}
						updateTrailCondition={updateTrailCondition}
						scrollToResults={scrollToResults}
					/>
					<Information
						selectedTrail={selectedTrail}
						updateTrailStatus={updateTrailStatus}
						updateTrailCondition={updateTrailCondition}
						results={results}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
