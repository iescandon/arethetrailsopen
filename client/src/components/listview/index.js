import React from 'react';
import Table from 'react-bootstrap/Table';
import { getDistance } from 'geolib';
import './style.css';

function ListView({ trails, updateCurrentDate, selectTrail, centerPoint }) {
	let trailsArray = trails;

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
