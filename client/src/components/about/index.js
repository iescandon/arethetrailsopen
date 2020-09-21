import React from 'react';
import './style.css';

function About() {
	return (
		<div className="justify-content-center">
			<div className="message text-center mt-3">About</div>
			<div className="text-center">
				<img src={require('./trails.gif')} className="about-img" />
				<p className="mt-2">Tired of constantly seeing posts...</p>
			</div>
		</div>
	);
}

export default About;
