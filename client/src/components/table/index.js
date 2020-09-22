import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './style.css';
// import API from '../../utils/API';
import { formatRelative } from 'date-fns';

function Table({ selectedTrail, updateTrailCondition }) {
	const trailConditions = ['Dry', 'Hero', 'Tacky', 'Muddy', 'Wet'];

	const updateCurrentDate = (lastDate) => {
		const lastUpdatedDate = new Date(lastDate);
		const currentDate = Date.now();
		let newDate = formatRelative(lastUpdatedDate, currentDate);
		console.log(newDate);
		return newDate;
	};

	return (
		<table className="table table-striped mt-3">
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
							<td>{trail.name}</td>
							<td>
								<Dropdown>
									<Dropdown.Toggle
										variant=""
										id="dropdown-basic"
										className={trail.condition}
									>
										{trail.condition}
									</Dropdown.Toggle>
									<Dropdown.Menu>
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
							<td>{updateCurrentDate(trail.lastUpdated)}</td>
							{/* <td>{formatRelative(trail.lastUpdated, new Date())}</td> */}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

export default Table;
