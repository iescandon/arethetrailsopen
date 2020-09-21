import React, { useState } from 'react';
import './style.css';
// import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import useOnclickOutside from 'react-cool-onclickoutside';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

function MapComponent({ centerPoint, trails, selectTrail, onMapLoad }) {
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

	const notify = () => toast.success('Address Copied!');

	return (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={centerPoint}
			zoom={10}
			onLoad={onMapLoad}
			options={mapOptions}
		>
			{trails.map((marker) => {
				return (
					<div key={`${marker.lat}-${marker.lng}`}>
						{/* <OverlayTrigger
						placement="top"
						delay={{ show: 250, hide: 400 }}
						overlay={renderTooltip}
					> */}
						<Marker
							key={`${marker.lat}-${marker.lng}`}
							position={{ lat: marker.lat, lng: marker.lng }}
							onClick={() => {
								setSelectedMarker(marker);
							}}
							options={{
								icon: require(`./${marker.open}.svg`),
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
									<CopyToClipboard text={marker.address}>
										<p className="mb-2 address" onClick={notify}>
											{marker.address}
										</p>
									</CopyToClipboard>
									<ToastContainer
										position="top-center"
										autoClose={2000}
										hideProgressBar={true}
										pauseOnHover={false}
									/>
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
				);
			})}
		</GoogleMap>
	);
}

export default React.memo(MapComponent);
