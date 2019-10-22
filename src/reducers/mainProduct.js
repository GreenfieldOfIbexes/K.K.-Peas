import Redux from "redux";
import initialState from "./initialState";

const getAvgRating = (ratings) => {
	const totalStars =
		ratings[1] +
		ratings[2] * 2 +
		ratings[3] * 3 +
		ratings[4] * 4 +
		ratings[5] * 5;
	const totalVotes =
		ratings[0] + ratings[1] + ratings[2] + ratings[3] + ratings[4] + ratings[5];
	return totalStars / totalVotes;
};

const mainProduct = (state = initialState.mainProduct, action) => {
	switch (action.type) {
		case "NEW_MAIN_PRODUCT":
			return Object.assign({}, state, {
				...action.productObj,
				styles: action.styles.results,
				avgReview: getAvgRating(action.reviewMetaData.ratings),
			});
		default:
			return state;
	}
};

export default mainProduct;
