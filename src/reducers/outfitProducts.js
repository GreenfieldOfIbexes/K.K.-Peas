import initialState from "./initialState.js";
import Redux from "redux";

const outfitProducts = (state = initialState.outfitProducts, action) => {
	let outfits;
	switch (action.type) {
		case "UPDATE_OUTFIT":
			outfits = state.slice();
			outfits.push(action.product);
			return outfits;
		case "CLEAR_OUTFIT":
			return initialState.outfitProducts;
		case "REMOVE_FROM_OUTFIT":
			outfits = state.slice();
			return outfits.filter((outfit) => {
				return outfit.id !== action.payload;
			});
		default:
			return state;
	}
};

export default outfitProducts;
