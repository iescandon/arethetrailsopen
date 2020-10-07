import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './style.css';
import Table from 'react-bootstrap/Table';
// import { formatRelative } from 'date-fns';

function TrailsTable({
	selectedTrail,
	updateTrailCondition,
	updateCurrentDate,
}) {
	const trailConditions = [
		'Unknown',
		'✓ Dry',
		'✓ Hero',
		'- Tacky',
		'✗ Muddy',
		'✗ Wet',
		'✗ Under Construction',
	];

	// const updateCurrentDate = (lastDate) => {
	// 	const lastUpdatedDate = new Date(lastDate);
	// 	const currentDate = Date.now();
	// 	let newDate = formatRelative(lastUpdatedDate, currentDate);
	// 	return newDate;
	// };

	return (
		<Table className="table table-striped mt-3">
			<thead>
				<tr>
					<th scope="col">Trail</th>
					<th scope="col">Status</th>
					<th scope="col">Last Updated</th>
				</tr>
			</thead>
			<tbody>
				{selectedTrail.trails.map((trail) => {
					return (
						<tr key={trail.trailId}>
							<td className="tableTrailName">{trail.name}</td>
							<td className="tableTrailCondition">
								<Dropdown>
									<Dropdown.Toggle
										variant=""
										id="dropdown-basic"
										className={trail.condition}
										// className="btn-outline-secondary"
									>
										{trail.condition}
									</Dropdown.Toggle>
									<Dropdown.Menu>
										{/* <Dropdown.Header>Update the status:</Dropdown.Header> */}
										{trailConditions.map((condition) => {
											return (
												<Dropdown.Item
													key={condition}
													onClick={(event) => {
														updateTrailCondition(trail.trailId, event);
													}}
													data-condition={condition}
												>
													{condition}
												</Dropdown.Item>
											);
										})}
									</Dropdown.Menu>
								</Dropdown>
							</td>
							<td className="tableTrailUpdated">
								{updateCurrentDate(trail.lastUpdated)}
							</td>
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
}

export default TrailsTable;
