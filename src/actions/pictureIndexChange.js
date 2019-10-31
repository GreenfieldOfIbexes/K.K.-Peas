const photoIndexChange = (newIndex) => {
	return {
		type: "photo_INDEX_CHANGE",
		newIndex,
	};
};

export default photoIndexChange;
