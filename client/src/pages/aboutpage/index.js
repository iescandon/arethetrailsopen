import React, { useState, useEffect } from 'react';
import Jumbotron from '../../components/jumbotron';
import './style.css';

function AboutPage() {
	const [pageState, setPageState] = useState('');

	useEffect(() => {
		setPageState('about');
	}, []);

	return (
		<div>
			<Jumbotron pageState={pageState} />
			<div className="container">
				<div className="text-center header mt-3">About</div>
				<div className="row text-center">
					<div className="col-lg-5 col-md-12">
						<img
							src={require('../../assets/inez.jpeg')}
							className="about-img"
							alt="gif of fb users asking for trail status"
						/>
					</div>
					<div className="col-lg-7 col-md-12">
						<div>
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
								understand. Additionally it only provides you with one trails
								status, so you have to go through the long process again to find
								out the status of another trail nearby.
							</p>
							<p>
								The developer,{' '}
								<a href="https://www.instagram.com/inescandon/?hl=en">
									Inez Escandon
								</a>
								, loves to ride and noticed this issue in her community. Thus
								the idea to create "Are the trails open?" was born. "Are the
								trails open?" is a full-stack MERN application designed to
								quickly/painlessly find out what popular biking trails are open
								in the area. Additionally, it also provides users a simple way
								to update trail status and conditions.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutPage;
