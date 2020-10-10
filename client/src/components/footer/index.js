import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css';

function Footer() {
	const location = useLocation();

	return (
		<div className="footer row fixed-bottom footermenu">
			{/* <div className="col text-center pb-2 pt-2 my-auto">© Copyright 2020</div> */}
			<div className="col-1"></div>
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
					<i class="fa fa-question menuicons"></i>
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
					<i class="fa fa-bicycle menuicons"></i>
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
					<i class="fa fa-envelope menuicons" id="envelope"></i>
					<br />
					Contact
				</Link>
			</div>
			<div className="col-1"></div>
		</div>
	);
}

export default Footer;
