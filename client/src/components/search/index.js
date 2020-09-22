import React from 'react';
import './style.css';

function Search({ search, handleInputChange, getLatAndLong }) {
	return (
		<form className="justify-content-center form-inline my-2 my-lg-0">
			<input
				className="form-control search-form mr-sm-2"
				value={search}
				type="search"
				placeholder=""
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

// import React from 'react';
// import usePlacesAutocomplete, {
// 	getGeocode,
// 	getLatLng,
// } from 'use-places-autocomplete';
// import useOnclickOutside from 'react-cool-onclickoutside';

// function Search({ search, getLatAndLong }) {
// 	const {
// 		ready,
// 		value,
// 		suggestions: { status, data },
// 		setValue,
// 		clearSuggestions,
// 	} = usePlacesAutocomplete({
// 		requestOptions: {
// 			/* Define search scope here */
// 		},
// 		debounce: 300,
// 	});
// 	const ref = useOnclickOutside(() => {
// 		// When user clicks outside of the component, we can dismiss
// 		// the searched suggestions by calling this method
// 		clearSuggestions();
// 	});

// 	const handleInput = (e) => {
// 		// Update the keyword of the input element
// 		setValue(e.target.value);
// 	};

// 	const handleSelect = ({ description }) => () => {
// 		// When user selects a place, we can replace the keyword without request data from API
// 		// by setting the second parameter to "false"
// 		setValue(description, false);
// 		clearSuggestions();

// 		// Get latitude and longitude via utility functions
// 		getGeocode({ address: description })
// 			.then((results) => getLatLng(results[0]))
// 			.then(({ lat, lng }) => {
// 				console.log('📍 Coordinates: ', { lat, lng });
// 			})
// 			.catch((error) => {
// 				console.log('😱 Error: ', error);
// 			});
// 	};

// 	const renderSuggestions = () =>
// 		data.map((suggestion) => {
// 			const {
// 				id,
// 				structured_formatting: { main_text, secondary_text },
// 			} = suggestion;

// 			return (
// 				<li key={id} onClick={handleSelect(suggestion)}>
// 					<strong>{main_text}</strong> <small>{secondary_text}</small>
// 				</li>
// 			);
// 		});

// 	return (
// 		<div ref={ref}>
// 			<form className="justify-content-center form-inline my-2 my-lg-0">
// 				<input
// 					value={value}
// 					onChange={handleInput}
// 					disabled={!ready}
// 					placeholder="Where are you going?"
// 				/>
// 				{status === 'OK' && <ul>{renderSuggestions()}</ul>}
// 				<button
// 					className="btn btn-success my-2 my-sm-0"
// 					onClick={(event) => getLatAndLong(search, event)}
// 				>
// 					<i className="fa fa-search" aria-hidden="true"></i>
// 				</button>
// 			</form>
// 		</div>
// 	);
// }

// export default Search;

// import React from 'react';
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

// function Search({ panTo }) {
// 	const {
// 		ready,
// 		value,
// 		suggestions: { status, data },
// 		setValue,
// 		clearSuggestions,
// 	} = usePlacesAutocomplete({
// 		requestOptions: {
// 			location: { lat: () => 43.6532, lng: () => -79.3832 },
// 			radius: 100 * 1000,
// 		},
// 	});

// 	// https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

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
