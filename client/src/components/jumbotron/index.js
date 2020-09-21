import React from 'react';
import Search from '../search';
import './style.css';

function Jumbotron({ search, handleInputChange, getLatAndLong, panTo }) {
	return (
		<div className="jumbotron jumbotron-fluid mb-0">
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="display-4">Are the trails open?</h1>
						{/* <p class="lead">
							This is a modified jumbotron that occupies the entire horizontal
							space of its parent.
						</p> */}
					</div>
					<div className="col mt-4">
						<Search
							search={search}
							handleInputChange={handleInputChange}
							getLatAndLong={getLatAndLong}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Jumbotron;
