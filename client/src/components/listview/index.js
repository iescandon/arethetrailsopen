import React from 'react';
import Table from 'react-bootstrap/Table';
import './style.css';

function ListView({ trails, updateCurrentDate, selectTrail }) {
	return (
		<Table
			striped
			// bordered
			hover
			// variant="dark"
			className="table list-view"
		>
			<tbody>
				{trails.map((trail) => {
					let status = '';
					if (trail.open === 'true') {
						status = '✓ Open';
					}
					if (trail.open === 'false') {
						status = '✗ Closed';
					}
					if (trail.open === 'unknown') {
						status = 'Unknown';
					}
					return (
						<tr key={trail.trailId}>
							<td
								className="trailRow"
								onClick={() => {
									selectTrail(trail);
									// scrollToResults();
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
											1.1 mi away
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