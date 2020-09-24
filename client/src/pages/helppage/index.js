import React, { useState, useEffect } from 'react';
import Jumbotron from '../../components/jumbotron';
import Footer from '../../components/footer';
import './style.css';

function HelpPage() {
	const [pageState, setPageState] = useState('');

	useEffect(() => {
		setPageState('help');
	}, []);

	return (
		<div>
			<Jumbotron pageState={pageState} />
			<div className="container body-container">
				<div className="text-center header mt-3">Help</div>
			</div>
		</div>
	);
}

export default HelpPage;
