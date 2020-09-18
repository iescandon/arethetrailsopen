import React, { useState } from 'react';
import './App.css';
import Map from './components/map';
import Jumbotron from './components/jumbotron';
import Table from './components/table';
import Search from './components/search';
import Legend from './components/legend';
import Geocode from 'react-geocode';
import API from './utils/API';

function App() {
	const [trails, setTrails] = useState([]);
	const [search, setSearch] = useState(77054);
	const [selectedTrail, setSelectedTrail] = useState('Brazos River Park');
	const [centerPoint, setCenterPoint] = useState({
		lat: 29.749907,
		lng: -95.358421,
	});

	const getTrails = () => {
		API.search().then((res) => {
			console.log(res);
			setTrails(res.data.results);
		});
	};

	const handleInputChange = ({ target }) => {
		const { value } = target;
		setSearch(value);
	};

	const getLatAndLong = (search, event) => {
		event.preventDefault();
		Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);
		Geocode.fromAddress(search).then(
			(response) => {
				const { lat, lng } = response.results[0].geometry.location;
				setCenterPoint({
					lat,
					lng,
				});
				console.log(lat, lng);
			},
			(error) => {
				console.error(error);
			}
		);
	};

	getTrails();

	return (
		<div>
			<Jumbotron />
			<div className="container-fluid">
				<div className="row">
					<div className="col">
						<Map centerPoint={centerPoint} selectedTrail={selectedTrail} />
					</div>
					<div className="col">
						<div className="row">
							<div className="col">
								<Search
									search={search}
									handleInputChange={handleInputChange}
									getLatAndLong={getLatAndLong}
								/>
							</div>
							<div className="col text-center">
								<Legend />
							</div>
						</div>
						<div className="mt-4 row justify-content-center selectedTrail">
							{selectedTrail}
						</div>
						<div className="row">
							<Table />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
