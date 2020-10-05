import React from 'react';
import './style.css';

function ListView({ trails, updateCurrentDate }) {
	return (
		<table className="table table-striped mt-3 list-view">
			<thead>
				<tr>
					<th scope="col">Trail System</th>
					<th scope="col">Status</th>
					<th scope="col">Last Updated</th>
				</tr>
			</thead>
			<tbody>
				{trails.map((trail) => {
					let status = '';
					if (trail.open === 'true') {
						status = 'Open';
					}
					if (trail.open === 'false') {
						status = 'Closed';
					}
					if (trail.open === 'unknown') {
						status = 'Unknown';
					}
					return (
						<tr key={trail.trailId}>
							<td>{trail.name}</td>
							<td className={trail.open}>{status}</td>
							{/* <td>{trail.lastToggled}</td> */}
							<td>{updateCurrentDate(trail.lastToggled)}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

export default ListView;
