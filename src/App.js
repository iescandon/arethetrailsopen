import React from 'react';
import './App.css';
import Map from './components/map';
import Jumbotron from './components/jumbotron';
import Table from './components/table';
import Search from './components/search';

function App() {
	return (
		<div>
			<Jumbotron />
			<div className="container-fluid">
				<div className="row">
					<div className="col">
						<Map />
					</div>
					<div className="col">
						<Search />
						<Table />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
