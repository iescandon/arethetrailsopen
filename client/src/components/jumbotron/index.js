import React from 'react';
import Search from '../search';
import './style.css';

function Jumbotron({ search, handleInputChange, getLatAndLong }) {
	return (
		<div className="jumbotron jumbotron-fluid mb-0">
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="display-4">
							<a href="/" className="title">
								Are the trails open?
							</a>
						</h1>
						<ul className="nav-links">
							<li>ABOUT</li>
							<li>HELP</li>
							<li>CONTACT</li>
						</ul>
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
