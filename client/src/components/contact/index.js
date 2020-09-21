import React, { useState } from 'react';
import API from '../../utils/API';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { set } from 'mongoose';

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
					<label htmlFor="exampleInputEmail1">Email address</label>
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
				<button type="submit" className="btn btn-primary" onClick={notify}>
					Submit
				</button>
			</form>
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
