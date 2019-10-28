import getProductInfo from "./getProductInfo.js";
import initialState from "../reducers/initialState.js";
import axios from "axios";
import constants from "../constants.js";

const getRelatedProducts = (mainProductID) => async (dispatch) => {
	let relatedProductIds;
	try {
		relatedProductIds = await axios.get(
			`${constants.API_URL}/products/${mainProductID}/related`,
		);
	} catch (err) {
		console.error(err);
		relatedProductIds = [];
	}
	let relatedProducts = relatedProductIds.data.map((id) => {
		return getProductInfo(id);
	});

	Promise.all(relatedProducts)
		.then((products) => {
			dispatch({ type: "GET_RELATED_PRODUCTS", products: products });
		})
		.catch((err) => {
			console.error(err);
			dispatch({ type: "GET_RELATED_PRODUCTS", products: [] });
		});
};

export default getRelatedProducts;
