import React from "react";
import Card from "react-bootstrap/Card";

export default function Portfolio() {
	//array of portfolio objects including title, link to repo, etc
	const projects = [
		{
			Id: 1,
			title: "Employee Tracker!",
			subtitle:
				"A command-line app to manage a company's employee information.",
			description:
				"This app is a content managment system built from scratch using Node.js, Inquirer, and MySql.  ",
			repo: "https://github.com/Noctiluca-scintillans/Employee-Tracker",
			deployed_URL:
				"https://drive.google.com/file/d/1iJv_3YIaGsj8JPUmZd-GV1ZTAgd9grn9/view",
			image:
				"https://cdn.midjourney.com/1a351108-b045-4a0f-9a79-369ef60de8b9/grid_0.png",
			//"https://cdn.midjourney.com/a7657c2f-3653-4da3-9548-408758010429/grid_0.png", //todo
		},
		{
			Id: 2,
			title: "What's in your cart?",
			subtitle: "Building the back end for an existing e-commerce site",
			description:
				"The shows my mastery of ORM (Object-Relational Mapping). I took a working Express.js API and configured it to use Sequelize to interact with a MySQL database. Please note that the application is not deployed, and the deployed URL takes you to a walkthrough video.",
			repo: "https://github.com/Noctiluca-scintillans/E-Commerce-Back-End",
			deployed_URL:
				"https://drive.google.com/file/d/1LqEl-L1l1fmLKjAZYBI0TBsrN4bHrP-Z/view",
			image:
				"https://cdn.midjourney.com/c218358e-91e1-40da-b2ab-577c3fc9705d/grid_0.png",
		},
		{
			Id: 3,
			title: "Frog Blog with Handlebars",
			subtitle: "A Content Managment System built from scratch.",
			description:
				"This app demonstrates my use of the Model-View-Controller architechtural paradigm. It uses Handlebars.js as the templating language, Sequelize as the ORM(Object Relational Mapping), and the express-session npm package for authentification. ",
			repo: "https://github.com/Noctiluca-scintillans/MVC-Tech-Blog",
			deployed_URL: "https://dashboard.heroku.com/apps/stormy-gorge-58008",
			image:
				"https://cdn.midjourney.com/26486f35-6132-429c-8d55-914459f19111/grid_0.png", // TODO
		},
		{
			Id: 4,
			title: "Let's Network!",
			subtitle: "NoSQL Challenge: Social Network API",
			description:
				"This app shows that I can build and structure an API. I used Express.js for routing, a MongoDB database, and the Mongoose ODM. Please note that the `deployed` url will take you to a walk-through video as the APP is not actually deployed. ",
			repo: "https://github.com/Noctiluca-scintillans/Social-Network-API",
			deployed_URL: "https://watch.screencastify.com/v/pOD8r52BeDaPn99UDrVn", //todo do a new walkthrough
			image:
				"https://media.discordapp.net/attachments/1042540591650717738/1083449688356835388/Rhys_Smoker_a_mongoose_wearing_a_monocle_as_an_old-fashioned_bo_b19c0c11-8903-4eb9-8f17-ce7004c1fdd4.png?width=1051&height=1051", //todo take a screenshot
		},
		{
			Id: 5,
			title: "Primative yet Progressive",
			subtitle: "A Progressive Web Application text editor",
			description:
				" This app creates an object store and includes both Get and Put methods. It works on your desktop without an internet connection. It automatically saves content inside the text editor. It is bundled with webpack and cretes a service worker with workbox that caches static assets. It uses babel in order to use async/await and generates a manifest.json using WebpackPwaManifest plugi-in and can be installed as a PWA (Progressive Web Application).To build this PWA I started with an existing application found here: https://github.com/coding-boot-camp/cautious-meme.",
			repo: "https://github.com/Noctiluca-scintillans/PWA-Text-Editor ",
			deployed_URL: "https://damp-coast-38671.herokuapp.com/",
			image:
				"https://cdn.midjourney.com/c07d972b-8931-4161-9b7b-e3618d096e84/grid_0.png",
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
		},
	];

	//a single project component used multiple tiems by .map
	//note: there are css classes for card, image, body, and title components
	return (
		<div>
			{projects.map((item) => (
				<div class="d-inline-flex p-2">
					<Card className="project-card square border border-3">
						<img
							src={item.image}
							className="project-img"
							alt="..."
						/>
						<Card.Body
							//p-3 and mb-2 are padding and margin from bootstrap
							className="p-3 mb-2 hideable project-content"
							// style={{ backgroundColor: "#606c38" }}
						>
							<Card.Title>{item.title}</Card.Title>
							<Card.Subtitle
								className="mb-2"
								style={{ color: "#dda15e" }}>
								{item.subtitle}
							</Card.Subtitle>
							<Card.Text>{item.description}</Card.Text>
							<a
								className="card-link App-link"
								href={item.repo}>
								Repository
							</a>
							<Card.Link
								className="App-link"
								href={item.deployed_URL}>
								Deployed App
							</Card.Link>
						</Card.Body>
					</Card>
				</div>
			))}
		</div>
	);
}
//https://www.w3schools.com/bootstrap4/bootstrap_cards.asp
