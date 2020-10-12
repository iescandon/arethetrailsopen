import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import './style.css';

function Nav({ pageState, clearSelectedTrail }) {
	const location = useLocation();

	return (
		<Navbar variant="dark" className="sticky-top hideWhenMobile">
			<Navbar.Brand>
				{pageState === 'selection' ? (
					<Link onClick={clearSelectedTrail}>
						<i
							className="fa fa-arrow-circle-left circle-back-nav"
							aria-hidden="true"
						></i>
					</Link>
				) : (
					<Link
						to="/"
						className={`pl-1 ${
							location.pathname === '/' ? 'nav-link active' : 'nav-link'
						}`}
					>
						<img
							src={require('../../assets/open.svg')}
							alt="are the trails open logo, open sign"
						/>
					</Link>
				)}
			</Navbar.Brand>
			{/* <Navbar.Text>
				<a className="navbarTitle">Are the trails open?</a>
			</Navbar.Text> */}
		</Navbar>
	);
}

export default Nav;
