import React from "react";
import "./ProductDashboard.css";
import Stars from "../../R_R/stars";
import ProductInteractionContainer from "../../../containers/Overview/ProductInteractionContainer";

// TODO: get reviews from store (should be done in the container) and add in the "read all # reviews" <p></p>
const ProductDashboard = ({
	mainProduct: { avg_review, category, name, styles },
	view,
}) => (
	<div className="product-dashboard">
		<div className="reviews container">
			<Stars rating={avg_review} />
		</div>
		<div className="category container">{category}</div>
		<div className="product-name conatiner">{name}</div>
		<div className="price container">
			Price:
			{typeof parseInt(styles[view.style_index].sale_price) === "number" ? (
				<div className="prices">
					<p className="sale-price">{styles[view.style_index].sale_price}</p>
					<p className="original-price struckthrough">
						{styles[view.style_index].original_price}
					</p>
				</div>
			) : (
				<div className="prices">
					<p className="original-price">
						{styles[view.style_index].original_price}
					</p>
				</div>
			)}
		</div>
		<ProductInteractionContainer />
	</div>
);

export default ProductDashboard;
