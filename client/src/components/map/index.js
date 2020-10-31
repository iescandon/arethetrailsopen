import React, { useState } from 'react';
import './style.css';
import useOnclickOutside from 'react-cool-onclickoutside';
import 'react-toastify/dist/ReactToastify.css';
import MapBtns from '../mapbtns';
import MapSearch from '../mapSearch';
import ListView from '../listview';
// import { OverlayTrigger, Tooltip, InputGroup, Button } from 'react-bootstrap';

import {
	GoogleMap,
	useLoadScript,
	Marker,
	InfoWindow,
	// OverlayView,
} from '@react-google-maps/api';

const containerStyle = {
	width: '100%',
	height: '84vh',
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
	resetCenterPoint,
	search,
	handleInputChange,
	getLatAndLong,
	handleRefresh,
	updateCurrentDate,
	resultsClass,
	filterTrails,
	changeView,
	mapClass,
	listClass,
	viewChoice,
	zoom,
	onZoomChanged,
	onCenterChanged,
	currentZoom,
	currentCenter,
}) {
	const [selectedMarker, setSelectedMarker] = useState({});
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

	function handleZoomChanged() {
		onZoomChanged(this.getZoom()); //current zoom
	}

	function handleCenterChanged() {
		onCenterChanged(this.getCenter().toJSON());
	}

	return (
		<div className={`col-lg-6 col-md-12 px-0 ${resultsClass}`}>
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
				filterTrails={filterTrails}
			/>
			{viewChoice === 'map' ? (
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={centerPoint}
					zoom={zoom}
					onZoomChanged={handleZoomChanged}
					onLoad={onMapLoad}
					options={mapOptions}
					onCenterChanged={handleCenterChanged}
				>
					<Marker
						position={{ lat: userLocation.lat, lng: userLocation.lng }}
						options={{
							icon: require(`../../assets/userLocation.svg`),
						}}
						animation={2}
						// labelAnchor={{ lat: userLocation.lat, lng: userLocation.lng }}
					/>
					{trails.map((marker) => {
						return (
							<div key={`${marker.lat}-${marker.lng}`}>
								<Marker
									key={`${marker.lat}-${marker.lng}`}
									position={{ lat: marker.lat, lng: marker.lng }}
									onClick={() => {
										setSelectedMarker(marker);
										// selectTrail(marker);
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
								{/* <OverlayView
									key="mwl"
									position={{ lat: marker.lat, lng: marker.lng }}
									mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
									getPixelPositionOffset={(x, y) =>
										getPixelPositionOffset(x, y, { x: -30, y: -15 })
									}
								>
									<div
										style={{
											background: `#203254`,
											padding: `7px 12px`,
											fontSize: '11px',
											color: `white`,
											borderRadius: '4px',
										}}
									>
										{marker.name}
									</div>
								</OverlayView> */}
								{/* <InfoWindow
									pixelOffset={'10'}
									marker={marker}
									visible={true}
									position={{ lat: marker.lat, lng: marker.lng }}
								>
									<div>
										<h1>{marker.name}</h1>
									</div>
								</InfoWindow> */}
								{selectedMarker === marker ? (
									<InfoWindow
										position={{ lat: marker.lat, lng: marker.lng }}
										onCloseClick={() => {
											setSelectedMarker({});
										}}
									>
										<div ref={ref} className="text-center">
											<h6 className="text-center">{marker.name}</h6>
											{/* <CopyToClipboard text={marker.address}>
												<p className="mb-2 address" onClick={notify}>
													{marker.address}
												</p>
											</CopyToClipboard> */}
											<p
												className="viewTrailsLink mb-0"
												onClick={() => {
													selectTrail(marker);
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
				<div className="padbtm">
					<ListView
						trails={trails}
						updateCurrentDate={updateCurrentDate}
						viewChoice={viewChoice}
						selectTrail={selectTrail}
						centerPoint={centerPoint}
						currentZoom={currentZoom}
						currentCenter={currentCenter}
					/>
				</div>
			)}
		</div>
	);
}

export default MapComponent;
