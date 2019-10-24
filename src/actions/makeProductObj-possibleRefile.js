import initialState from "../reducers/initialState.js";
import axios from "axios";
import constants from "../constants.js";

const getProductInfo = async (productId) => {
	let product;
	const productPromises = [];
	// productPromises should have the structure:
	// [info, styles, reviews, reviewMetaData, related]
	productPromises.push(axios.get(`${constants.API_URL}/products/${productId}`));
	productPromises.push(
		axios.get(`${constants.API_URL}/products/${productId}/styles`),
	);
	productPromises.push(
		axios.get(`${constants.API_URL}/reviews/${productId}/list`),
	);
	productPromises.push(
		axios.get(`${constants.API_URL}/reviews/${productId}/meta`),
	);
	productPromises.push(
		axios.get(`${constants.API_URL}/products/${productId}/related`),
	);
	productPromises.push(axios.get(`${constants.API_URL}/qa/${productId}`));
	const productInfo = await Promise.all(productPromises);
	try {
		product = {
			...productInfo[0].data,
			styles: productInfo[1].data,
			reviews: productInfo[2].data,
			reviewMetaData: productInfo[3].data,
			related: productInfo[4].data,
			questions: productInfo[5].data.results,
		};
	} catch (err) {
		console.error(err);
		product = initialState.emptyProduct;
	}
	return product;
};

export default getProductInfo;
