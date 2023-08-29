import React, { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";

const colorOil = "#c0eff7";
const colorMidnight = "#232a5a";
const images = [
	`${process.env.PUBLIC_URL}/pour1.png`,
	`${process.env.PUBLIC_URL}/pour2.png`,
	`${process.env.PUBLIC_URL}/pour3.png`,
	`${process.env.PUBLIC_URL}/pour4.png`,
	`${process.env.PUBLIC_URL}/pour5.png`,
];
const fadeDuration = 1000;

function PreloadImages() {
	return (
		<div style={{ display: "none" }}>
			{images.map((src, index) => (
				<img
					key={index}
					src={src}
					alt="preload"
				/>
			))}
		</div>
	);
}

function NavTabs({ currentPage, handlePageChange }) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, fadeDuration * 2);
		return () => clearInterval(interval);
	}, []);

	const transitions = useTransition(currentImageIndex, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: {
			duration: fadeDuration,
		},
	});

	return (
		<>
			<PreloadImages />
			<header style={{ position: "relative" }}>
				{transitions((style, item) => (
					<animated.div
						style={{
							...style,
							backgroundImage: `url(${images[item]})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							position: "absolute",
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							zIndex: 0,
						}}
					/>
				))}
				<div style={{ marginLeft: "8%", zIndex: 10 }}>
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
