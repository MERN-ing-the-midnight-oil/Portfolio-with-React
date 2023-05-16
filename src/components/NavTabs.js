import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
	return (
		<>
			<header style={{ position: "relative" }}>
				<div
					style={{
						backgroundImage: `url(${process.env.PUBLIC_URL}/header-bg.jpg)`,
						backgroundSize: "cover",
						backgroundPosition: "right",
						display: "flex",
						alignItems: "flex-start",
						paddingBottom: "2rem",
					}}>
					<div style={{ marginLeft: "8%" }}>
						<div
							style={{
								position: "relative",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}>
							<img
								src={process.env.PUBLIC_URL + "/profilepic.jpeg"}
								alt="portrait of rhys"
								width={250}
								style={{
									border: "1px solid",
									borderRadius: "50%", // Add circular border
								}}
								id="rhys-portrait"
							/>
							<figcaption
								style={{
									marginTop: "0.5rem",
									fontSize: "2rem",
									fontWeight: "bold",
								}}>
								Rhys J. Smoker
							</figcaption>
						</div>
						<ul
							className="nav nav-tabs"
							style={{ marginTop: "1rem" }}>
							{/* Navigation tabs */}
							<li className="nav-item">
								<a
									href="#aboutMe"
									onClick={() => handlePageChange("aboutMe")}
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
									className={
										currentPage === "resume" ? "nav-link active" : "nav-link"
									}>
									Resume
								</a>
							</li>
						</ul>
					</div>
				</div>
			</header>
		</>
	);
}

export default NavTabs;
