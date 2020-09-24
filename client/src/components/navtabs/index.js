import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css';

function NavTabs() {
	const location = useLocation();

	return (
		<ul className="nav nav-links">
			<li className="nav-item">
				<Link
					to="/"
					className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
				>
					HOME
				</Link>
			</li>
			<li className="nav-item">
				<Link
					to="/about"
					className={
						location.pathname === '/about' ? 'nav-link active' : 'nav-link'
					}
				>
					ABOUT
				</Link>
			</li>
			<li className="nav-item">
				<Link
					to="/help"
					className={
						location.pathname === '/help' ? 'nav-link active' : 'nav-link'
					}
				>
					HELP
				</Link>
			</li>
			<li className="nav-item">
				<Link
					to="/contact"
					className={
						location.pathname === '/contact' ? 'nav-link active' : 'nav-link'
					}
				>
					CONTACT
				</Link>
			</li>
		</ul>
	);
}

export default NavTabs;
