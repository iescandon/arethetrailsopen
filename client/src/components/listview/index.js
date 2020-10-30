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
			radius = 160934;
			break;
		case 2:
			radius = 160934;
			break;
		case 3:
			radius = 160934;
			break;
		case 4:
			radius = 160934;
			break;
		case 5:
			radius = 160934;
			break;
		case 6:
			radius = 160934;
			break;
		case 7:
			radius = 160934;
			break;
		case 8:
			radius = 160934;
			//100 mi
			break;
		case 9:
			radius = 80467.2;
			//50 mi
			break;
		case 10:
			radius = 51499;
			//32 mi
			break;
		case 11:
			radius = 21806.611;
			//13.55 mi
			break;
		case 12:
			radius = 12070.1;
			//7.5 mi
			break;
		case 13:
			radius = 8046.72;
			//5 mi
			break;
		case 14:
			radius = 8046.72;
			break;
		case 15:
			radius = 8046.72;
			break;
		case 16:
			radius = 8046.72;
			break;
		case 17:
			radius = 8046.72;
			break;
		case 18:
			radius = 8046.72;
			break;
		case 19:
			radius = 8046.72;
			break;
		case 20:
			radius = 8046.72;
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
