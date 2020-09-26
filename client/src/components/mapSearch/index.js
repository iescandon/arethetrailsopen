import React from 'react';
import './style.css';

function MapSearch({ search, handleInputChange, getLatAndLong }) {
	return (
		<form
			onSubmit={(event) => getLatAndLong(search, event)}
			className="justify-content-center form-inline my-2 my-lg-0 mapsearch"
		>
			<input
				className="form-control search-form mr-sm-2"
				value={search}
				type="search"
				aria-label="Search"
				onChange={(event) => handleInputChange(event)}
			/>
		</form>
	);
}

export default MapSearch;
