import React from 'react';
import './style.css';
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

function MapComponent({ centerPoint, trails, selectTrail }) {
	return (
		<LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={centerPoint}
				zoom={10}
			>
				{/* Child components, such as markers, info windows, etc. */}

				{trails.map((marker) => (
					<div key={`${marker.lat}-${marker.lng}`}>
						<Marker
							title={marker.name}
							key={`${marker.lat}-${marker.lng}`}
							position={{ lat: marker.lat, lng: marker.lng }}
							onClick={() => selectTrail(marker)}
							options={{
								icon: require(`./${marker.open}.svg`),
								// icon: require(`./blackmarker.svg`),
								// origin: new window.google.maps.Point(0, 0),
								// anchor: new window.google.maps.Point(15, 15),
								// scaledSize: new window.google.maps.Size(30, 30),
							}}
							animation={2}
						/>
						{/* <InfoWindow pixelOffset={'0'}>
							<div>
								<h1>{marker.name}</h1>
							</div>
						</InfoWindow> */}
					</div>
				))}
			</GoogleMap>
		</LoadScript>
	);
}

export default React.memo(MapComponent);
