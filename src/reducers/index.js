import { combineReducers } from "redux";
import mainProduct from "./mainProduct.js";
import relatedProducts from "./relatedProducts.js";
import questions from "./questions.js";
import reviews from "./reviews.js";
import outfitProducts from "./outfitProducts.js";
import view from "./view.js";
import metaData from "./metaData";
import comparisonProduct from "./comparisonProduct.js";

var rootReducer = combineReducers({
	mainProduct,
	relatedProducts,
	reviews,
	metaData,
	outfitProducts,
	questions,
	view,
	comparisonProduct,
});

export default rootReducer;
