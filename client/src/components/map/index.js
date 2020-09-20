import React, { useState } from 'react';
import './style.css';
import useOnclickOutside from 'react-cool-onclickoutside';
// import mapStyles from './mapStyles';

import {
	GoogleMap,
	useLoadScript,
	Marker,
	InfoWindow,
} from '@react-google-maps/api';

// import { formatRelative } from 'date-fns';

const containerStyle = {
	width: '50vw',
	height: '80vh',
};

const mapOptions = {
	// styles: mapStyles,
	disableDefaultUI: true,
	zoomControl: true,
};

function MapComponent({ centerPoint, trails, selectTrail }) {
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
	return (
		// <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={centerPoint}
			zoom={10}
			options={mapOptions}
		>
			{trails.map((marker) => (
				<div key={`${marker.lat}-${marker.lng}`}>
					<Marker
						title={marker.name}
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
		</GoogleMap>
		// </LoadScript>
	);
}

export default React.memo(MapComponent);
