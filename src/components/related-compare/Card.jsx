import React from "react";
import Stars from "../R_R/Stars.jsx";
import newMainProduct from "../../actions/newMainProduct.js";
import store from "../../store.js";
import updateOutfit from "../../actions/updateOutfit.js";

const Card = (props) => {
	return (
		<>
			<img src={props.product.styles.results[0].photos[0].thumbnail_url} />
			<p>{props.product.category}</p>
			<h2>{props.product.name}</h2>
			<p>{"$" + props.product.styles.results[0].original_price} </p>
			<button
				onClick={() => {
					props.newMainProduct(props.product);
				}}>
				Check it out!
			</button>
			<button
				onClick={() => {
					props.updateOutfit(props.product);
				}}>
				Update Outfit
			</button>
			<Stars />
		</>
	);
};

export default Card;
