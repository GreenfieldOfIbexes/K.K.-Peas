import React from "react";
import "./ProductDashboard.css";
import Stars from "../../R_R/Stars";
import ProductInteractionContainer from "../../../containers/Overview/ProductInteractionContainer";
import $ from "jquery";
import {
	FacebookShareButton,
	TwitterShareButton,
	PinterestShareButton,
} from "react-share";

// TODO: get reviews from store (should be done in the container) and add in the "read all # reviews" <p></p>
const ProductDashboard = ({
	mainProduct: { avgRating, category, name, styles, reviewMetadata },
	view,
}) => {
	const ratings_count = reviewMetadata.ratings
		? Object.values(reviewMetadata.ratings).reduce((a, b) => a + b, 0)
		: 0;

	return (
		<div
			className={
				view.fullscreen_photo
					? "product-dashboard fullscreen"
					: "product-dashboard"
			}>
			{ratings_count > 0 && (
				<div className="reviews wrapper">
					<Stars rating={avgRating} />{" "}
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
			)}
			<div className="category wrapper">{category}</div>
			<div className="product-name wrapper">{name}</div>
			<div className="price wrapper">
				Price:
				{typeof parseInt(styles.results[view.style_index].sale_price) ===
				"number" ? (
					<div className="prices">
						<p className="sale-price">
							${styles.results[view.style_index].sale_price}
						</p>
						<p className="original-price struckthrough">
							${styles.results[view.style_index].original_price}
						</p>
					</div>
				) : (
					<div className="prices">
						<p className="original-price">
							${styles.results[view.style_index].original_price}
						</p>
					</div>
				)}
			</div>
			<ProductInteractionContainer />
			<div className="social-buttons">
				<FacebookShareButton
					url={window.location.href}
					quote="my quote"
					hashtag="#myhashtag"
					children={<img src="assets/f_logo_RGB-Blue_100.png" />}
					className="social-icon"
				/>
				<TwitterShareButton
					url={window.location.href}
					title="my title"
					children={<img src="assets/Twitter_Social_Icon_Circle_Color.png" />}
					className="social-icon"
				/>
				<PinterestShareButton
					url={window.location.href}
					description={"my description"}
					children={<img src="assets/badgeRGB-244px.png" />}
					className="social-icon"
				/>
			</div>
		</div>
	);
};

export default ProductDashboard;
