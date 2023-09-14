import React from "react";
import Card from "react-bootstrap/Card";

//array of portfolio objects including title, link to repo, etc

const projects = [
	{
		Id: 1,
		title: "Employee Tracker!",
		subtitle: "A command-line app to manage a company's employee information.",
		description:
			"This app is a content managment system built from scratch using Node.js, Inquirer, and MySql.  ",
		repo: "https://github.com/MERN-ing-the-midnight-oil/Employee-Tracker",
		deployed_URL:
			"https://drive.google.com/file/d/1iJv_3YIaGsj8JPUmZd-GV1ZTAgd9grn9/view",
		image:
			"https://cdn.midjourney.com/1a351108-b045-4a0f-9a79-369ef60de8b9/grid_0.png",
		fullStack: false,
	},
	{
		Id: 2,
		title: "What's in Your Cart?",
		subtitle: "Building the back end for an existing e-commerce site",
		description:
			"This shows my mastery of ORM (Object-Relational Mapping). I took a working Express.js API and configured it to use Sequelize to connect with a MySQL database. The 'Deployed' URL shows a walkthrough video.",
		repo: "https://github.com/MERN-ing-the-midnight-oil/E-Commerce-Back-End",
		deployed_URL:
			"https://drive.google.com/file/d/1LqEl-L1l1fmLKjAZYBI0TBsrN4bHrP-Z/view",
		image:
			"https://cdn.midjourney.com/c218358e-91e1-40da-b2ab-577c3fc9705d/grid_0.png",
		fullStack: false,
	},
	{
		Id: 2,
		title: "Genre Genie",
		subtitle:
			"A front-end application using API calls to a movie database and local storage",
		description:
			"Demonstrates getting information from multiple third-party API's. This app lets the user pick multiple movie genres, and suggests titles to watch.",
		repo: "https://github.com/MERN-ing-the-midnight-oil/Genre-Genie",
		deployed_URL: "https://mern-ing-the-midnight-oil.github.io/Genre-Genie/",
		image:
			"https://cdn.midjourney.com/a0dcda47-f18b-4887-9d50-578a4f6a1aed/grid_0.png",
		fullStack: true,
	},
	{
		Id: 3,
		title: "Blogging with Handlebars",
		subtitle: "A Content Managment System built from scratch.",
		description:
			"This app demonstrates my use of the Model-View-Controller architechtural paradigm. It uses Handlebars.js as the templating language, Sequelize as the ORM(Object Relational Mapping), and the express-session npm package for authentification. ",
		repo: "https://github.com/MERN-ing-the-midnight-oil/MVC-Tech-Blog",
		deployed_URL: "https://dashboard.heroku.com/apps/stormy-gorge-58008",
		image:
			"https://cdn.midjourney.com/f7f033e3-764a-4428-8e47-c7887f972597/grid_0.png",
		fullStack: false,
	},
	{
		Id: 4,
		title: "Mongoose API",
		subtitle: "NoSQL Challenge: Social Network API",
		description:
			"This app shows that I can build and structure an API. I used Express.js for routing, a MongoDB database, and the Mongoose ODM. Please note that the `deployed` url will take you to a walk-through video as the APP is not actually deployed. ",
		repo: "https://github.com/MERN-ing-the-midnight-oil/Social-Network-API",
		deployed_URL: "https://watch.screencastify.com/v/pOD8r52BeDaPn99UDrVn", //todo do a new walkthrough
		image:
			"https://media.discordapp.net/attachments/1042540591650717738/1083449688356835388/Rhys_Smoker_a_mongoose_wearing_a_monocle_as_an_old-fashioned_bo_b19c0c11-8903-4eb9-8f17-ce7004c1fdd4.png?width=1051&height=1051", //todo take a screenshot
		fullStack: false,
	},
	{
		Id: 5,
		title: "Wall of Text",
		subtitle: "A Progressive Web Application text editor",
		description:
			" This app creates an object store and includes both Get and Put methods. It works on your desktop without an internet connection. It automatically saves content inside the text editor. It is bundled with webpack and cretes a service worker with workbox that caches static assets. It uses babel in order to use async/await and generates a manifest.json using WebpackPwaManifest plugi-in and can be installed as a PWA (Progressive Web Application).To build this PWA I started with an existing application found here: https://github.com/coding-boot-camp/cautious-meme.",
		repo: "https://github.com/MERN-ing-the-midnight-oil/PWA-Text-Editor ",
		deployed_URL: "https://damp-coast-38671.herokuapp.com/",
		image:
			"https://cdn.midjourney.com/c07d972b-8931-4161-9b7b-e3618d096e84/grid_0.png",
		fullStack: false,
	},
	{
		Id: 6,
		title: "Mail-Me-Seeds",
		subtitle: "A full stack web application",
		description:
			"This app shows that I can collaborate to design, build, and deploy a full-stack web application. We used agile software development methods and a Git branching workflow to collaboratively develop this product. The concept was mine and demonstrates my creativity.",
		repo: "https://github.com/TheBluWiz/mail-me-seeds",
		deployed_URL: "https://mail-me-seeds.herokuapp.com/",
		image:
			"https://cdn.midjourney.com/dfc5bb94-1992-4f82-9c0e-ee38621a0bef/grid_0.png",
		fullStack: true,
	},
	{
		Id: 7,
		title: "Ro-Sham-Bots",
		subtitle: "A full stack web application",
		description:
			"A team-building icebreaker where colleagues solve puzzles together",
		repo: "https://github.com/katbakr/beat-the-bots",
		deployed_URL: "https://beat-the-bots.herokuapp.com/",
		image:
			"https://cdn.midjourney.com/a7dd1cb8-0fe2-4f21-be44-6967b38b15b7/grid_0.png",
		fullStack: true,
	},
];

const Portfolio = () => {
	const fullStackProjects = projects.filter((projekt) => projekt.fullStack);
	const nonFullStackProjects = projects.filter((projekt) => !projekt.fullStack);
	return (
		<div>
			<h1>Live web applications</h1>
			{fullStackProjects.map((projekt) => (
				<div class="d-inline-flex p-2">
					<Card className="project-card square border border-3">
						<img
							src={projekt.image}
							className="project-img"
							alt="..."
						/>
						<Card.Body
							//p-3 and mb-2 are padding and margin from bootstrap
							className="p-3 mb-2 hideable project-content"
							// style={{ backgroundColor: "#606c38" }}
						>
							<Card.Title>{projekt.title}</Card.Title>
							<Card.Subtitle
								className="mb-2"
								style={{ color: "#dda15e" }}>
								{projekt.subtitle}
							</Card.Subtitle>
							<Card.Text>{projekt.description}</Card.Text>
							<a
								className="card-link App-link"
								href={projekt.repo}>
								Repository
							</a>
							<Card.Link
								className="App-link"
								href={projekt.deployed_URL}>
								Deployed
							</Card.Link>
						</Card.Body>
					</Card>
				</div>
			))}
			<h2>Demonstration projects </h2>
			{nonFullStackProjects.map((projekt) => (
				<div class="d-inline-flex p-2">
					<Card className="project-card square border border-3">
						<img
							src={projekt.image}
							className="project-img"
							alt="..."
						/>
						<Card.Body
							//p-3 and mb-2 are padding and margin from bootstrap
							className="p-3 mb-2 hideable project-content"
							// style={{ backgroundColor: "#606c38" }}
						>
							<Card.Title>{projekt.title}</Card.Title>
							<Card.Subtitle
								className="mb-2"
								style={{ color: "#dda15e" }}>
								{projekt.subtitle}
							</Card.Subtitle>
							<Card.Text>{projekt.description}</Card.Text>
							<a
								className="card-link App-link"
								href={projekt.repo}>
								Repository
							</a>
							<Card.Link
								className="App-link"
								href={projekt.deployed_URL}>
								Deployed
							</Card.Link>
						</Card.Body>
					</Card>
				</div>
			))}
		</div>
	);
};

export default Portfolio;

//https://www.w3schools.com/bootstrap4/bootstrap_cards.asp
