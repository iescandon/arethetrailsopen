import React, { useState, useEffect } from 'react';
import Jumbotron from '../../components/jumbotron';
import API from '../../utils/API';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

function ContactPage() {
	const [message, setMessage] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [pageState, setPageState] = useState('');

	useEffect(() => {
		setPageState('contact');
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
		console.log(message);
		API.sendMessage(message).then((res) => {
			console.log(res);
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
			<Jumbotron pageState={pageState} />
			<div className="container">
				<div className="header text-center mt-3">Contact</div>
				<p className="text-center">
					Questions, comments, concerns, feedback, business inquiries,
					collaborations?
				</p>
				<form
					className="mr-0"
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
					<button type="submit" className="btn btn-success" onClick={notify}>
						Submit
					</button>
				</form>
				<div className="text-center">
					<ul className="navbar-brand menu">
						<li>
							<a href="https://www.linkedin.com/in/iescandon/">
								<i className="fa fa-linkedin" aria-hidden="true"></i>
							</a>
						</li>
						<li>
							<a href="https://github.com/iescandon">
								<i className="fa fa-github" aria-hidden="true"></i>
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/inescandon/?hl=en">
								<i className="fa fa-instagram" aria-hidden="true"></i>
							</a>
						</li>
						<li>
							<a href="mailto:iescan4@gmail.com">
								<i className="fa fa-envelope" aria-hidden="true"></i>
							</a>
						</li>
					</ul>
				</div>
				<ToastContainer
					position="bottom-left"
					autoClose={2000}
					hideProgressBar={true}
					pauseOnHover={false}
					closeOnClick={true}
				/>
			</div>
		</div>
	);
}

export default ContactPage;
