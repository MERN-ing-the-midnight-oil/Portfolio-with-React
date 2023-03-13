//this code is from emailjs:   https://dashboard.emailjs.com/admin/templates/t5zk2vb
//YOU WILL NEED: npm install @emailjs/browser

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const EmailContactForm = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault(); // prevents the page from reloading when you hit “Send”

		emailjs
			.sendForm(
				"service_igsrlz8",
				"template_yrqe3wk",
				form.current,
				"RULpPGERQuAtLqd-9"
			)
			.then(
				(result) => {
					alert("your message has been sent!");
				},
				(error) => {
					alert("something went wrong!");
				}
			);
	};

	return (
		<Form
			ref={form}
			onSubmit={sendEmail}>
			<Form.Label>Please enter your full name</Form.Label>
			<Form.Control
				type="text"
				name="user_name"
			/>
			<Form.Label>Your email</Form.Label>
			<Form.Control
				type="email"
				name="user_email"
			/>
			<Form.Label>Your message:</Form.Label>
			<Form.Control name="message" />
			<Button
				variant="primary"
				type="submit">
				Click here to send your message
			</Button>
		</Form>
	);
};

export default EmailContactForm;
