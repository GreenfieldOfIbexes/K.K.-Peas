import React from "react";
import Stars from "../R_R/Stars.jsx";
import newMainProduct from "../../actions/newMainProduct.js";
import store from "../../store.js";
import updateOutfit from "../../actions/updateOutfit.js";
import "./Card.css";

const Card = (props) => {
	let icon;
	let pricing;
	if (
		props.product.styles.results[0].sale_price <
		props.product.styles.results[0].original_price
	) {
		pricing = (
			<div class="pricing">
				<p class="crossout-price">
					{"$" + props.product.styles.results[0].original_price}
				</p>
				<p>{"$" + props.product.styles.results[0].sale_price}</p>
			</div>
		);
	} else {
		pricing = (
			<div class="pricing">
				<p>{"$" + props.product.styles.results[0].original_price}</p>
			</div>
		);
	}
	if (props.icon === "star") {
		icon = (
			<i
				class="material-icons"
				style={{ "font-size": "30px", color: "gold" }}
				onClick={() => props.newComparisonProduct(props.product)}>
				stars
			</i>
		);
	} else {
		icon = (
			<i
				class="material-icons"
				style={{ "font-size": "30px", color: "red" }}
				onClick={() => props.removeFromOutfit(props.product)}>
				clear
			</i>
		);
	}
	return (
		<div class="card">
			<img src={props.product.styles.results[0].photos[0].thumbnail_url} />
			<p>{props.product.category}</p>
			<h2>{props.product.name}</h2>
			{pricing}
			{icon}
			<button
				onClick={() => {
					props.updateOutfit(props.product);
				}}>
				Update Outfit
			</button>
			<Stars rating={props.product.avgRating} />
		</div>
	);
};

export default Card;
