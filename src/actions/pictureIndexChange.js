const pictureIndexChange = (newIndex) => {
	return {
		type: "PICTURE_INDEX_CHANGE",
		newIndex,
	};
};

export default pictureIndexChange;
