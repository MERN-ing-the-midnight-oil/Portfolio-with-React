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
									borderRadius: "50%",
								}}
								id="rhys-portrait"
							/>
							<figcaption
								style={{
									marginTop: "0.2rem",
									fontSize: "2rem",
									fontWeight: "bold",
									color: "#c0eff7",
									backgroundColor: "#232a5a ",
									padding: ".2rem 0.6rem",
								}}>
								{" Rhys J. Smoker "}
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
									className={`nav-link ${
										currentPage === "aboutMe" ? "active" : ""
									}`}>
									About Me
								</a>
							</li>
							<li className="nav-item">
								<a
									href="#portfolio"
									onClick={() => handlePageChange("portfolio")}
									className={`nav-link ${
										currentPage === "portfolio" ? "active" : ""
									}`}>
									Portfolio
								</a>
							</li>
							<li className="nav-item">
								<a
									href="#resume"
									onClick={() => handlePageChange("resume")}
									className={`nav-link ${
										currentPage === "resume" ? "active" : ""
									}`}>
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
