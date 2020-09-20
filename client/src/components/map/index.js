import React, { useState } from 'react';
import './style.css';
import mapStyles from './mapStyles';
import {
	GoogleMap,
	LoadScript,
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

function MapComponent({ centerPoint, trails, selectTrail }) {
	const [selectedMarker, setSelectedMarker] = useState(null);
	return (
		<LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={centerPoint}
				zoom={10}
				options={mapOptions}
			>
				{/* Child components, such as markers, info windows, etc. */}

				{trails.map((marker) => (
					<div key={`${marker.lat}-${marker.lng}`}>
						<Marker
							title={marker.name}
							key={`${marker.lat}-${marker.lng}`}
							position={{ lat: marker.lat, lng: marker.lng }}
							onClick={() => {
								selectTrail(marker);
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
								<div>
									<h6>{marker.name}</h6>
									<p>{marker.address}</p>
								</div>
							</InfoWindow>
						) : null}
					</div>
				))}
			</GoogleMap>
		</LoadScript>
	);
}

export default React.memo(MapComponent);
