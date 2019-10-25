import Redux from "redux";
import initialState from "./initialState";

function ratingsCount(ratings) {
	return ratings[1] + ratings[2] + ratings[3] + ratings[4] + ratings[5];
}

const getAvgRating = (ratings) => {
	const totalStars =
		ratings[1] +
		ratings[2] * 2 +
		ratings[3] * 3 +
		ratings[4] * 4 +
		ratings[5] * 5;
	const totalRatings = ratingsCount(ratings);
	return totalStars / totalRatings;
};

const mainProduct = (state = initialState.mainProduct, action) => {
	switch (action.type) {
		case "NEW_MAIN_PRODUCT":
			return Object.assign(
				{},
				state,
				{
					...action,
					avg_review: getAvgRating(action.reviewMetaData.ratings),
					ratings_count: ratingsCount(action.reviewMetaData.ratings),
				},
				{ styles: action.styles.results },
			);
		default:
			return state;
	}
};

export default mainProduct;
