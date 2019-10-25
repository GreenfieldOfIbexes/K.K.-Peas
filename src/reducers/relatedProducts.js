import Redux from "redux";
import initialState from "./initialState";

const relatedProducts = (state = [initialState.emptyProduct], action) => {
	switch (action.type) {
		case "UPDATE_RELATED_PRODUCTS":
			let products = state.slice();
			if (products[0].name === "") {
				products = [];
			}
			products.push(action.product);
			return products;
		default:
			return state;
	}
};

export default relatedProducts;
