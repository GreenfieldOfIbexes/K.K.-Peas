import React from "react";
import CardContainer from "../../containers/CardContainer.js";
import Comparison from "./Comparison.jsx";

const Deck = (props) => {
	console.log(props);
	return (
		<>
			{props.products.map((product) => (
				<CardContainer product={product} />
			))}
			<Comparison
				mainProduct={props.mainProduct}
				compareProduct={props.products[0]}
			/>
		</>
	);
};

export default Deck;
