import React from "react";

const ResumeContent = () => {
	return (
		<div>
			<h2>Education</h2>
			<ul>
				<li>
					Certificate in Full Stack Web Dev. - Univ. Washington Continuing
					Education, Seattle WA.
				</li>
				<li>
					Master of Arts in Teaching - University of Alaska Southeast, Juneau
					AK.
				</li>
				<li>
					Bachelor of Science in Oceanography - Cal Poly Humboldt, Arcata, CA.
					English department honors for written portfolio. Minor in Studio Art.
				</li>
			</ul>

			<h2>Technical Skills</h2>
			<p>
				Ideation, Wireframing, Github, Git version control, HTML/CSS, Bootstrap,
				React.js, Node.js, Express.js, RESTful API design, Insomnia, SQL, NoSQL
				(MongoDB), MongoDB Compass.
			</p>

			<h2 className="projects-header">Projects</h2>

			<div className="projects">
				<div className="project">
					<h3
						className="project-header"
						style={{ fontStyle: "italic" }}>
						What-to-Watch
					</h3>

					<p className="project-description">
						Allows users to find a movie fitting multiple genres. Love horror,
						comedy, and also animation? Our app suggests watching “The House”
						which received 7.1/10 stars on IMDB.
					</p>
					<p className="project-role">
						Role in project: Concept Ideation, API fetch requests, movie data
						parsing and rendering.
					</p>
					<p className="project-technologies">
						Technologies Used: Git branching workflow, agile development,
						client-side web app.
					</p>
					<p>
						Code repository:{" "}
						<a
							href="https://github.com/hayni100/Movie-Recs"
							className="project-link">
							https://github.com/hayni100/Movie-Recs
						</a>
					</p>
				</div>

				<div className="project">
					<h3
						className="project-header"
						style={{ fontStyle: "italic" }}>
						Mail-Me-Seeds
					</h3>

					<p className="project-description">
						Allows gardeners to share expensive plant seeds with other gardeners
						instead of letting leftovers expire. Does any one person really need
						to plant 50 kale plants?
					</p>
					<p className="project-role">
						Role in project: Concept Ideation, Models, Views.
					</p>
					<p className="project-technologies">
						Technologies Used: Node.js and Express.js; Handlebars.js. MySQL &
						Sequelize, Express-session
					</p>
					<p>
						Code repository:{" "}
						<a
							href="https://github.com/TheBluWiz/mail-me-seeds"
							className="project-link">
							https://github.com/TheBluWiz/mail-me-seeds
						</a>
					</p>
				</div>

				<div className="project">
					<h3
						className="project-header"
						style={{ fontStyle: "italic" }}>
						Ro-sham-boTS
					</h3>

					<p className="project-description">
						A full-stack team-building web app where users communicate in real
						time to suss out the predictable play habits of robot opponents who
						love mocking human beings.
					</p>
					<p className="project-role">
						Role in project: Ideation, mockup design, login/signup utils,
						schemas, typeDefs, Resolvers.
					</p>
					<p className="project-technologies">
						Technologies Used: MongoDB, GraphQL, Express.js and Node.js, React,
						JWT-based user authentication.
					</p>
					<p>
						Code repository:{" "}
						<a
							href="https://github.com/katbakr/beat-the-bots"
							className="project-link">
							https://github.com/katbakr/beat-the-bots
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default function Resume() {
	return (
		<div className="container">
			<div className="header">
				<h1 className="name">Rhys Smoker</h1>
				<p className="contact-info">Bellingham, WA</p>
				<p className="contact-info">Email: r.smoker@gmail.com</p>
				<p className="contact-info">
					LinkedIn:{" "}
					<a
						href="https://www.linkedin.com/in/rhys-smoker/"
						className="contact-link">
						https://www.linkedin.com/in/rhys-smoker/
					</a>
				</p>
				<p className="contact-info">
					Github:{" "}
					<a
						href="https://github.com/MERN-ing-the-midnight-oil"
						className="contact-link">
						https://github.com/MERN-ing-the-midnight-oil
					</a>
				</p>
				<p className="contact-info">
					Portfolio:{" "}
					<a
						href="https://MERN-ing-themidnight-oil.github.io/Portfolio-with-React/"
						className="contact-link">
						https://MERN-ing-themidnight-oil.github.io/Portfolio-with-React/
					</a>
				</p>
			</div>

			<h2>Summary</h2>
			<p>
				Dedicated software developer with a background in education, passionate
				about creating intuitive user experiences. Skilled in full-stack web
				development with a focus on unique and memorable user experiences.
				Strong collaborator with a creative approach to problem-solving,
				track-record of building intuitive and entertaining full-stack projects
				from ideation to execution.
			</p>

			<ResumeContent />

			<div className="button-container">
				<button className="button">
					<a
						className="button-link"
						href="RhysDev.pdf"
						download="Resume_Rhys J Smoker.pdf">
						Download This Resume (PDF)
					</a>
				</button>
			</div>
		</div>
	);
}
