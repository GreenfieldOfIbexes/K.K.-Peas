import React from "react";
import CardContainer from "../../containers/CardContainer.js";
import Comparison from "./Comparison.jsx";
import "./Deck.css";
import { Card } from "@material-ui/core";

const Deck = (props) => {
	console.log(props);
	return (
		<div class="deck">
			{props.products.map((product) => (
				<CardContainer product={product} class="card" />
			))}
			<Comparison
				mainProduct={props.mainProduct}
				compareProduct={props.products[0]}
			/>
		</div>
	);
};

export default Deck;
