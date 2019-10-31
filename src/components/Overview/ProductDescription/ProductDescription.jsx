import React from "react";
import "./ProductDescription.css";

const ProductDescription = ({ description, features }) => {
	// Array of HTML for each feature key/value pair
	const featuresHTML = features.map((feature, index) => {
		if (feature.value !== "null") {
			return (
				<div className="feature" key={index}>
					<i className="material-icons">check</i>
					<span style={{ color: "transparent" }}>_</span>
					{feature.feature}
					{": "}
					{feature.value}
				</div>
			);
		}
	});

	// The component
	return (
		<div className="product-description">
			<div className="description">{description}</div>
			<div className="separator"></div>
			<div className="features">{featuresHTML}</div>
		</div>
	);
};

export default ProductDescription;
