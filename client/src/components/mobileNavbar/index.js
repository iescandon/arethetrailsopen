import React from 'react';
import { Navbar, InputGroup, Button, Form } from 'react-bootstrap';
import './style.css';
import { Link, useLocation } from 'react-router-dom';

function MobileNav({
	mapClass,
	changeView,
	listClass,
	filterTrails,
	handleRefresh,
	resetCenterPoint,
	userLocation,
	pageState,
	clearSelectedTrail,
}) {
	const location = useLocation();

	if (pageState === 'selection') {
		return (
			<Navbar
				variant="dark"
				className="sticky-top justify-content-between showWhenMobile"
			>
				<button
					className="circle-back btn px-0 py-0"
					onClick={clearSelectedTrail}
				>
					<i
						className="fa fa-arrow-circle-left circle-back-nav"
						aria-hidden="true"
					></i>
				</button>
			</Navbar>
		);
	}

	if (pageState === 'other') {
		return (
			<Navbar
				variant="dark"
				className="sticky-top justify-content-between showWhenMobile"
			>
				<Link
					to="/"
					className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
					className="circle-back"
				>
					<i
						className="fa fa-arrow-circle-left circle-back-nav"
						aria-hidden="true"
					></i>
				</Link>
			</Navbar>
		);
	}

	return (
		<Navbar variant="dark" className="sticky-top showWhenMobile my-auto">
			<Form inline>
				<InputGroup className="col">
					<Button
						variant="btn"
						className={`pl-0 ${mapClass}`}
						onClick={(event) => changeView(event)}
					>
						<img
							src={require('../../assets/mapview-w.svg')}
							alt="map view"
							data-name="map"
						/>
					</Button>
					<Button
						variant="btn"
						className={`pl-0 ${listClass}`}
						onClick={(event) => changeView(event)}
					>
						<img
							src={require('../../assets/listview-w.svg')}
							alt="list view"
							data-name="list"
						/>
					</Button>
				</InputGroup>
				<InputGroup className="col justify-content-end pr-0">
					<Button variant="btn" className="mapbtn" onClick={filterTrails}>
						<img
							src={require('../../assets/filter-w.svg')}
							alt="filter button"
						/>
					</Button>
					<Button variant="btn" className="mapbtn">
						<img
							src={require('../../assets/refresh-w.svg')}
							alt="refresh button"
							onClick={handleRefresh}
						/>
					</Button>
					<Button
						variant="btn"
						className="pr-0 mapbtn"
						onClick={() => resetCenterPoint(userLocation)}
					>
						<img
							src={require('../../assets/locate-w.svg')}
							alt="locate button"
						/>
					</Button>
				</InputGroup>
			</Form>
		</Navbar>
	);
}

export default MobileNav;
