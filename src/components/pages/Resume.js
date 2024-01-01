import React from "react";

export default function Resume() {
	return (
		<div className="container">
			<div className="resume-content">
				<div className="header centered">
					<h1 className="name">Rhys Smoker</h1>
					<p className="contact-info">Bellingham, WA</p>
					<p className="contact-info">
						Email:{" "}
						<a href="mailto:merning.the.midnight.oil@gmail.com">
							merning.the.midnight.oil@gmail.com
						</a>
					</p>
					<p className="contact-info">
						LinkedIn:{" "}
						<a href="https://www.linkedin.com/in/rhys-smoker/">
							https://www.linkedin.com/in/rhys-smoker/
						</a>
					</p>
					<p className="contact-info">
						GitHub:{" "}
						<a href="https://github.com/MERN-ing-the-midnight-oil">
							https://github.com/MERN-ing-the-midnight-oil
						</a>
					</p>
					<p className="contact-info">
						Portfolio:{" "}
						<a href="https://MERN-ing-the-midnight-oil.github.io/Portfolio-with-React/">
							https://MERN-ing-the-midnight-oil.github.io/Portfolio-with-React/
						</a>
					</p>
				</div>

				<h2>Summary</h2>
				<p>
					As a dedicated software developer with extensive experience in natural
					sciences, education, and customer service, I bring a complementary
					blend of skills to web development. I'm proficient in transforming
					imaginative concepts into intuitive and captivating experiences that
					leave users happy and engaged. My strong collaboration and leadership
					abilities and my proven track record of going the extra mile enable me
					to consistently exceed goals and expectations.
				</p>

				<h2>Education</h2>
				<ul className="education-list">
					<li className="education-item">
						<span>Full Stack Web Development Certificate - </span>
						<span className="right-align">
							University of Washington, Seattle, WA
						</span>
					</li>
					<li className="education-item">
						<span>Master of Arts in Teaching - </span>
						<span className="right-align">
							University of Alaska Southeast, Juneau AK
						</span>
					</li>
					<li className="education-item">
						<span>Bachelor of Science in Oceanography - </span>
						<span className="right-align">Cal Poly Humboldt, Arcata, CA</span>
					</li>
				</ul>

				<h2>Technical Skills</h2>
				<p>
					<strong>Front-End Development:</strong> HTML/CSS, Advanced CSS,
					React.js, Material UI, Bootstrap, jQuery, jQuery UI, Responsive
					Design, CSS Variables, Pseudo-Classes and Pseudo-Elements in CSS, CSS
					Resets, CSS Frameworks (including Google Fonts), JavaScript (ES6+
					Syntax), TypeScript, Wireframing, Formik.
				</p>
				<p>
					<strong>Back-End Development:</strong> Node.js, Express.js, RESTful
					API Design, GraphQL, Server-Side APIs, Authentication, Sequelize, JSON
					Web Tokens (JWT).
				</p>
				<p>
					<strong>Database Management:</strong> SQL, NoSQL, MongoDB Compass,
					IndexedDB.
				</p>
				<p>
					<strong>Programming Concepts:</strong> Object-Oriented Programming
					(OOP), Test-Driven Development, Model-View-Controller (MVC),
					Algorithms and Data Structures, Functional Programming.
				</p>
				<p>
					<strong>Development Tools:</strong> Git Version Control, GitHub,
					Insomnia, Command Line Usage, Workbox, Service Workers.
				</p>
				<p>
					<strong>Web Technologies:</strong> Web APIs, Third-Party APIs,
					Progressive Web Applications (PWA), Client-Side Storage.
				</p>
				<p>
					<strong>Frameworks and Libraries:</strong> MERN Stack (MongoDB,
					Express.js, React, Node.js), Redux, Moment.js.
				</p>

				<h2>Experience</h2>
				<div className="experience-section">
					<div className="experience-item">
						<h3>
							Full Stack Web Developer, University of Washington (Graduated
							March 2023)
						</h3>
						<p>
							Six-month certificate program with the School of Continuing
							Education designed to provide understanding of the essentials of
							web development using the MERN stack. Lecture and in-class
							exercises totaled 240 class hours with an additional 720 hours of
							expected out-of-class study and homework.
						</p>
					</div>

					<div className="experience-item">
						<h3>
							Educator, Bellingham Public School District, Washington
							(2016-2022)
						</h3>
						<ul>
							<li>
								Designed and taught Marine Ecology, Game Design, Coding,
								Robotics, Pre-Algebra, Astronomy, Neurobiology, Agricultural
								Economics, and other courses at Explorations Academy.
							</li>
							<li>
								Organized and co-led field orientations, backcountry camping
								trips, and field learning intensives.
							</li>
							<li>
								Served in an advising role with individual students (academic,
								personal, and career counseling).
							</li>
							<li>
								Worked one-on-one and in small groups giving support to students
								needing IEP services and behavioral supports in general
								education settings at Fairhaven Middle School.
							</li>
							<li>Substitute teacher for over 100 classrooms.</li>
						</ul>
					</div>

					<div className="experience-item">
						<h3>
							Agent, Dept of Education & Department of Transportation, Juneau
							(2010-2015)
						</h3>
						<ul>
							<li>
								Processed DOT driveway and encroachment permits and assisted
								with land acquisition.
							</li>
							<li>
								Led public informational sessions on DOT highway improvement
								projects and contacted the public to resolve right of way
								encroachment issues.
							</li>
							<li>
								Suggested, developed, and implemented a Keyhole Markup Language
								(KML) system to map paper-based driveway permit data to the
								precise geographic locations of driveways.
							</li>
							<li>
								Received “employee of the quarter” award from the Alaska
								Commission on Postsecondary Education in 2014.
							</li>
							<li>
								Counseled college students applying for or receiving loans,
								grants, and scholarships.
							</li>
							<li>
								Reset passwords and did troubleshooting for users of the Alaska
								Student Aid portal.
							</li>
						</ul>
					</div>

					<div className="experience-item">
						<h3>Educator, Juneau School District (2007-2011)</h3>
						<ul>
							<li>
								Taught Middle School Science and Math at Dzantik'i Heeni Middle
								School, Juneau AK.
							</li>
							<li>
								Student-taught Oceanography and Biology at Juneau Douglas High
								School.
							</li>
							<li>
								Provided one-on-one paraeducator support for special education
								students at Riverbend Elementary.
							</li>
						</ul>
					</div>

					<div className="experience-item">
						<h3>Fisheries Science, NMFS/NOAA (1999-2007)</h3>
						<ul>
							<li>
								Field Research assistant in ecosystems, social-ecological
								systems, and culture: Using systems perspectives to inform
								fisheries management in the Pribilof Islands, Alaska.
							</li>
							<li>
								Laboratory technician at NMFS fisheries genetics laboratory,
								Auke Bay Marine Lab, Juneau, AK.
							</li>
							<li>
								Participated in various research vessel expeditions, including
								multibeam swath mapping surveys and assisting with class
								projects like CTD profiling, hydrocasts, box cores, and plankton
								tows.
							</li>
						</ul>
					</div>
				</div>

				<h2>Links to Written Recommendations</h2>
				<ul>
					<li>
						<a href="https://github.com/MERN-ing-the-midnight-oil/Recommendations/blob/0e40461edfa528cf251da22aa6067a770f4d46a8/John%20Young.png">
							John Young
						</a>{" "}
						(University of Washington Bootcamp Primary Instructor)
					</li>
					<li>
						<a href="https://github.com/MERN-ing-the-midnight-oil/Recommendations/blob/0e40461edfa528cf251da22aa6067a770f4d46a8/BacchusTaylor.pdf">
							James Bacchus Taylor
						</a>{" "}
						(Head of School, Explorations Academy)
					</li>
					<li>
						<a href="https://github.com/MERN-ing-the-midnight-oil/Recommendations/blob/0e40461edfa528cf251da22aa6067a770f4d46a8/JasleenAulakh.pdf">
							Jasleen Aulaakh
						</a>{" "}
						(Teacher, Fairhaven Middle School)
					</li>
					<li>
						<a href="https://github.com/MERN-ing-the-midnight-oil/Recommendations/blob/0e40461edfa528cf251da22aa6067a770f4d46a8/JessicaFinstuen.pdf">
							Jessica Finstuen
						</a>{" "}
						(Teacher, Fairhaven Middle School)
					</li>
				</ul>

				<h2>Awards/Endorsements</h2>
				<ul>
					<li>
						Award of Excellence - Cal Poly Humboldt’s English Dept for a perfect
						score on a graduation writing portfolio.
					</li>
					<li>
						Recognition of Excellence Award - PRAXIS/ETS Elementary Education:
						Content Knowledge.
					</li>
					<li>
						Washington State Teaching Certificate Endorsements: English/Language
						Arts, Social Studies, Middle Level Mathematics, Elementary (k-8).
					</li>
				</ul>

				<div className="button-container">
					<button className="button">
						<a
							className="button-link"
							href={process.env.PUBLIC_URL + "/Rhys.pdf"}
							download="Rhys.pdf">
							Download This Resume (PDF)
						</a>
					</button>
				</div>
			</div>
		</div>
	);
}
