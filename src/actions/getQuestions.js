import getProductInfo from "./getProductInfo.js";
import initialState from "../reducers/initialState.js";

const getQuestions = (productID, pages) => (dispatch) => {
	dispatch({ type: "UPDATE_QUESTIONS", questions: [] });
};

export default getQuestions;
