import React, { useState, useEffect } from 'react';
import Map from '../../components/map';
import Information from '../../components/information';
import Navbar from '../../components/navbar';
import Geocode from 'react-geocode';
import { toast } from 'react-toastify';
import API from '../../utils/API';
import { formatRelative } from 'date-fns';
import './style.css';
import Footer from '../../components/footer';
import MobileNav from '../../components/mobileNavbar';

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
	const [resultsClass, setResultsClass] = useState('');
	const [selectedClass, setSelectedClass] = useState('hideWhenMobile');
	const [pageState, setPageState] = useState('results');
	const [filter, setFilter] = useState(false);
	const [viewChoice, setViewChoice] = useState('map');
	const [mapClass, setMapClass] = useState('hide');
	const [listClass, setListClass] = useState('');

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
	}, []);

	useEffect(() => {
		if (selectedTrail.name) {
			console.log('selected a trail');
			console.log(selectedTrail);
			setResultsClass('hideWhenMobile');
			setSelectedClass('');
			setPageState('selection');
			window.scrollTo(0, 0);
		} else {
			console.log('no trail selected');
			console.log(selectedTrail);
			setResultsClass('');
			setSelectedClass('hideWhenMobile');
			setPageState('results');
			window.scrollTo(0, 0);
		}
	}, [selectedTrail.name]);

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

	const handleRefresh = () => {
		window.location.reload(false);
	};

	const filterTrails = () => {
		console.log('filter');
		if (filter === false) {
			const filter = trails.filter((trail) => trail.open == 'true');
			console.log(filter);
			setTrails(filter);
			setFilter(true);
		} else {
			console.log('clear filter');
			getTrails();
			setFilter(false);
		}
	};

	const changeView = ({ target }) => {
		const view = target.getAttribute('data-name');
		console.log(this);
		if (view === 'list') {
			console.log('change to list');
			setViewChoice('list');
			setMapClass('');
			setListClass('hide');
		} else {
			console.log('change to map');
			setViewChoice('map');
			setListClass('');
			setMapClass('hide');
		}
	};

	return (
		<div>
			<div>
				<Navbar
					pageState={pageState}
					clearSelectedTrail={clearSelectedTrail}
					mapClass={mapClass}
					clearSelectedTrail={clearSelectedTrail}
					changeView={changeView}
					listClass={listClass}
					filterTrails={filterTrails}
					handleRefresh={handleRefresh}
					resetCenterPoint={resetCenterPoint}
					search={search}
					getLatAndLong={getLatAndLong}
					handleInputChange={handleInputChange}
					userLocation={userLocation}
				/>
				<MobileNav
					mapClass={mapClass}
					changeView={changeView}
					listClass={listClass}
					filterTrails={filterTrails}
					handleRefresh={handleRefresh}
					resetCenterPoint={resetCenterPoint}
					search={search}
					getLatAndLong={getLatAndLong}
					handleInputChange={handleInputChange}
					userLocation={userLocation}
					pageState={pageState}
					clearSelectedTrail={clearSelectedTrail}
				/>
				<div className="container-fluid">
					<div className="row">
						<Map
							centerPoint={centerPoint}
							trails={trails}
							selectTrail={selectTrail}
							onMapLoad={onMapLoad}
							userLocation={userLocation}
							// scrollToResults={scrollToResults}
							resetCenterPoint={resetCenterPoint}
							search={search}
							handleInputChange={handleInputChange}
							getLatAndLong={getLatAndLong}
							// clearSelectedTrail={clearSelectedTrail}
							handleRefresh={handleRefresh}
							updateCurrentDate={updateCurrentDate}
							// changePageView={changePageView}
							resultsClass={resultsClass}
							filterTrails={filterTrails}
							changeView={changeView}
							mapClass={mapClass}
							listClass={listClass}
							viewChoice={viewChoice}
						/>
						<Information
							trails={trails}
							selectedTrail={selectedTrail}
							updateTrailStatus={updateTrailStatus}
							updateTrailCondition={updateTrailCondition}
							results={results}
							updateCurrentDate={updateCurrentDate}
							clearSelectedTrail={clearSelectedTrail}
							selectedClass={selectedClass}
						/>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default Home;
