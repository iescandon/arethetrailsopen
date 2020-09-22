import React from 'react';
import Search from '../search';
import NavTabs from '../navtabs';
import './style.css';

function Jumbotron({ search, handleInputChange, getLatAndLong, pageState }) {
	return (
		<div className="jumbotron jumbotron-fluid mb-0">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-12 text-center">
						<div className="row justify-content-center">
							<h1 className="display-4">Are the trails open?</h1>
						</div>
						<div className="row justify-content-center">
							<NavTabs />
						</div>
					</div>
					<div className="col-lg-6 col-md-12 search-row my-auto">
						{pageState === 'home' ? (
							<Search
								search={search}
								handleInputChange={handleInputChange}
								getLatAndLong={getLatAndLong}
							/>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Jumbotron;
