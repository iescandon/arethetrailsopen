import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import AboutPage from './pages/aboutpage';
import HelpPage from './pages/helppage';
import ContactPage from './pages/contactpage';

function App() {
	return (
		<Router>
			<div>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/home" component={HomePage} />
				<Route exact path="/about" component={AboutPage} />
				<Route exact path="/help" component={HelpPage} />
				<Route exact path="/contact" component={ContactPage} />
			</div>
		</Router>
	);
}

export default App;
