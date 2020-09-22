import React from 'react';
import { Navbar, NavbarBrand, Container } from 'react-bootstrap';
import './style.css';

function Footer() {
	return (
		// <div className="fixed-bottom">
		// 	<Navbar color="dark" dark>
		// 		<Container>
		// 			<NavbarBrand>© Copyright 2020</NavbarBrand>
		// 		</Container>
		// 	</Navbar>
		// </div>
		<div className="container footer">
			<div className="text-center py-3">© Copyright 2020</div>
		</div>
	);
}

export default Footer;
