import React from 'react';
import Search from '../search';
import NavTabs from '../navtabs';
import './style.css';

function Jumbotron({ search, handleInputChange, getLatAndLong, pageState }) {
	return (
		<div className="jumbotron jumbotron-fluid mb-0">
			<div className="container">
				<div className="row">
					<div className="col text-center">
						<h1 className="display-4">Are the trails open?</h1>
						<NavTabs />
					</div>
					<div className="col search-row my-auto">
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
