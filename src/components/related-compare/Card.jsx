import React from "react";
import Stars from "../R_R/Stars.jsx";
import newMainProduct from "../../actions/newMainProduct.js";
import store from "../../store.js";
import updateOutfit from "../../actions/updateOutfit.js";
import "./Card.css";
import $ from "jquery";

const Card = (props) => {
	let icon;
	let pricing;
	if (
		props.product.styles.results[0].sale_price <
		props.product.styles.results[0].original_price
	) {
		pricing = (
			<div className="pricing">
				<p className="crossout-price">
					{"$" + props.product.styles.results[0].original_price}
				</p>
				<p>{"$" + props.product.styles.results[0].sale_price}</p>
			</div>
		);
	} else {
		pricing = (
			<div className="pricing">
				<p>{"$" + props.product.styles.results[0].original_price}</p>
			</div>
		);
	}
	if (props.icon === "star") {
		icon = (
			<i
				className="material-icons"
				style={{ fontSize: "30px", color: "gold" }}
				onClick={() => {
					props.newComparisonProduct(props.product);
					document.getElementsByClassName("modalWindow")[0].style.display =
						"inline";
				}}>
				stars
			</i>
		);
	} else {
		icon = (
			<i
				className="material-icons"
				style={{ fontSize: "30px", color: "red" }}
				onClick={() => props.removeFromOutfit(props.product.id)}>
				clear
			</i>
		);
	}
	return (
		<div className="product-card">
			<div
				className="product-image"
				style={{
					backgroundImage: `url(${props.product.styles.results[0].photos[0].thumbnail_url})`,
				}}
			/>
			<div className="bottom-content">
				<p>{props.product.category}</p>
				<h2
					className="related-product-name"
					onClick={() => {
						props.newMainProduct(props.product);
						$("html, body").animate(
							{
								scrollTop: 0,
							},
							500,
						);
					}}>
					{props.product.name}
				</h2>
				{pricing}
				{icon}
				<Stars rating={props.product.avgRating} />
			</div>
		</div>
	);
};

export default Card;
