const metaData = (state = {}, action) => {
	switch (action.type) {
		case "GET_META_DATA":
			return  action.metaData
		default:
			return state;
	}
};

export default metaData;
