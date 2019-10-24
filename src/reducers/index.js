import { combineReducers } from "redux";
import mainProduct from "./mainProduct.js";
import relatedProducts from "./relatedProducts.js";
import productQuestions from "./questions.js";
import view from "./view.js";

var rootReducer = combineReducers({
	mainProduct,
	relatedProducts,
	productQuestions,
	view,
});

export default rootReducer;
