import React from 'react';
import { Navbar, InputGroup, Button, Form, FormControl } from 'react-bootstrap';
import './style.css';
import { Link, useLocation } from 'react-router-dom';

function MobileNav({
	mapClass,
	changeView,
	listClass,
	filterTrails,
	handleRefresh,
	resetCenterPoint,
	search,
	getLatAndLong,
	handleInputChange,
	userLocation,
	pageState,
	clearSelectedTrail,
}) {
	const location = useLocation();

	if (pageState === 'selection') {
		return (
			<Navbar
				variant="dark"
				className="sticky-top mobileview d-flex justify-content-between showWhenMobile"
			>
				<a onClick={clearSelectedTrail}>
					<i
						class="fa fa-arrow-circle-left circle-back-nav"
						aria-hidden="true"
					></i>
				</a>
			</Navbar>
		);
	}

	if (pageState === 'other') {
		return (
			<Navbar
				variant="dark"
				className="sticky-top mobileview d-flex justify-content-between showWhenMobile"
			>
				<Link
					to="/"
					className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
				>
					<i
						class="fa fa-arrow-circle-left circle-back-nav"
						aria-hidden="true"
					></i>
				</Link>
				;
			</Navbar>
		);
	}

	return (
		<Navbar
			variant="dark"
			className="sticky-top mobileview d-flex justify-content-between showWhenMobile"
		>
			<Form inline className="p-2">
				<InputGroup>
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
			</Form>
			<Form inline className="p-2">
				<InputGroup className="">
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
