import Redux from "redux";
import initialState from "./initialState";

const relatedProducts = (state = [initialState.emptyProduct], action) => {
	switch (action.type) {
		case "":
			return;
		default:
			return state;
	}
};

export default relatedProducts;
