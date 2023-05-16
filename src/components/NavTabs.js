import React from "react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
	//these props were given by parent, container.js
	return (
		<>
			<header
				style={{
					backgroundImage: `url(${process.env.PUBLIC_URL}/midnightOIL.png)`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}>
					<img
						src={process.env.PUBLIC_URL + "/profilepic.jpeg"}
						alt="me wearing a button up shirt and pastel colored mountains as a background"
						width={250}
						style={{ border: "1px solid" }}
						id="rhys-portrait"
					/>
					<figcaption style={{ marginTop: "0.5rem" }}>
						Rhys J. Smoker
					</figcaption>
				</div>
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
