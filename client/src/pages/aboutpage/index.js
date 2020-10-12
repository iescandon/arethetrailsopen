import React, { useState, useEffect } from 'react';
import './style.css';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import MobileNav from '../../components/mobileNavbar';

function AboutPage() {
	const [pageState, setPageState] = useState('');

	useEffect(() => {
		setPageState('other');
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<Navbar pageState={pageState} />
			<MobileNav pageState={pageState} />
			{/* <Jumbotron pageState={pageState} /> */}
			<div className="container padbtm">
				<div className="text-center header about1 mt-3 hideWhenMobile">
					About
				</div>
				<div className="row text-center">
					<div className="col-lg-5 col-md-12">
						<img
							src={require('../../assets/inez.jpeg')}
							className="about-img"
							alt="girl on mountain bike"
						/>
					</div>
					<div className="col-lg-7 col-md-12 my-auto">
						<div>
							<p className="text-center header about2 mt-3">About</p>
							<p className="row mt-4 about-text">
								Various mountain bike trail facebook groups are littered with
								users asking for the trail status. Although some people know the
								answers, they get frustrated by having to constantly answer the
								same question over and over. Especially when there are apps that
								have the information readily available.
							</p>
							<p>
								Unfortunately these apps are flooded with too much information
								that makes finding the trail status quite difficult and hard to
								understand. Additionally it only provides you with one trail's
								status, so you have to go through the long process again to find
								out the status of another trail nearby.
							</p>
							<p>
								The developer,{' '}
								<a
									href="https://github.com/iescandon"
									target="_blank"
									rel="noopener noreferrer"
								>
									Inez Escandon
								</a>
								, loves to ride and noticed this issue in her community. Thus
								the idea to create "Are the trails open?" was born. "Are the
								trails open?" is a full-stack MERN application designed to
								quickly/painlessly find out what popular biking trails are open
								in the area. Additionally, it also provides users a simple way
								to update trail status and conditions.
							</p>

							<p className="copyright">
								Copyright © 2020 - All rights reserved
							</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default AboutPage;
