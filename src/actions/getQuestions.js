import Axios from "axios";
import constants from "../constants";
import getProductInfo from "./getProductInfo.js";
import initialState from "../reducers/initialState.js";

const getQuestions = (productID, pages = 1, count = 1000) => async (
	dispatch,
) => {
	let productQuestions;

	try {
		productQuestions = await Axios.get(
			`${constants.API_URL}/qa/${productID}?pages=${pages}&count=${count}`,
		);
	} catch (err) {
		console.error(err);
		productQuestions = initialState.questions;
	}
	dispatch({ type: "UPDATE_QUESTIONS", questions: productQuestions.data });
};

export default getQuestions;
