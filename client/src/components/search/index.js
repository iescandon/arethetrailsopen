import React from 'react';
import './style.css';
// import usePlacesAutocomplete, {
// 	getGeocode,
// 	getLatLng,
// } from 'use-places-autocomplete';

// import {
// 	Combobox,
// 	ComboboxInput,
// 	ComboboxPopover,
// 	ComboboxList,
// 	ComboboxOption,
// } from '@reach/combobox';
// import '@reach/combobox/styles.css';

function Search({ search, handleInputChange, getLatAndLong }) {
	return (
		<form className="justify-content-center form-inline my-2 my-lg-0">
			<input
				className="form-control mr-sm-2"
				type="search"
				placeholder=""
				aria-label="Search"
				onChange={(event) => handleInputChange(event)}
			/>
			<button
				className="btn btn-success my-2 my-sm-0"
				onClick={(event) => getLatAndLong(search, event)}
			>
				<i className="fa fa-search" aria-hidden="true"></i>
			</button>
		</form>
	);
}

export default Search;

// function Search({ panTo }) {
// 	const {
// 		ready,
// 		value,
// 		suggestions: { status, data },
// 		setValue,
// 		clearSuggestions,
// 	} = usePlacesAutocomplete({
// });

// 	const handleInput = (e) => {
// 		setValue(e.target.value);
// 	};

// 	const handleSelect = async (address) => {
// 		setValue(address, false);
// 		clearSuggestions();

// 		try {
// 			const results = await getGeocode({ address });
// 			const { lat, lng } = await getLatLng(results[0]);
// 			panTo({ lat, lng });
// 		} catch (error) {
// 			console.log('😱 Error: ', error);
// 		}
// 	};

// 	return (
// 		<div className="search">
// 			<Combobox onSelect={handleSelect}>
// 				<ComboboxInput
// 					value={value}
// 					onChange={handleInput}
// 					disabled={!ready}
// 					placeholder="Search your location"
// 				/>
// 				<ComboboxPopover>
// 					<ComboboxList>
// 						{status === 'OK' &&
// 							data.map(({ id, description }) => (
// 								<ComboboxOption key={id} value={description} />
// 							))}
// 					</ComboboxList>
// 				</ComboboxPopover>
// 			</Combobox>
// 		</div>
// 	);
// }

// export default Search;
