import React from 'react';

function Table() {
	return (
		<table className="table table-striped mt-3">
			<thead>
				<tr>
					<th scope="col">Trail</th>
					<th scope="col">Condition</th>
					<th scope="col">Last Updated</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Tower Run</td>
					<td>Dry</td>
					<td>11:25pm 9/17/2020</td>
				</tr>
				<tr>
					<td>Tower Run 2</td>
					<td>Dry</td>
					<td>11:28pm 9/17/2020</td>
				</tr>
				<tr>
					<td>Lungbuster</td>
					<td>Dry</td>
					<td>11:30pm 9/17/2020</td>
				</tr>
			</tbody>
		</table>
	);
}

export default Table;
