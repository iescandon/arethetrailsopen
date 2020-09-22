import React, { useState, useEffect } from 'react';
import Jumbotron from '../../components/jumbotron';

function HelpPage() {
	const [pageState, setPageState] = useState('');

	useEffect(() => {
		setPageState('help');
	}, []);

	return (
		<div>
			<Jumbotron pageState={pageState} />
			<h1>Help Page</h1>
		</div>
	);
}

export default HelpPage;
