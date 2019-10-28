import Redux from "redux";
import initialState from "./initialState";

const mainProduct = (state = initialState.mainProduct, action) => {
	switch (action.type) {
		case "MAIN_PRODUCT_INFO":
			return action.productDetails;
		default:
			return state;
	}
};

export default mainProduct;
