import store from "../store";

const newStyle = (index) => ({
	type: "NEW_STYLE",
	style_index: index,
	max_picture_index:
		store.getState().mainProduct.styles[index].photos.length - 1,
});

export default newStyle;
