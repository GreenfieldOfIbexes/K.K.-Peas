import React from "react";
import CardContainer from "../../containers/CardContainer.js";
import ComparisonContainer from "../../containers/ComparisonContainer.js";
import "./Deck.css";

const Deck = (props) => {
	return (
		<div class="deck">
			{props.products.map((product) => (
				<CardContainer product={product} class="card" icon="star" />
			))}
			<ComparisonContainer />
		</div>
	);
};

export default Deck;
