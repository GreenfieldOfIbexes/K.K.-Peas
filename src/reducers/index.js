import { combineReducers } from "redux";
import mainProduct from "./mainProduct.js";
import relatedProducts from "./relatedProducts.js";
import productQuestions from "./questions.js";

var rootReducer = combineReducers({
	mainProduct,
	relatedProducts,
	productQuestions,
});

export default rootReducer;
