import React, { useState, useEffect } from 'react';
import Map from '../../components/map';
import Information from '../../components/information';
import Geocode from 'react-geocode';
import { toast } from 'react-toastify';
import API from '../../utils/API';
import PullToRefresh from 'react-simple-pull-to-refresh';
import Navbar from '../../components/navbar';
import { formatRelative } from 'date-fns';
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

	const resetCenterPoint = (userLocation) => {
		setCenterPoint({
			lat: userLocation.lat,
			lng: userLocation.lng,
		});
	};

	useEffect(() => {
		getTrails();
		getUserLocation();
		setPageState('home');
	}, []);

	const getTrails = () => {
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
				getTrails();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const updateTrailStatus = (value) => {
		if (value === 'false') {
			toast.error(`${selectedTrail.name} is Closed!`, {
				position: 'bottom-left',
				autoClose: 2000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: false,
			});
		}
		if (value === 'true') {
			toast.success(`${selectedTrail.name} is Open!`, {
				position: 'bottom-left',
				autoClose: 2000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: false,
			});
		} else {
			// toast.dark(`${selectedTrail.name}'s Status is Unknown!`, {
			// 	position: 'bottom-left',
			// 	autoClose: 2000,
			// 	hideProgressBar: true,
			// 	closeOnClick: true,
			// 	pauseOnHover: false,
			// });
		}
		API.updateStatus(selectedTrail._id, value)
			.then((res) => {
				getTrails();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const updateCurrentDate = (lastDate) => {
		const lastUpdatedDate = new Date(lastDate);
		const currentDate = Date.now();
		let newDate = formatRelative(lastUpdatedDate, currentDate);
		return newDate;
	};

	const clearSelectedTrail = () => {
		setSelectedTrail({
			trails: [],
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

	const handleRefresh = () => {
		window.location.reload(false);
	};

	return (
		<div>
			<div>
				{/* <PullToRefresh onRefresh={handleRefresh}> */}
				{/* <Jumbotron
					search={search}
					handleInputChange={handleInputChange}
					getLatAndLong={getLatAndLong}
					pageState={pageState}
				/> */}
				<div className="container-fluid">
					<div className="row">
						<Map
							centerPoint={centerPoint}
							trails={trails}
							selectTrail={selectTrail}
							onMapLoad={onMapLoad}
							userLocation={userLocation}
							scrollToResults={scrollToResults}
							resetCenterPoint={resetCenterPoint}
							search={search}
							handleInputChange={handleInputChange}
							getLatAndLong={getLatAndLong}
							// clearSelectedTrail={clearSelectedTrail}
							handleRefresh={handleRefresh}
							updateCurrentDate={updateCurrentDate}
						/>
						<Information
							trails={trails}
							selectedTrail={selectedTrail}
							updateTrailStatus={updateTrailStatus}
							updateTrailCondition={updateTrailCondition}
							results={results}
							updateCurrentDate={updateCurrentDate}
							clearSelectedTrail={clearSelectedTrail}
						/>
					</div>
				</div>
				{/* </PullToRefresh> */}
			</div>
			<div></div>
		</div>
	);
}

export default Home;
