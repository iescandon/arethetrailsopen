import React, { useEffect } from 'react';
import { Button, InputGroup } from 'react-bootstrap';
// import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import './style.css';

function MapBtns({
	userLocation,
	resetCenterPoint,
	handleRefresh,
	changeView,
	mapClass,
	listClass,
}) {
	// const [mapDisplay, setMapDisplay] = useEffect('');
	// const [listDisplay, setListDisplay] = useEffect('');

	return (
		<div>
			<div
				className="btn-group btn-group-toggle rightbtns"
				data-toggle="buttons"
			>
				<Button variant="btn" className="pr-0">
					<img src={require('../../assets/filter.svg')} alt="filter button" />
				</Button>
				<Button variant="btn" className="pr-0">
					<img
						src={require('../../assets/refresh.svg')}
						alt="refresh button"
						onClick={handleRefresh}
					/>
				</Button>
				<Button
					variant="btn"
					className="pr-0"
					onClick={() => resetCenterPoint(userLocation)}
				>
					<img src={require('../../assets/locate.svg')} alt="locate button" />
				</Button>
			</div>
			<div
				className="btn-group btn-group-toggle leftbtns"
				data-toggle="buttons"
			>
				<InputGroup>
					<Button
						variant="btn"
						className={`pl-0 ${mapClass}`}
						// className="pl-0"
						onClick={(event) => changeView(event)}
					>
						<img
							src={require('../../assets/mapview.svg')}
							alt="map view"
							data-name="map"
						/>
					</Button>
					<Button
						variant="btn"
						className={`pl-0 ${listClass}`}
						// className="pl-0"
						onClick={(event) => changeView(event)}
					>
						<img
							src={require('../../assets/listview.svg')}
							alt="list view"
							data-name="list"
						/>
					</Button>
				</InputGroup>
			</div>
		</div>
	);
}

export default MapBtns;
