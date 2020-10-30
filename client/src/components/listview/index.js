import React from 'react';
import Table from 'react-bootstrap/Table';
import { getDistance, isPointWithinRadius } from 'geolib';
import './style.css';

function ListView({
	trails,
	updateCurrentDate,
	selectTrail,
	centerPoint,
	currentZoom,
}) {
	// let trailsArray = trails;

	let radius;
	switch (currentZoom) {
		case 1:
			radius = 591657550.5;
			break;
		case 2:
			radius = 295828775.3;
			break;
		case 3:
			radius = 147914387.6;
			break;
		case 4:
			radius = 73957193.82;
			break;
		case 5:
			radius = 36978596.91;
			break;
		case 6:
			radius = 18489298.45;
			break;
		case 7:
			radius = 9244649.227;
			break;
		case 8:
			radius = 4622324.614;
			break;
		case 9:
			radius = 80467.2;
			break;
		case 10:
			radius = 40233.6;
			break;
		case 11:
			radius = 22530.8;
			break;
		case 12:
			radius = 288895.2884;
			break;
		case 13:
			radius = 144447.6442;
			break;
		case 14:
			radius = 72223.82209;
			break;
		case 15:
			radius = 36111.91104;
			break;
		case 16:
			radius = 18055.95552;
			break;
		case 17:
			radius = 9027.977761;
			break;
		case 18:
			radius = 4513.98888;
			break;
		case 19:
			radius = 2256.99444;
			break;
		case 20:
			radius = 1128.49722;
			break;
	}

	let trailsArray = trails.filter((trail) => {
		return isPointWithinRadius(
			{ latitude: trail.lat, longitude: trail.lng },
			{ latitude: centerPoint.lat, longitude: centerPoint.lng },
			radius
		);
	});

	trailsArray.map((trail) => {
		trail.distance = (
			getDistance(
				{ latitude: trail.lat, longitude: trail.lng },
				{
					latitude: centerPoint.lat,
					longitude: centerPoint.lng,
				}
			) * 0.000621371192
		).toFixed(2);
	});

	trailsArray.sort(function (a, b) {
		return a.distance - b.distance;
	});

	console.log(trailsArray);
	console.log(radius);
	console.log(currentZoom);
	return (
		<Table hover className="table list-view">
			<tbody>
				{trailsArray.map((trail) => {
					let status = '';
					if (trail.open === 'true') {
						status = 'OPEN';
					}
					if (trail.open === 'false') {
						status = 'CLOSED';
					}
					if (trail.open === 'unknown') {
						status = 'UNKNOWN';
					}
					return (
						<tr key={trail.trailId}>
							<td
								className="trailRow"
								onClick={() => {
									selectTrail(trail);
								}}
							>
								<div className="row">
									<div className="col-11">
										<div className="row pl-4" id="listrow">
											<div>
												<span className={`trailStatus ${trail.open}`}>
													{status}
												</span>
												<span className="pl-3 trailUpdated">
													{updateCurrentDate(trail.lastToggled)}
												</span>
											</div>
										</div>
										<div className="row pl-4 trailName" id="listrow">
											{trail.name}
										</div>
										<div className="row pl-4 trailDistance" id="listrow">
											{trail.distance} mi away
										</div>
									</div>
									<div className="col-1 my-auto">
										<i className="fa fa-angle-right" aria-hidden="true"></i>
									</div>
								</div>
							</td>
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
}

export default ListView;
