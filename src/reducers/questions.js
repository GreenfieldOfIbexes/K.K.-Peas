import Redux from "redux";
// import initialState from "./initialState";

const productQuestions = (state = { product_id: 0, results: [] }, action) => {
	switch (action.type) {
		case "NEW_MAIN_PRODUCT":
			// return action.questions;
			return Object.assign({}, state, action.questions);
		default:
			return state;
	}
};

export default productQuestions;
