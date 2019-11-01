import initialState from "./initialState.js";
import Redux from "redux";
import outfitFromStorage from "../actions/outfitFromStorage.js";

const outfitProducts = (state = outfitFromStorage(), action) => {
	switch (action.type) {
		case "UPDATE_OUTFIT":
			return action.payload;
		default:
			return state;
	}
};

export default outfitProducts;
