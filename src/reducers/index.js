import { combineReducers } from "redux";
import mainProduct from "./mainProduct.js";
import relatedProducts from "./relatedProducts.js";
import productQuestions from "./questions.js";
import view from "./view.js";
import reviews from './reviews.js';

var rootReducer = combineReducers({
	mainProduct,
	relatedProducts,
	productQuestions,
	reviews,
	view,
});

export default rootReducer;
