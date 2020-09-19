import React from 'react';

function Table({ selectedTrail }) {
	return (
		<table className="table table-striped mt-3">
			<thead>
				<tr>
					<th scope="col">Trail</th>
					<th scope="col">Condition</th>
					<th scope="col">Last Updated</th>
					<th scope="col">Make a Change</th>
				</tr>
			</thead>
			<tbody>
				{selectedTrail.trails.map((trail) => {
					return (
						<tr key={trail._id}>
							<td>{trail.name}</td>
							<td>{trail.condition}</td>
							<td>{trail.lastUpdated}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

export default Table;
