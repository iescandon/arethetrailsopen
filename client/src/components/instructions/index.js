import React from 'react';
import './style.css';

function Instructions() {
	return (
		<div>
			<div className="message text-center mt-3">Find a trail near you!</div>
			<div className="text-center mt-3">
				<p>Type in your zip code, city/state, or address in the search bar.</p>
				{/* <img src={require('./search-bar.gif')} alt="search bar gif" /> */}
			</div>
			<div className="text-center mt-3">
				<p>Or just click on one of the markers on the map!</p>
				{/* <img src={require('./marker-click.gif')} alt="marker click gif" /> */}
			</div>
		</div>
	);
}

export default Instructions;
