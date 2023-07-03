import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
	const email = "merning.the.midnight.oil@gmail.com";
	const subject = "Reaching Out";
	const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

	return (
		<MDBFooter className="text-center text-lg-start text-reset">
			<section className="d-flex justify-content-center justify-content-center p-4 border-bottom">
				<div className="me-5 d-lg-block">
					<span>Let's connect !</span>
				</div>
				<div>
					<a
						style={{ marginLeft: "3rem" }}
						href={mailtoLink}>
						Email Me
					</a>

					<a
						style={{ marginLeft: "3rem" }}
						href="https://www.linkedin.com/in/rhys-smoker/">
						<BsLinkedin />
					</a>

					<a
						style={{ marginLeft: "3rem" }}
						href="https://github.com/MERN-ing-the-midnight-oil">
						<BsGithub />
					</a>
				</div>
			</section>
		</MDBFooter>
	);
}
