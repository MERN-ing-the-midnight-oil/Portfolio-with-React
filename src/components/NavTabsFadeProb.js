import React, { useState, useEffect } from "react";

const colorOil = "#c0eff7";
const colorMidnight = "#232a5a";

function NavTabs({ currentPage, handlePageChange }) {
	const images = [
		`${process.env.PUBLIC_URL}/pour1.png`,
		`${process.env.PUBLIC_URL}/pour2.png`,
		`${process.env.PUBLIC_URL}/pour3.png`,
		`${process.env.PUBLIC_URL}/pour4.png`,
		`${process.env.PUBLIC_URL}/pour5.png`,
		`${process.env.PUBLIC_URL}/pour6.png`,
		`${process.env.PUBLIC_URL}/pour7.png`,
		`${process.env.PUBLIC_URL}/pour8.png`,
		`${process.env.PUBLIC_URL}/pour9.png`,
		`${process.env.PUBLIC_URL}/pour10.png`,
		`${process.env.PUBLIC_URL}/pour11.png`,
		`${process.env.PUBLIC_URL}/pour12.png`,
		`${process.env.PUBLIC_URL}/pour13.png`,
		`${process.env.PUBLIC_URL}/pour14.png`,
		`${process.env.PUBLIC_URL}/pour15.png`,
		`${process.env.PUBLIC_URL}/pour16.png`,
		`${process.env.PUBLIC_URL}/pour17.png`,
		`${process.env.PUBLIC_URL}/pour18.png`,
		`${process.env.PUBLIC_URL}/pour19.png`,
		`${process.env.PUBLIC_URL}/pour20.png`,
		`${process.env.PUBLIC_URL}/pour21.png`,
		`${process.env.PUBLIC_URL}/pour22.png`,
		`${process.env.PUBLIC_URL}/pour23.png`,
		`${process.env.PUBLIC_URL}/pour24.png`,
		`${process.env.PUBLIC_URL}/pour25.png`,
		`${process.env.PUBLIC_URL}/pour26.png`,
	];

	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [nextImageIndex, setNextImageIndex] = useState(1);
	const [imageOpacity, setImageOpacity] = useState(1);

	useEffect(() => {
		const interval = setInterval(() => {
			setNextImageIndex((currentImageIndex + 1) % images.length);
			setImageOpacity(0); // Start fade out
			setTimeout(() => {
				setCurrentImageIndex(nextImageIndex);
				setImageOpacity(1); // Start fade in for next image
			}, 1000); // Wait for fade out before changing image (ms)
		}, 5000); // Interval between images (ms)

		return () => clearInterval(interval);
	}, [images.length, currentImageIndex, nextImageIndex]);

	return (
		<>
			<header
				style={{
					position: "relative",
					display: "flex",
					alignItems: "flex-start",
					paddingBottom: "2rem",
				}}>
				{/* Current image */}
				<div
					className="image-crossfade"
					style={{
						backgroundImage: `url(${images[currentImageIndex]})`,
						backgroundSize: "cover",
						backgroundPosition: "right",
						width: "100%",
						height: "100%",
						opacity: imageOpacity,
						position: "absolute",
						transition: "opacity 1s ease",
					}}
				/>
				{/* Next image (always fully opaque) */}
				<div
					className="image-crossfade"
					style={{
						backgroundImage: `url(${images[nextImageIndex]})`,
						backgroundSize: "cover",
						backgroundPosition: "right",
						width: "100%",
						height: "100%",
						opacity: 1, // Always fully opaque
						position: "absolute",
					}}
				/>
				<div style={{ marginLeft: "8%", zIndex: 1 }}>
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
								color: colorOil,
								backgroundColor: colorMidnight,
								padding: ".2rem 0.6rem",
								borderTopLeftRadius: "0.5rem",
								borderTopRightRadius: "0.5rem",
								borderBottomLeftRadius: "0",
								borderBottomRightRadius: "0",
								display: "inline-block",
							}}>
							{" Rhys Smoker "}
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
			</header>
		</>
	);
}

export default NavTabs;
