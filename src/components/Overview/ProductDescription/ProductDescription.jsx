import React from "react";
import "./ProductDescription.css";

const ProductDescription = ({ description, features }) => (
	<div className="product-description">
		<div className="description">{description}</div>
		<div className="separator"></div>
		<div className="features">
			{features.map((feature, index) => {
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
			})}
		</div>
	</div>
);

export default ProductDescription;
