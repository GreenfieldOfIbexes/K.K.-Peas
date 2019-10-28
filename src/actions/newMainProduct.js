import axios from "axios";
import constants from "../constants.js";
import getProductInfo from "./getProductInfo.js";
import getQuestions from "./getQuestions.js";
import getReviews from "./getReviews.js";
import getRelatedProducts from "./getRelatedProducts.js";

const newMainProduct = (product) => {
	return async (dispatch) => {
		let productId;

		if (typeof product === "string" || typeof product === "number") {
			productId = Number(product);
			product = getProductInfo(productId);
		} else {
			productId = product.id;
		}
		dispatch(getQuestions(productId, 0));
		dispatch(getReviews(productId, 0));
		dispatch(getRelatedProducts(productId));

		dispatch({
			type: "MAIN_PRODUCT_INFO",
			productDetails: await product,
		});
	};
};

export default newMainProduct;
