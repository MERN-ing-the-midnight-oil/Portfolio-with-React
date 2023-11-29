import React from "react";

const CustomCard = ({
	title,
	subtitle,
	description,
	repo,
	deployedURL,
	image,
}) => {
	return (
		<div className="custom-card">
			<a
				href={deployedURL}
				target="_blank"
				rel="noopener noreferrer">
				<img
					src={image}
					alt={title}
					className="custom-card-img"
				/>
			</a>
			<div className="custom-card-body">
				<h3 className="custom-card-title">{title}</h3>
				<h5 className="custom-card-subtitle">{subtitle}</h5>
				<p className="custom-card-text">{description}</p>
				<div className="custom-card-links-container">
					<a
						href={repo}
						className="custom-card-link"
						target="_blank"
						rel="noopener noreferrer">
						{repo ? "Repository" : "Repo URL Missing"}
					</a>
					<a
						href={deployedURL}
						className="custom-card-link"
						target="_blank"
						rel="noopener noreferrer">
						{deployedURL ? "Deployed" : "Deployed URL Missing"}
					</a>
				</div>
			</div>
		</div>
	);
};

export default CustomCard;
