import React, { useState, useEffect } from 'react';
import Jumbotron from '../../components/jumbotron';
import './style.css';

function AboutPage() {
	const [pageState, setPageState] = useState('');

	useEffect(() => {
		setPageState('about');
	}, []);

	return (
		<div>
			<Jumbotron pageState={pageState} />
			<div className="container">
				<div className="text-center header mt-3">About</div>
				<div className="text-center">
					<img
						src={require('./inez.jpg')}
						className="about-img"
						alt="girl with mountain bike"
					/>
					<p className="mt-4">
						Various mountain bike trail facebook groups are littered with users
						asking for the trail status. Although some people know the answers,
						they get frustrated by having to constantly answer the same question
						over and over. There are apps that have that information available,
						but they are flooded with too much information that makes finding
						the trail status quite difficult and hard to understand.
						Additionally it only provides you with one trails status, so you
						have to go through the long process again to find out the status of
						another trail nearby. This application is a single paged full-stack
						application designed to find out whether popular biking trails in
						Texas are open.
					</p>
				</div>
			</div>
		</div>
	);
}

export default AboutPage;
