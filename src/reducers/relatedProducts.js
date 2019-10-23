import Redux from "redux";
import initialState from "./initialState";

const relatedProducts = (state = [initialState.emptyProduct], action) => {
	switch (action.type) {
		case "UPDATE_RELATED_PRODUCTS":
			return action.relatedProducts;
		default:
			return state;
	}
};

export default relatedProducts;
