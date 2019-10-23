import { combineReducers } from "redux";
import mainProduct from "./mainProduct.js";
import relatedProducts from "./relatedProducts.js";
import view from "./view.js";

var rootReducer = combineReducers({
	mainProduct,
	relatedProducts,
	view,
});

export default rootReducer;
