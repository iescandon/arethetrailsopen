import React from 'react';

function Search({ search, handleInputChange, getLatAndLong }) {
	return (
		<form className="justify-content-center form-inline my-2 my-lg-0">
			<input
				className="form-control mr-sm-2"
				type="search"
				placeholder="Search"
				aria-label="Search"
				onChange={(event) => handleInputChange(event)}
			/>
			<button
				className="btn btn-outline-success my-2 my-sm-0"
				onClick={(event) => getLatAndLong(search, event)}
			>
				Search
			</button>
		</form>
	);
}

export default Search;
