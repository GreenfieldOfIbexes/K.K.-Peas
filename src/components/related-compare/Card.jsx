import React from "react";
import Stars from "../R_R/Stars.jsx";

//TO-DO: implement sale price formatting
const Card = (props) => {
	return (
		<>
			<img src={props.product.styles.results[0].photos[0].thumbnail_url} />
			<p>{props.product.category}</p>
			<h2>{props.product.name}</h2>
			<p>{"$" + props.product.styles.results[0].original_price} </p>
			<Stars />
		</>
	);
};

export default Card;
