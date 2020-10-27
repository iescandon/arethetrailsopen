import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css';

function Footer() {
	const location = useLocation();

	return (
		<div className="footer px-4 row fixed-bottom footermenu">
			{/* <div className="col-1"></div> */}
			<div className="col text-center my-auto px-0">
				<Link
					to="/"
					className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
				>
					<i className="fa fa-home menuicons"></i>
					<br />
					Home
				</Link>
			</div>
			<div className="col text-center my-auto px-0">
				<Link
					to="/help"
					className={
						location.pathname === '/help' ? 'nav-link active' : 'nav-link'
					}
				>
					<i className="fa fa-question menuicons"></i>
					<br />
					Help
				</Link>
			</div>
			<div className="col text-center my-auto px-0">
				<Link
					to="/about"
					className={
						location.pathname === '/about' ? 'nav-link active' : 'nav-link'
					}
				>
					<i className="fa fa-bicycle menuicons"></i>
					<br />
					About
				</Link>
			</div>
			<div className="col text-center my-auto px-0">
				<Link
					to="/contact"
					className={
						location.pathname === '/contact' ? 'nav-link active' : 'nav-link'
					}
				>
					<i className="fa fa-envelope menuicons" id="envelope"></i>
					<br />
					Contact
				</Link>
			</div>
			{/* <div className="col-1"></div> */}
		</div>
	);
}

export default Footer;
