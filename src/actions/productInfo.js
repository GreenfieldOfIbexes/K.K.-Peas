import axios from "axios";
import constants from "../constants.js";
import getProductInfo from "./makeProductObj-possibleRefile.js";

const mainProductInfo = (productId) => async (dispatch) => {
	const productInfo = await getProductInfo(productId);
	dispatch({
		type: "MAIN_PRODUCT_INFO",
		productDetails: productInfo,
	});
};

export default mainProductInfo;
