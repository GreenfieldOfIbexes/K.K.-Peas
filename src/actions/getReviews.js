import getProductInfo from "./getProductInfo.js";
import initialState from "../reducers/initialState.js";

const getReviews = (productID, pages) => (dispatch) => {
	dispatch({ type: "UPDATE_REVIEWS", questions: [] });
};

export default getReviews;
