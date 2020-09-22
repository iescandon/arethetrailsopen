import React, { useState } from 'react';
import API from '../../utils/API';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

function Contact() {
	const [message, setMessage] = useState({
		name: '',
		email: '',
		message: '',
	});

	const onNameChange = ({ target }) => {
		const { value } = target;
		setMessage({ ...message, name: value });
	};

	const onEmailChange = ({ target }) => {
		const { value } = target;
		setMessage({ ...message, email: value });
	};

	const onMessageChange = ({ target }) => {
		const { value } = target;
		setMessage({ ...message, message: value });
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

	const notify = () => toast.success('Message sent!');

	return (
		<div>
			<div className="message text-center mt-3">Contact</div>
			<form
				className="mr-0"
				id="contact-form"
				onSubmit={handleSubmit}
				method="POST"
			>
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						className="form-control"
						value={message.name}
						onChange={(event) => onNameChange(event)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">E-Mail</label>
					<input
						type="email"
						className="form-control"
						aria-describedby="emailHelp"
						value={message.email}
						onChange={(event) => onEmailChange(event)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="message">Message</label>
					<textarea
						className="form-control"
						rows="5"
						value={message.message}
						onChange={(event) => onMessageChange(event)}
					/>
				</div>
				<button type="submit" className="btn btn-success" onClick={notify}>
					Submit
				</button>
			</form>
			<div className="text-center">
				<ul className="navbar-brand menu">
					<li>
						<a
							href="https://www.linkedin.com/in/iescandon/"
							className="fa fa-linkedin"
						></a>
					</li>
					<li>
						<a href="https://github.com/iescandon" className="fa fa-github"></a>
					</li>
					<li>
						<a
							href="https://www.instagram.com/inescandon/?hl=en"
							className="fa fa-instagram"
						></a>
					</li>
					<li>
						<a href="mailto:iescan4@gmail.com" className="fa fa-envelope"></a>
					</li>
				</ul>
			</div>
			<ToastContainer
				position="top-center"
				autoClose={2000}
				hideProgressBar={true}
				pauseOnHover={false}
			/>
		</div>
	);
}

export default Contact;
