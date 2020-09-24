import React from 'react';
import './style.css';

function Search({ search, handleInputChange, getLatAndLong }) {
	return (
		<form className="justify-content-center form-inline my-2 my-lg-0">
			<input
				className="form-control search-form mr-sm-2"
				value={search}
				type="search"
				placeholder="City, State or Zip Code"
				aria-label="Search"
				onChange={(event) => handleInputChange(event)}
			/>
			<button
				className="searchbtn btn btn-success my-2 my-sm-0"
				onClick={(event) => getLatAndLong(search, event)}
			>
				<i className="fa fa-search" aria-hidden="true"></i>
			</button>
		</form>
	);
}

export default Search;
