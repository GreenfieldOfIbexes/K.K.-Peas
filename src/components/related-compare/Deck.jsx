import React from "react";
import Card from "./Card.jsx";

const Deck = (props) => {
	if (props.products[0].name === "") {
		return (
			<button
				onClick={() => {
					props.updateRelated([2, 3, 8, 7]);
				}}>
				Update Related Products
			</button>
		);
	}
	return (
		<>
			<button
				onClick={() => {
					props.updateRelated([2, 3, 8, 7]);
				}}>
				Update Related Products
			</button>
			{props.products.map((product) => (
				<Card product={product} />
			))}
		</>
	);
};

export default Deck;
