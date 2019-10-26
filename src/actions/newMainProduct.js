import axios from "axios";
import constants from "../constants.js";
import getProductInfo from "./makeProductObj-possibleRefile.js";
import $ from "jquery";

const newMainProduct = (productId) => async (dispatch) => {
	const productInfo = await getProductInfo(productId);
	// dispatch the action object
	dispatch({
		type: "NEW_MAIN_PRODUCT",
		...productInfo,
	});
	// update the meta tags (used for social share)
	const { name, description, styles, id } = productInfo;
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

export default newMainProduct;
