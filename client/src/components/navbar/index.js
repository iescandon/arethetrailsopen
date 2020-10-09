import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, InputGroup, Button, Form, FormControl } from 'react-bootstrap';
import useOnclickOutside from 'react-cool-onclickoutside';
import './style.css';
import MobileNav from '../mobileNavbar';

function Nav({
	pageState,
	clearSelectedTrail,
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
}) {
	const location = useLocation();

	function openNav() {
		document.getElementById('mySidenav').style.width = '200px';
	}

	function closeNav() {
		document.getElementById('mySidenav').style.width = '0';
	}

	const ref = useOnclickOutside(() => {
		closeNav();
	});

	return (
		<Navbar variant="dark" className="sticky-top hideWhenMobile">
			<Navbar.Brand>
				{pageState === 'selection' ? (
					<Link onClick={clearSelectedTrail}>
						<i
							class="fa fa-arrow-circle-left circle-back-nav"
							aria-hidden="true"
						></i>
					</Link>
				) : (
					<Link
						to="/"
						className={`pl-1 ${
							location.pathname === '/' ? 'nav-link active' : 'nav-link'
						}`}
						onClick={() => closeNav()}
					>
						<img src={require('../../assets/open.svg')} />
					</Link>
				)}
			</Navbar.Brand>
			<Navbar.Text>
				<a className="navbarTitle">Are the trails open?</a>
			</Navbar.Text>
			<div id="mySidenav" ref={ref} className="sidenav ml-auto">
				<p className="closebtn" onClick={() => closeNav()}>
					<i class="fa fa-times-circle circle-icon" aria-hidden="true"></i>
				</p>
				<div>
					<ul className="nav nav-links">
						<li className="nav-item">
							<Link
								to="/"
								className={
									location.pathname === '/' ? 'nav-link active' : 'nav-link'
								}
								onClick={() => closeNav()}
							>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/about"
								className={
									location.pathname === '/about'
										? 'nav-link active'
										: 'nav-link'
								}
								onClick={() => closeNav()}
							>
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/help"
								className={
									location.pathname === '/help' ? 'nav-link active' : 'nav-link'
								}
								onClick={() => closeNav()}
							>
								Help
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/contact"
								className={
									location.pathname === '/contact'
										? 'nav-link active'
										: 'nav-link'
								}
								onClick={() => closeNav()}
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<span
				className="navbar-nav hamburger-icon ml-auto"
				style={{ color: 'white' }}
				onClick={() => openNav()}
			>
				&#9776;
			</span>
		</Navbar>
	);
}

export default Nav;
