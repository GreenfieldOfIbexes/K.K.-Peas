import { combineReducers } from "redux";
import mainProduct from "./mainProduct.js";
import relatedProducts from "./relatedProducts.js";
import questions from "./questions.js";
import reviews from "./reviews.js";
import outfitProducts from "./outfitProducts.js";
import view from "./view.js";
import reviews from './reviews.js';

var rootReducer = combineReducers({
	mainProduct,
	relatedProducts,
	reviews,
	outfitProducts,
	questions,
	view,
});

export default rootReducer;
