import React from "react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
	//these props were given by parent, container.js
	return (
		<>
			<header>
				<h1>
					{" "}
					Rhys J. Smoker
					<img
						src="https://res.cloudinary.com/dubimtz4j/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1677806548/RhysSelfie_j2uq18.jpg"
						width={250}
						alt="portrait of rhys"
						border="1px solid"
						id="rhys-portrait"
					/>
				</h1>
				<ul className="nav nav-tabs">
					<li className="nav-item">
						<a
							href="#aboutMe"
							onClick={() => handlePageChange("aboutMe")} //if clicked, handlePageChange is called on
							// This is a conditional (ternary) operator that checks to see if the current page is "Home"
							// If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
							className={
								currentPage === "aboutMe" ? "nav-link active" : "nav-link"
							}>
							About Me
						</a>
					</li>
					<li className="nav-item">
						<a
							href="#portfolio"
							onClick={() => handlePageChange("portfolio")}
							// Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
							className={
								currentPage === "portfolio" ? "nav-link active" : "nav-link"
							}>
							Portfolio
						</a>
					</li>
					<li className="nav-item">
						<a
							href="#contact"
							onClick={() => handlePageChange("contact")}
							// Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
							className={
								currentPage === "contact" ? "nav-link active" : "nav-link"
							}>
							Contact Me
						</a>
					</li>
					<li className="nav-item">
						<a
							href="#resume"
							onClick={() => handlePageChange("resume")}
							// Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
							className={
								currentPage === "resume" ? "nav-link active" : "nav-link"
							}>
							Resume
						</a>
					</li>
				</ul>
			</header>
		</>
	);
}

export default NavTabs;
