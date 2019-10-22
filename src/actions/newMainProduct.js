import axios from "axios";
import constants from "../constants.js";

const newMainProduct = (productId) => async (dispatch) => {
	let productObj = await axios.get(
		`${constants.API_URL}/products/${productId}`,
	);
	let styles = await axios.get(
		`${constants.API_URL}/products/${productId}/styles`,
	);
	let reviews = await axios.get(
		`${constants.API_URL}/reviews/${productId}/list`,
	);
	let reviewMetaData = await axios.get(
		`${constants.API_URL}/reviews/${productId}/meta`,
	);
	dispatch({
		type: "NEW_MAIN_PRODUCT",
		productObj: productObj.data,
		styles: styles.data,
		reviews: reviews.data,
		reviewMetaData: reviewMetaData.data,
	});
};

export default newMainProduct;
