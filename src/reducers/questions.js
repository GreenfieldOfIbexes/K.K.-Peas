import Redux from "redux";
import initialState from "./initialState";

const questions = (state = [initialState.questions], action) => {
	switch (action.type) {
		case "UPDATE_QUESTIONS":
			return action.questions;
		default:
			return state;
	}
};

export default questions;
