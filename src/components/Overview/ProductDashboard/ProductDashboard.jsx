import React from "react";
import "./ProductDashboard.css";
import Stars from "../../R_R/Stars";
import ProductInteractionContainer from "../../../containers/Overview/ProductInteractionContainer";
import $ from "jquery";

// TODO: get reviews from store (should be done in the container) and add in the "read all # reviews" <p></p>
const ProductDashboard = ({
	mainProduct: { avg_review, category, name, styles, ratings_count },
	view,
}) => (
	<div className="product-dashboard">
		<div className="reviews wrapper">
			<Stars rating={avg_review} />{" "}
			<p
				className="all-reviews"
				onClick={() => {
					const R_R_position = $("#R_R").offset().top;
					$("html, body").animate(
						{
							scrollTop: R_R_position,
						},
						500,
					);
				}}>
				Read all {ratings_count} reviews
			</p>
		</div>
		<div className="category wrapper">{category}</div>
		<div className="product-name wrapper">{name}</div>
		<div className="price wrapper">
			Price:
			{typeof parseInt(styles[view.style_index].sale_price) === "number" ? (
				<div className="prices">
					<p className="sale-price">${styles[view.style_index].sale_price}</p>
					<p className="original-price struckthrough">
						${styles[view.style_index].original_price}
					</p>
				</div>
			) : (
				<div className="prices">
					<p className="original-price">
						${styles[view.style_index].original_price}
					</p>
				</div>
			)}
		</div>
		<ProductInteractionContainer />
	</div>
);

export default ProductDashboard;
