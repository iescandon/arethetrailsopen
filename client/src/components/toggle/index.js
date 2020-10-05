import React, { useEffect, useState } from 'react';
import './style.css';
import MultiToggle from 'react-multi-toggle';
import { roundToNearestMinutes } from 'date-fns/fp';

// const green = { GreenCheck };

const groupOptions = [
	{
		displayName: '✓',
		value: 'true',
		optionClass: 'checkmark',
	},
	{
		displayName: '?',
		value: 'unknown',
		optionClass: 'questionmark',
	},
	{
		displayName: '✗',
		value: 'false',
		optionClass: 'xmark',
	},
];

function Toggle({ selectedTrail, updateTrailStatus }) {
	const [selectedState, setSelectedState] = useState();

	const onToggle = (value) => {
		setSelectedState(value);
		updateTrailStatus(value);
	};

	// const setSelected = () => {
	// 	// console.log('no selected trails');
	// 	if (selectedTrail.open === true || selectedTrail.open === false) {
	// 		// console.log('selected trails');
	// 		setSelectedState(selectedTrail.open);
	// 	}
	// };

	// useEffect(() => {
	// 	// console.log('hello');
	// 	setSelected();
	// }, []);

	return (
		<MultiToggle
			options={groupOptions}
			selectedOption={selectedTrail.open}
			onSelectOption={onToggle}
			// label="Select Group Size"
		/>
	);
}

export default Toggle;
