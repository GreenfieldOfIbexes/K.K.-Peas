import Redux from "redux";
import initialState from "./initialState";

const productQuestions = (state = [initialState.productQuestion], action) => {
	switch (action.type) {
		case "NEW_MAIN_PRODUCT":
			return Object.assign({}, state, action.questions);
		default:
			return state;
	}
};

export default productQuestions;
