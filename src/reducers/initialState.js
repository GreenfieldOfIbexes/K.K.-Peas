const emptyProduct = {
	id: 0,
	name: "",
	slogan: "",
	description: "",
	category: "",
	default_price: 0,
	features: [
		{
			feature: "",
			value: "",
		},
	],
	styles: [
		{
			style_id: 0,
			name: "",
			original_price: "",
			"default?": 0,
			photos: [
				{
					thumbnail_url: "",
					url: "",
				},
			],
			skus: {
				XS: 0,
			},
		},
	],
};

const mainProduct = Object.assign({}, emptyProduct, {
	avg_review: 0,
	reviews: {},
	reviewMetaData: {},
});

const view = {
	picture_index: 0,
	style_index: 0,
	max_picture_index: 0,
};

const initialState = {
	mainProduct,
	emptyProduct,
	view,
};

export default initialState;
