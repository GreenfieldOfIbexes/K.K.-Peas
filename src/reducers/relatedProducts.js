import Redux from "redux";
import initialState from "./initialState";

const relatedProducts = (state = [initialState.relatedProduct], action) => {
	switch (action.type) {
		case "":
			return;
		default:
			return state;
	}
};

export default relatedProducts;
