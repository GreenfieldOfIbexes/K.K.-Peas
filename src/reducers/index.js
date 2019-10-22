import { combineReducers } from "redux";
import mainProduct from "./mainProduct.js";
import relatedProducts from "./relatedProducts.js";

var rootReducer = combineReducers({
	mainProduct,
	relatedProducts,
});

export default rootReducer;
