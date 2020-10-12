import React, { useState } from 'react';
import './style.css';
import MultiToggle from 'react-multi-toggle';

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

	return (
		<MultiToggle
			options={groupOptions}
			selectedOption={selectedTrail.open}
			onSelectOption={onToggle}
			className="togglesize"
		/>
	);
}

export default Toggle;
