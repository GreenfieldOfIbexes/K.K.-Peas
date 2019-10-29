import initialState from "./initialState.js";
import Redux from "redux";

const outfitProducts = (state = initialState.outfitProducts, action) => {
	switch (action.type) {
		case "UPDATE_OUTFIT":
			const outfits = state.slice();
			outfits.push(action.product);
			return outfits;
		case "CLEAR_OUTFIT":
			return initialState.outfitProducts;
		default:
			return state;
	}
};

export default outfitProducts;
