import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../marker/marker.tsx';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const SimpleMap = ({ centerPoint, selectedTrail }) => {
	return (
		// Important! Always set the container height explicitly
		<div className="mb-4" style={{ height: '65vh', width: '100%' }}>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: process.env.REACT_APP_GOOGLE_API_KEY,
				}}
				// defaultCenter={centerPoint}
				center={centerPoint}
				defaultZoom={11}
			>
				{/* <AnyReactComponent lat={29.68527} lng={-95.38128} text="Home" /> */}
				<Marker
					lat={29.68527}
					lng={-95.38128}
					name={selectedTrail}
					color="#007bff"
				/>
			</GoogleMapReact>
		</div>
	);
};

export default SimpleMap;
