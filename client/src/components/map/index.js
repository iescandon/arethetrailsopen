import React from 'react';
import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const SimpleMap = ({ centerPoint }) => {
	return (
		// Important! Always set the container height explicitly
		<div style={{ height: '80vh', width: '100%' }}>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: process.env.REACT_APP_GOOGLE_API_KEY,
				}}
				// defaultCenter={centerPoint}
				center={centerPoint}
				defaultZoom={11}
			>
				{/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
			</GoogleMapReact>
		</div>
	);
};

export default SimpleMap;
