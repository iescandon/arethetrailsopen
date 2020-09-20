import React from 'react';
import { Dropdown } from 'react-bootstrap';
// import API from '../../utils/API';
import './style.css';

function Table({ selectedTrail, updateTrailCondition }) {
	// const updateTrailCondition = (id, event) => {
	// 	const condition = event.target.getAttribute('data-condition');
	// 	API.updateCondition(id, condition).then((res) => {
	// 		console.log(res);
	// 	});

	// };

	const trailConditions = ['Dry', 'Hero', 'Tacky', 'Muddy', 'Wet'];

	return (
		<table className="table table-striped mt-3">
			<thead>
				<tr>
					<th scope="col">Trail</th>
					<th scope="col">Status</th>
					<th scope="col">Last Updated</th>
					{/* <th scope="col">Update Status</th> */}
				</tr>
			</thead>
			<tbody>
				{selectedTrail.trails.map((trail) => {
					return (
						<tr key={trail._id}>
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
													onClick={(event) =>
														updateTrailCondition(trail._id, event)
													}
													data-condition={condition}
												>
													{condition}
												</Dropdown.Item>
											);
										})}
										{/* <Dropdown.Item>Hero</Dropdown.Item>
										<Dropdown.Item>Muddy</Dropdown.Item> */}
									</Dropdown.Menu>
								</Dropdown>
							</td>
							<td>{trail.lastUpdated}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

export default Table;
