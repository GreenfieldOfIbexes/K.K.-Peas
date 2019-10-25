import Redux from "redux";
import initialState from "./initialState";

function ratingsCount(ratings) {
	var count = 0;
	 for(var i=1; i <=5; i++){
		if(ratings[i] === undefined){
			continue;
		} else {
			count += (ratings[i])
		}
	}
	return count;
}

const getAvgRating = (ratings) => {
	var totalStars = 0;
	for(var i=1; i <=5; i++){
		if(ratings[i] === undefined){
			continue;
		} else {
			totalStars += (ratings[i] * i)
		}
	}
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
