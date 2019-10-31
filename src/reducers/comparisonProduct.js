import Redux from "redux";
import initialState from "./initialState.js";

const comparisonProduct = (state = initialState.emptyProduct, action) => {
	switch (action.type) {
		case "NEW_COMPARISON_PRODUCT":
			return action.product;
		default:
			return state;
	}
};

export default comparisonProduct;
