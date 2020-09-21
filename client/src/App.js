import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/homepage';
import Contact from './pages/contactpage';

function App() {
	return (
		<Router>
			<div>
				<Route exact path="/" component={Home} />
				<Route path="/contact" component={Contact} />
			</div>
		</Router>
	);
}

export default App;
