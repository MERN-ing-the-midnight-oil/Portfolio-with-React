import React from "react";
import CustomCard from "../CustomCard";

//array of portfolio objects including title, link to repo, etc

const projects = [
	{
		Id: 1,
		title: "REACT HOOKS Bananarama Grams",
		subtitle: "A front-end crossword puzzle-like game.",
		description:
			"A React app showcasing use of useState, useEffect, and useRef and custom CSS for visual effects. The game partially simulates a popular crossword-style tabletop game.",
		repo: "https://github.com/MERN-ing-the-midnight-oil/tiles-game",
		deployed_URL: "https://mern-ing-the-midnight-oil.github.io/tiles-game/",
		image:
			"https://cdn.midjourney.com/ba0c7b4f-c62e-4f58-93b1-ee32edd9a446/0_2.webp",
		liveWeb: true,
	},
	{
		Id: 2,
		title: "Other's Covers",
		subtitle:
			"A full-stack MERN platform facilitating peer-to-peer book lending.",
		description:
			"A full stack MERN application showcasing a front-end built with React Hooks and Context API. The back-end uses Formik for form management, JWT for authentication, and is structured with Typescript.",
		repo: "https://github.com/MERN-ing-the-midnight-oil/others-covers",
		deployed_URL: "https://others-covers-0f4265de0975.herokuapp.com/",
		image:
			"https://cdn.midjourney.com/77889ff9-2234-44d4-93e5-513f702c7778/0_3.png",
		liveWeb: true,
	},
	{
		Id: 3,
		title: "Employee Tracker!",
		subtitle: "A CLI tool for managing a company's employee database.",
		description:
			"Highlights the synergy of Node.js with Inquirer for a responsive command-line interface. Data management is efficiently handled using MySql.",
		repo: "https://github.com/MERN-ing-the-midnight-oil/Employee-Tracker",
		deployed_URL:
			"https://drive.google.com/file/d/1iJv_3YIaGsj8JPUmZd-GV1ZTAgd9grn9/view",
		image:
			"https://cdn.midjourney.com/1a351108-b045-4a0f-9a79-369ef60de8b9/grid_0.png",
		liveWeb: false,
	},
	{
		Id: 4,
		title: "What's in Your Cart?",
		subtitle: "Back-end for an e-commerce site.",
		description:
			"The foundation of an e-commerce platform, emphasizing ORM techniques using an Express.js API, Sequelize, and MySQL.",
		repo: "https://github.com/MERN-ing-the-midnight-oil/E-Commerce-Back-End",
		deployed_URL:
			"https://drive.google.com/file/d/1LqEl-L1l1fmLKjAZYBI0TBsrN4bHrP-Z/view",
		image:
			"https://cdn.midjourney.com/c218358e-91e1-40da-b2ab-577c3fc9705d/grid_0.png",
		liveWeb: false,
	},
	{
		Id: 5,
		title: "Genre Genie",
		subtitle: "A movie suggestion platform based on user-selected genres.",
		description:
			"Demonstrates the integration of third-party API calls and the effective use of local storage for user preferences and data retrieval.",
		repo: "https://github.com/MERN-ing-the-midnight-oil/Genre-Genie",
		deployed_URL: "https://mern-ing-the-midnight-oil.github.io/Genre-Genie/",
		image:
			"https://cdn.midjourney.com/a0dcda47-f18b-4887-9d50-578a4f6a1aed/grid_0.png",
		liveWeb: true,
	},
	// {
	// 	Id: 6,
	// 	title: "Blogging with Handlebars",
	// 	subtitle: "A Content Managment System built from scratch.",
	// 	description:
	// 		"This app demonstrates my use of the Model-View-Controller architechtural paradigm. It uses Handlebars.js as the templating language, Sequelize as the ORM(Object Relational Mapping), and the express-session npm package for authentification. ",
	// 	repo: "https://github.com/MERN-ing-the-midnight-oil/MVC-Tech-Blog",
	// 	deployed_URL: "https://dashboard.heroku.com/apps/stormy-gorge-58008",
	// 	image:
	// 		"https://cdn.midjourney.com/f7f033e3-764a-4428-8e47-c7887f972597/grid_0.png",
	// 	liveWeb: false,
	// },
	{
		Id: 7,
		title: "Mongoose API",
		subtitle: "API for social networking features.",
		description:
			"A back-end API for social networking features, built using Express.js, MongoDB, and Mongoose ODM.",
		repo: "https://github.com/MERN-ing-the-midnight-oil/Social-Network-API",
		deployed_URL: "https://watch.screencastify.com/v/pOD8r52BeDaPn99UDrVn", //todo do a new walkthrough
		image:
			"https://media.discordapp.net/attachments/1042540591650717738/1083449688356835388/Rhys_Smoker_a_mongoose_wearing_a_monocle_as_an_old-fashioned_bo_b19c0c11-8903-4eb9-8f17-ce7004c1fdd4.png?width=1051&height=1051", //todo take a screenshot
		liveWeb: false,
	},
	{
		Id: 7,
		title: "Wall of Text",
		subtitle: "An offline text editor with auto-save capabilities.",
		description:
			"Exemplifies the power of a Progressive Web App (PWA) using tools like webpack, workbox, babel, and the WebpackPwaManifest plug-in.",
		repo: "https://github.com/MERN-ing-the-midnight-oil/PWA-Text-Editor ",
		deployed_URL: "https://damp-coast-38671.herokuapp.com/",
		image:
			"https://cdn.midjourney.com/c07d972b-8931-4161-9b7b-e3618d096e84/grid_0.png",
		liveWeb: false,
	},
	{
		Id: 8,
		title: "Mail-Me-Seeds",
		subtitle: "A platform for gardeners and farmers to share vegetable seeds.",
		description:
			"Demonstrates my ability to work on a team using agile methods and shows mastery of Model-View-Controller (MVC) architecture. A group project that uses handlebars templating and nodeMailer.",
		repo: "https://github.com/TheBluWiz/mail-me-seeds",
		deployed_URL: "https://mail-me-seeds.herokuapp.com/",
		image:
			"https://cdn.midjourney.com/dfc5bb94-1992-4f82-9c0e-ee38621a0bef/grid_0.png",
		fullStack: false,
	},
	{
		Id: 9,
		title: "Ro-Sham-Bots",
		subtitle: "A game where users compete against AI in rock-paper-scissors.",
		description:
			"A full stack MERN application integrating AI bots and offering real-time user communication using socket.io.",
		repo: "https://github.com/katbakr/beat-the-bots",
		deployed_URL: "https://beat-the-bots.herokuapp.com/",
		image:
			"https://cdn.midjourney.com/a7dd1cb8-0fe2-4f21-be44-6967b38b15b7/grid_0.png",
		liveWeb: true,
	},
	{
		Id: 9,
		title: "Fade and Flow Animations using React-Spring",
		subtitle:
			"An automated image animation gallery with generative AI tutorial.",
		description:
			"This repository allows you to animate sequences of images in a smooth fading transition using React and React-Spring. It's optimized for animating the art made from generative art AI models.",
		repo: "https://github.com/MERN-ing-the-midnight-oil/fade-and-flow",
		deployed_URL: "https://mern-ing-the-midnight-oil.github.io/fade-and-flow/",
		image:
			"https://cdn.midjourney.com/ba7a37d1-d4d9-4e15-92c0-de6b52783426/0_2.png",
		liveWeb: true,
	},
	{
		Id: 10,
		title: "REACT Here Kitty Kitty Score Calculator",
		subtitle:
			"A score calculator for the 'Here Kitty Kitty' board game by Fireside Games.",
		description:
			"An app that enables players to easily calculate their scores after playing 'Here Kitty Kitty'. It includes interactive elements for score tallying and utilizes state management for dynamic updates.",
		repo: "https://github.com/MERN-ing-the-midnight-oil/here-kitty-kitty-score-calculator",
		deployed_URL:
			"https://mern-ing-the-midnight-oil.github.io/here-kitty-kitty-score-calculator",
		image:
			"https://cdn.midjourney.com/7e5e1040-e3a8-4bf1-8f2d-227d2751aeef/0_0.webp",
		liveWeb: true,
	},
];

const Portfolio = () => {
	const fullStackProjects = projects.filter((project) => project.liveWeb);
	//const nonFullStackProjects = projects.filter((project) => !project.liveWeb);
	return (
		<div style={{ paddingTop: "40px", alignContent: "Center" }}>
			<h1 style={{ textAlign: "Center" }}>
				My Live React-based Web Applications
			</h1>
			<div className="card-container">
				{/* Add this wrapper with a class */}
				{fullStackProjects.map((project) => (
					<CustomCard
						key={project.Id}
						title={project.title}
						subtitle={project.subtitle}
						description={project.description}
						repo={project.repo}
						deployedURL={project.deployed_URL}
						image={project.image}
					/>
				))}
			</div>
		</div>
	);
};

export default Portfolio;
