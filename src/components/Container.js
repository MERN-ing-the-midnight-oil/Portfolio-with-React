//container.js renders the whole page view- NavTabs, Current Page, and Footer
//current page is AboutMe, Portfolio, Contact, or Resume components depending on the currentPage state. What changes the currentPage state? handlePageChange sends a parameter over.

import React, { useState } from "react";
import NavTabs from "./NavTabs";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./Footer";

//export default function Container() {
export default function Container() {
	const [currentPage, setCurrentPage] = useState("aboutMe"); //default state

	// This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
	const renderPage = () => {
		if (currentPage === "aboutMe") {
			return <AboutMe />;
		}
		if (currentPage === "portfolio") {
			return <Portfolio />;
		}
		if (currentPage === "contact") {
			return <Contact />;
		}
		return <Resume />;
	};

	const handlePageChange = (page) => setCurrentPage(page); //handlePageChange passes a parameter to setCurrentPage in order to change the state

	return (
		//	<div class="p-3 mb-2 bg-dark text-white min-vh-100">
		<div
			className="p-3 mb-2 min-vh-100 bodystyle"
			id="bodystyle">
			{/* // style={{ backgroundColor: "#283618", color: "#fefae0" }} */}
			{/* We are passing the currentPage from state and the function to update it */}
			<NavTabs
				currentPage={currentPage}
				handlePageChange={handlePageChange}
			/>
			{/* Here we are calling the renderPage method which will return a component  */}
			{renderPage()}
			<Footer />
		</div>
	);
}
