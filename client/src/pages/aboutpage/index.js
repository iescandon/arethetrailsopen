import React, { useState, useEffect } from 'react';
import Jumbotron from '../../components/jumbotron';

function AboutPage() {
	const [pageState, setPageState] = useState('');

	useEffect(() => {
		setPageState('about');
	}, []);

	return (
		<div>
			<Jumbotron pageState={pageState} />
			<h1>About Page</h1>
		</div>
	);
}

export default AboutPage;
