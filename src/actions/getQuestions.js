import Axios from "axios";
import constants from "../constants";
import getProductInfo from "./getProductInfo.js";
import initialState from "../reducers/initialState.js";

const getQuestions = (productID, pages) => async (dispatch) => {
	let productQuestions;

	try {
		productQuestions = await Axios.get(`${constants.API_URL}/qa/${productID}`);
	} catch (err) {
		console.error(err);
		productQuestions = { product_id: 0, results: [] };
	}
	// Axios.get(`${constants.API_URL}/qa/${productID}`);
	dispatch({ type: "UPDATE_QUESTIONS", questions: productQuestions.data });
};

export default getQuestions;
