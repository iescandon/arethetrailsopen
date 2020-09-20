import React from 'react';
import './style.css';

function Footer() {
	return (
		<footer>
			<div className="container-fluid row footer">
				<div className="col">
					<ul className="navbar-brand menu">
						<li>
							<a
								href="https://www.linkedin.com/in/iescandon/"
								target="_blank"
								className="fa fa-linkedin"
							></a>
						</li>
						<li>
							<a
								href="https://github.com/iescandon"
								target="_blank"
								className="fa fa-github"
							></a>
						</li>
						<li>
							<a
								href="https://www.instagram.com/inescandon/?hl=en"
								target="_blank"
								className="fa fa-instagram"
							></a>
						</li>
					</ul>
				</div>
				<div className="col text-center pt-3">
					<p className="copyright">© Copyright 2020</p>
				</div>
				<div className="col text-center pt-3">
					<a className="email" href="mailto:iescan4@gmail.com">
						Contact the Developer
						<i className="fa fa-envelope ml-1" aria-hidden="true"></i>
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
