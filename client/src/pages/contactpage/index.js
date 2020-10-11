import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import MobileNav from '../../components/mobileNavbar';

function ContactPage() {
	const [message, setMessage] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [pageState, setPageState] = useState('');

	useEffect(() => {
		setPageState('other');
		window.scrollTo(0, 0);
	}, []);

	const handleChange = ({ target }) => {
		const { name, value } = target;
		setMessage({ ...message, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setMessage({
			name: '',
			email: '',
			message: '',
		});
		API.sendMessage(message)
			.then((res) => {
				console.log(res);
				notify();
				// console.log(res);
			})
			.catch((err) => {
				// console.log(err);
			});
	};

	const notify = () =>
		toast.dark('Message sent!', {
			position: 'bottom-left',
			autoClose: 2000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: false,
		});

	return (
		<div>
			<Navbar pageState={pageState} />
			<MobileNav pageState={pageState} />
			{/* <Jumbotron pageState={pageState} /> */}
			<div className="container padbtm">
				<div className="header text-center mt-3 mb-3 hideWhenMobile">
					Contact
				</div>
				<p className="text-center contactText">
					Questions, comments, concerns, feedback, business inquiries,
					collaborations?
				</p>
				<form
					className="mr-0 mt-4"
					id="contact-form"
					onSubmit={handleSubmit}
					method="POST"
				>
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input
							name="name"
							type="text"
							className="form-control"
							value={message.name}
							onChange={(event) => handleChange(event)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">E-Mail</label>
						<input
							name="email"
							type="email"
							className="form-control"
							aria-describedby="emailHelp"
							value={message.email}
							onChange={(event) => handleChange(event)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="message">Message</label>
						<textarea
							name="message"
							className="form-control"
							rows="5"
							value={message.message}
							onChange={(event) => handleChange(event)}
						/>
					</div>
					<button type="submit" className="btn btn-success">
						Submit
					</button>
				</form>
				<div className="text-center mt-3">
					<ul className="navbar-brand menu">
						<li>
							<a href="mailto:iescan4@gmail.com">
								<i
									className="fa fa-envelope contacticons"
									aria-hidden="true"
								></i>
							</a>
						</li>
						{/* <li>
							<a
								href="https://www.linkedin.com/in/iescandon/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i
									className="fa fa-linkedin contacticons"
									aria-hidden="true"
								></i>
							</a>
						</li> */}
						<li>
							<a
								href="https://github.com/iescandon"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fa fa-github contacticons" aria-hidden="true"></i>
							</a>
						</li>
						<li>
							<a
								href="https://www.instagram.com/inescandon/?hl=en"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i
									className="fa fa-instagram contacticons"
									aria-hidden="true"
								></i>
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/iescandon/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i
									className="fa fa-linkedin contacticons"
									aria-hidden="true"
								></i>
							</a>
						</li>
						{/* <li>
							<a href="mailto:iescan4@gmail.com">
								<i
									className="fa fa-envelope contacticons"
									aria-hidden="true"
								></i>
							</a>
						</li> */}
					</ul>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default ContactPage;
