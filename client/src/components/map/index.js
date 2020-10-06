import React, { useState } from 'react';
import './style.css';
import useOnclickOutside from 'react-cool-onclickoutside';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MapBtns from '../mapbtns';
import MapSearch from '../mapSearch';
import ListView from '../listview';
import { OverlayTrigger, Tooltip, InputGroup, Button } from 'react-bootstrap';

import {
	GoogleMap,
	useLoadScript,
	Marker,
	InfoWindow,
} from '@react-google-maps/api';

const containerStyle = {
	width: '100%',
	height: '86.5vh',
};

const mapOptions = {
	disableDefaultUI: true,
	zoomControl: true,
};

function MapComponent({
	centerPoint,
	trails,
	selectTrail,
	onMapLoad,
	userLocation,
	scrollToResults,
	resetCenterPoint,
	search,
	handleInputChange,
	getLatAndLong,
	clearSelectedTrail,
	handleRefresh,
	updateCurrentDate,
}) {
	const [selectedMarker, setSelectedMarker] = useState({});
	const [viewChoice, setViewChoice] = useState('map');
	const [mapClass, setMapClass] = useState('hide');
	const [listClass, setListClass] = useState('');
	const ref = useOnclickOutside(() => {
		setSelectedMarker({});
	});

	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
	});
	if (loadError) return 'Error';

	if (!isLoaded) {
		return (
			<div className="col-12 my-auto">
				<div className="mt-3 row justify-content-center">
					<p>Loading...</p>
				</div>
			</div>
		);
	}

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
	// const renderTooltip = (props) => (
	// 	<Tooltip id="button-tooltip" {...props}>
	// 		List View
	// 	</Tooltip>
	// );

	const notify = () => toast.dark('Address Copied!');

	return (
		<div className="col-lg-6 col-md-12 px-0">
			<MapSearch
				search={search}
				handleInputChange={handleInputChange}
				getLatAndLong={getLatAndLong}
			/>
			<MapBtns
				userLocation={userLocation}
				resetCenterPoint={resetCenterPoint}
				handleRefresh={handleRefresh}
				changeView={changeView}
				mapClass={mapClass}
				listClass={listClass}
			/>
			{viewChoice === 'map' ? (
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={centerPoint}
					zoom={10}
					onLoad={onMapLoad}
					options={mapOptions}
				>
					<Marker
						position={{ lat: userLocation.lat, lng: userLocation.lng }}
						options={{
							icon: require(`../../assets/userLocation.svg`),
						}}
						animation={2}
					/>
					{trails.map((marker) => {
						return (
							<div key={`${marker.lat}-${marker.lng}`}>
								<Marker
									key={`${marker.lat}-${marker.lng}`}
									position={{ lat: marker.lat, lng: marker.lng }}
									onClick={() => {
										setSelectedMarker(marker);
										selectTrail(marker);
									}}
									options={{
										icon: require(`../../assets/${marker.open}.svg`),
									}}
									animation={2}
									// label={marker.name}
									// labelAnchor={
									// 	new window.google.maps.Point(marker.lat, marker.lng)
									// }
								/>
								{selectedMarker === marker ? (
									<InfoWindow
										position={{ lat: marker.lat, lng: marker.lng }}
										onCloseClick={() => {
											setSelectedMarker({});
										}}
									>
										<div ref={ref} className="text-center">
											<h6 className="text-center">{marker.name}</h6>
											<CopyToClipboard text={marker.address}>
												<p className="mb-2 address" onClick={notify}>
													{marker.address}
												</p>
											</CopyToClipboard>
											<p
												className="viewTrailsLink mb-0"
												onClick={() => {
													// scrollToResults();
													// selectTrail(marker);
												}}
											>
												View Trail Info
											</p>
										</div>
									</InfoWindow>
								) : null}
							</div>
						);
					})}
				</GoogleMap>
			) : (
				<ListView
					trails={trails}
					updateCurrentDate={updateCurrentDate}
					viewChoice={viewChoice}
					selectTrail={selectTrail}
				/>
			)}
		</div>
	);
}

export default MapComponent;
