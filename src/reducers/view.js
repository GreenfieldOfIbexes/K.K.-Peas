import Redux from "redux";
import initialState from "./initialState";
import store from "../store";

const view = (state = initialState.view, action) => {
	switch (action.type) {
		case "MAIN_PRODUCT_INFO":
			return Object.assign({}, state, {
				style_index: 0,
				max_picture_index:
					action.productDetails.styles.results[0].photos.length - 1,
			});
		case "THUMBNAIL_CLICK":
			return Object.assign({}, state, {
				picture_index: action.picture_index,
			});
		case "PICTURE_INDEX_CHANGE":
			return Object.assign({}, state, {
				picture_index: action.newIndex,
			});
		case "NEW_STYLE":
			return Object.assign({}, state, {
				style_index: action.style_index,
				max_picture_index: action.max_picture_index,
			});
		case "FULL_SCREEN_TOGGLE":
			return Object.assign({}, state, {
				fullscreen_picture: !state.fullscreen_picture,
				zoomed_in: false,
			});
		case "ZOOMED_IN":
			return Object.assign({}, state, {
				zoomed_in: !state.zoomed_in,
			});
		case "CAROUSEL_ARROW_CLICK":
			return Object.assign({}, state, {
				zoomed_in: false,
			});
		default:
			return state;
	}
};

export default view;
