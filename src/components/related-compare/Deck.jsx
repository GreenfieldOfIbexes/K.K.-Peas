import React from "react";
import CardContainer from "../../containers/CardContainer.js";

const Deck = (props) => {
	return (
		<>
			{props.products.map((product) => (
				<CardContainer product={product} />
			))}
		</>
	);
};

export default Deck;
