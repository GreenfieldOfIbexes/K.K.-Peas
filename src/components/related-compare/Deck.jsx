import React from "react";
import Card from "./Card.jsx";

const Deck = (props) => {
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
