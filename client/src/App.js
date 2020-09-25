import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import AboutPage from './pages/aboutpage';
import HelpPage from './pages/helppage';
import ContactPage from './pages/contactpage';
import Footer from './components/footer';
import PullToRefresh from 'react-simple-pull-to-refresh';

function App() {
	const handleRefresh = () => {
		window.location.reload(false);
	};
	return (
		<Router>
			<div>
				<PullToRefresh onRefresh={handleRefresh}>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/home" component={HomePage} />
					<Route exact path="/about" component={AboutPage} />
					<Route exact path="/help" component={HelpPage} />
					<Route exact path="/contact" component={ContactPage} />
				</PullToRefresh>
			</div>
			<Footer path="/" />
		</Router>
	);
}

export default App;
