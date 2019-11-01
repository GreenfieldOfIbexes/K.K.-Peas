import axios from "axios";
import $ from "jquery";
import constants from "../constants.js";
import getProductInfo from "./getProductInfo.js";
import getQuestions from "./getQuestions.js";
import getReviews from "./getReviews.js";
import getMetaData from "./getMetaData.js";
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
		dispatch(getReviews(productId));
		dispatch(getRelatedProducts(productId));
		dispatch(getMetaData(productId));

		dispatch({
			type: "MAIN_PRODUCT_INFO",
			productDetails: await product,
		});

		// update the meta tags (used for social share)
		const { name, description, styles, id } = await product;
		$(`meta[property="og:description"]`).attr("content", description);
		$(`meta[property="og:title"]`).attr("content", name);
		$(`meta[property="og:image"]`).attr(
			"content",
			styles.results[0].photos[0].url,
		);
		$(`meta[property="og:url"]`).attr(
			"content",
			`${constants.HOST_ROOT}/?product=${id}`,
		);
	};
};

export default newMainProduct;
