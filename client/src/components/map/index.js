import React, { useState } from 'react';
import './style.css';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import useOnclickOutside from 'react-cool-onclickoutside';
// import mapStyles from './mapStyles';

import {
	GoogleMap,
	useLoadScript,
	Marker,
	InfoWindow,
} from '@react-google-maps/api';

const containerStyle = {
	width: '50vw',
	height: '80vh',
};

const mapOptions = {
	// styles: mapStyles,
	disableDefaultUI: true,
	zoomControl: true,
};

function MapComponent({
	centerPoint,
	trails,
	selectTrail,
	onMapLoad,
	userLocation,
}) {
	const [selectedMarker, setSelectedMarker] = useState(null);
	const ref = useOnclickOutside(() => {
		setSelectedMarker(null);
	});
	// const libraries = ['places'];
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
		// libraries,
	});
	if (loadError) return 'Error';
	if (!isLoaded) return 'Loading...';

	// const renderTooltip = (props) => (
	// 	<Tooltip id="button-tooltip" {...props}>
	// 		Click Me!
	// 	</Tooltip>
	// );

	return (
		// <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={centerPoint}
			zoom={10}
			onLoad={onMapLoad}
			options={mapOptions}
		>
			{trails.map((marker) => (
				<div key={`${marker.lat}-${marker.lng}`}>
					{/* <OverlayTrigger
						placement="top"
						delay={{ show: 250, hide: 400 }}
						overlay={renderTooltip}
					> */}
					<Marker
						// title={marker.name}
						key={`${marker.lat}-${marker.lng}`}
						position={{ lat: marker.lat, lng: marker.lng }}
						onClick={() => {
							// selectTrail(marker);
							setSelectedMarker(marker);
						}}
						// onClick={() => {
						// 	setSelectedMarker(marker);
						// }}
						options={{
							icon: require(`./${marker.open}.svg`),
							// icon: require(`./blackmarker.svg`),
							// origin: new window.google.maps.Point(0, 0),
							// anchor: new window.google.maps.Point(15, 15),
							// scaledSize: new window.google.maps.Size(30, 30),
						}}
						animation={2}
					/>
					{/* </OverlayTrigger> */}
					{selectedMarker === marker ? (
						<InfoWindow
							position={{ lat: marker.lat, lng: marker.lng }}
							onCloseClick={() => {
								setSelectedMarker(null);
							}}
						>
							<div ref={ref} className="text-center">
								<h6 className="text-center">{marker.name}</h6>
								<p className="mb-2">{marker.address}</p>
								<a
									className="viewTrailsLink"
									onClick={() => {
										selectTrail(marker);
										setSelectedMarker(null);
									}}
								>
									View Trails
								</a>
							</div>
						</InfoWindow>
					) : null}
				</div>
			))}
			{/* <Marker
				position={{ lat: userLocation.lat, lng: userLocation.lng }}
				animation={2}
				options={{
					icon: require(`./button.svg`),
				}}
			/> */}
		</GoogleMap>
		// </LoadScript>
	);
}

export default React.memo(MapComponent);
