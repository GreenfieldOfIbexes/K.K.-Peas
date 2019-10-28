const reviews = (state = {}, action) => {
	switch (action.type) {
		case "GET_REVIEWS":
			return Object.assign(
				{},
				state,
				{
					...action
				},
			);
		default:
			return state;
	}
};

export default reviews
