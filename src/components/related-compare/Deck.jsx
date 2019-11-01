import React from "react";
import CardContainer from "../../containers/CardContainer.js";
import ComparisonContainer from "../../containers/ComparisonContainer.js";
import "./Deck.css";

const Deck = (props) => {
	return (
		<div className="deck card-deck">
			{props.products.map((product) => (
				<CardContainer
					product={product}
					class="card"
					icon="star"
					key={product.id}
				/>
			))}
			{/* <ComparisonContainer /> */}
		</div>
	);
};

export default Deck;
