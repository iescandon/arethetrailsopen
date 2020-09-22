import React from 'react';
import Search from '../search';
import NavTabs from '../navtabs';
import './style.css';

function Jumbotron({ search, handleInputChange, getLatAndLong }) {
	return (
		<div className="jumbotron jumbotron-fluid mb-0">
			<div className="container">
				<div className="row">
					<div className="col text-center">
						<h1 className="display-4">Are the trails open?</h1>
						{/* <ul className="nav-links">
							<li>HOME</li>
							<li>ABOUT</li>
							<li>HELP</li>
							<li>CONTACT</li>
						</ul> */}
						<NavTabs />
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
