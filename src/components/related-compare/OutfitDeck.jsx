import React from "react";
import CardContainer from "../../containers/CardContainer.js";
import ComparisonContainer from "../../containers/ComparisonContainer.js";
import "./OutfitDeck.jsx";
import "./Deck.css";

const Deck = (props) => {
	return (
		<div className="deck card-deck">
			{props.products.map((product) => (
				<CardContainer
					product={product}
					class="card"
					icon="clear"
					key={product.id}
				/>
			))}
		</div>
	);
};

export default Deck;
