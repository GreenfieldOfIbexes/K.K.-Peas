import Redux from "redux";
import initialState from "./initialState";

const relatedProducts = (state = initialState.relatedProducts, action) => {
	switch (action.type) {
		case "GET_RELATED_PRODUCTS":
			return action.products;
		default:
			return state;
	}
};

export default relatedProducts;
