const reviews = (state = initialState.mainProduct.reviews, action) => {
	switch (action.type) {
		case "GET_REVIEWS":
			return Object.assign(
				{},
				state,
				{
					reviews: action.reviews
				},
			);
		default:
			return state;
	}
};

export default reviews
