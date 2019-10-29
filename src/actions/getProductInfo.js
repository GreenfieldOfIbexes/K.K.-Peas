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
		axios.get(`${constants.API_URL}/reviews/${productId}/meta`),
	);

	try {
		const productInfo = await Promise.all(productPromises);
		const generalInfo = productInfo[0].data;
		const styles = productInfo[1].data;
		const reviewMetadata = productInfo[2].data;
		product = {
			...generalInfo,
			styles,
			reviewMetadata,
			avgRating: getAvgRating(reviewMetadata.ratings),
		};
	} catch (err) {
		console.error(err);
		product = initialState.emptyProduct;
	}
	return product;
};

function ratingsCount(ratings) {
	var count = 0;
	for (var i = 1; i <= 5; i++) {
		if (ratings[i] === undefined) {
			continue;
		} else {
			count += ratings[i];
		}
	}
	return count;
}

function getAvgRating(ratings) {
	var totalStars = 0;
	for (var i = 1; i <= 5; i++) {
		if (ratings[i] === undefined) {
			continue;
		} else {
			totalStars += ratings[i] * i;
		}
	}
	const totalRatings = ratingsCount(ratings);
	return totalStars / totalRatings;
}

export default getProductInfo;
