import React from "react";

const ResumeContent = () => {
	return <div>{/* Resume content goes here */}</div>;
};

export default function Resume() {
	return (
		<div>
			<button className="button">
				<a
					className="button"
					href="RhysDev.pdf"
					download="Resume_Rhys J Smoker.pdf">
					Download This Resume (PDF)
				</a>
			</button>
			<div className="resume-content">
				<ResumeContent />
				<div>
					<h1>Rhys Smoker</h1>
					<p>Bellingham, WA</p>
					<p>Phone: 907 209 8448 | Email: r.smoker@gmail.com</p>
					<p>
						LinkedIn:{" "}
						<a href="https://www.linkedin.com/in/rhys-smoker/">
							https://www.linkedin.com/in/rhys-smoker/
						</a>
					</p>
					<p>
						Github:{" "}
						<a href="https://github.com/MERN-ing-the-midnight-oil">
							https://github.com/MERN-ing-the-midnight-oil
						</a>
					</p>
					<p>
						Portfolio:{" "}
						<a href="https://MERN-ing-themidnight-oil.github.io/Portfolio-with-React/">
							https://MERN-ing-themidnight-oil.github.io/Portfolio-with-React/
						</a>
					</p>

					<h2>Summary</h2>
					<p>
						Dedicated software developer with a background in education,
						passionate about creating intuitive user experiences. Skilled in
						full-stack web development with a focus on unique and memorable user
						experiences. Strong collaborator with a creative approach to
						problem-solving, track-record of building intuitive and entertaining
						full-stack projects from ideation to execution.
					</p>

					<h2>Education</h2>
					<ul>
						<li>
							Certificate in Full Stack Web Dev. - Univ. Washington Continuing
							Education, Seattle WA.
						</li>
						<li>
							Master of Arts in Teaching - University of Alaska Southeast,
							Juneau AK.
						</li>
						<li>
							Bachelor of Science in Oceanography - Cal Poly Humboldt, Arcata,
							CA. English department honors for written portfolio. Minor in
							Studio Art.
						</li>
					</ul>

					<h2>Technical Skills</h2>
					<p>
						Ideation, Wireframing, Github, Git version control, HTML/CSS,
						Bootstrap, React.js, Node.js, Express.js, RESTful API design,
						Insomnia, SQL, NoSQL (MongoDB), MongoDB Compass.
					</p>

					<h2>Projects</h2>

					<h3>What-to-Watch</h3>
					<p>
						Allows users to find a movie fitting multiple genres. Love horror,
						comedy, and also animation? Our app suggests watching “The House”
						which received 7.1/10 stars on IMDB.
					</p>
					<p>
						Role in project: Concept Ideation, API fetch requests, movie data
						parsing and rendering.
					</p>
					<p>
						Technologies Used: Git branching workflow, agile development,
						client-side web app.
					</p>
					<p>
						Code repository:{" "}
						<a href="https://github.com/hayni100/Movie-Recs">
							https://github.com/hayni100/Movie-Recs
						</a>
					</p>

					<h3>Mail-Me-Seeds</h3>
					<p>
						Allows gardeners to share expensive plant seeds with other gardeners
						instead of letting leftovers expire. Does any one person really need
						to plant 50 kale plants?
					</p>
					<p>Role in project: Concept Ideation, Models, Views.</p>
				</div>
			</div>
		</div>
	);
}
