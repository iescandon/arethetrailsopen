// import React from 'react';
// import GoogleMapReact from 'google-map-react';
// import Marker from '../marker';

// // const AnyReactComponent = ({ text }) => <div>{text}</div>;

// const SimpleMap = ({ centerPoint, selectedTrail }) => {
// 	return (
// 		// Important! Always set the container height explicitly
// 		<div className="mt-3" style={{ height: '100vh', width: '100%' }}>
// 			<GoogleMapReact
// 				bootstrapURLKeys={{
// 					key: process.env.REACT_APP_GOOGLE_API_KEY,
// 				}}
// 				// defaultCenter={centerPoint}
// 				center={ centerPoint, selectedTrail }
// 				defaultZoom={10}
// 			>
// 				{/* <AnyReactComponent lat={29.68527} lng={-95.38128} text="Home" /> */}
// 				<Marker
// 					lat={29.56977}
// 					lng={-95.66475}
// 					name={selectedTrail}
// 					color="blue"
// 				/>
// 			</GoogleMapReact>
// 		</div>
// 	);
// };

// export default SimpleMap;

import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
	width: '50vw',
	height: '100%',
	paddingLeft: '0px',
};

function MapComponent({ centerPoint, selectedTrail, trails, selectTrail }) {
	// const [map, setMap] = React.useState(null);

	// const onLoad = React.useCallback(function callback(map) {
	// 	const bounds = new window.google.maps.LatLngBounds();
	// 	map.fitBounds(bounds);
	// 	setMap(map);
	// }, []);

	// const onUnmount = React.useCallback(function callback(map) {
	// 	setMap(null);
	// }, []);

	return (
		<LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={centerPoint}
				zoom={10}
				// onLoad={onLoad}
				// onUnmount={onUnmount}
			>
				{/* Child components, such as markers, info windows, etc. */}

				{trails.map((marker) => (
					<Marker
						title={marker.name}
						key={`${marker.lat}-${marker.lng}`}
						position={{ lat: marker.lat, lng: marker.lng }}
						onClick={() => selectTrail(marker)}
						// icon={{
						// 	url: `/bike-zone-signal.svg`,
						// 	origin: new window.google.maps.Point(0, 0),
						// 	anchor: new window.google.maps.Point(15, 15),
						// 	scaledSize: new window.google.maps.Size(30, 30),
						// }}
						options={{
							icon: require('./bike-zone-signal.svg'),
							// origin: new window.google.maps.Point(0, 0),
							// anchor: new window.google.maps.Point(15, 15),
							// scaledSize: new window.google.maps.Size(30, 30),
						}}
					/>
				))}
			</GoogleMap>
		</LoadScript>
	);
}

export default React.memo(MapComponent);
