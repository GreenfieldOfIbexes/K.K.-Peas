import store from "../store";

const newStyle = (index) => ({
	type: "NEW_STYLE",
	style_index: index,
	max_photo_index:
		store.getState().mainProduct.styles.results[index].photos.length - 1,
});

export default newStyle;
