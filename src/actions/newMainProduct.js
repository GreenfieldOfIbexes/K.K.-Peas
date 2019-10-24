import axios from "axios";
import constants from "../constants.js";
import getProductInfo from "./makeProductObj-possibleRefile.js";

const newMainProduct = (productId) => async (dispatch) => {
	const productInfo = await getProductInfo(productId);
	dispatch({
		type: "NEW_MAIN_PRODUCT",
		...productInfo
	});
};

export default newMainProduct;
