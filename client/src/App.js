import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import AboutPage from './pages/aboutpage';
import HelpPage from './pages/helppage';
import ContactPage from './pages/contactpage';
// import Footer from './components/footer';
import Navbar from './components/navbar';
// import PullToRefresh from 'react-simple-pull-to-refresh';
import { ToastContainer } from 'react-toastify';

function App() {
	// const handleRefresh = () => {
	// 	window.location.reload(false);
	// const [pageState, setPageState] = useState('results');
	// };
	return (
		<Router>
			{/* <Navbar path="/" /> */}
			<div>
				{/* <PullToRefresh path="/" onRefresh={handleRefresh}> */}
				<Route exact path="/" component={HomePage} />
				<Route exact path="/home" component={HomePage} />
				<Route exact path="/about" component={AboutPage} />
				<Route exact path="/help" component={HelpPage} />
				<Route exact path="/contact" component={ContactPage} />
				{/* </PullToRefresh> */}
				<ToastContainer
					position="bottom-left"
					autoClose={2000}
					hideProgressBar={true}
					pauseOnHover={false}
					closeOnClick={true}
				/>
			</div>
			{/* <Footer path="/" /> */}
		</Router>
	);
}

export default App;
