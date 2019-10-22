const relatedProduct = {
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
			sale_price: "",
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

const mainProduct = Object.assign({}, relatedProduct, {
	avgReview: 0,
});

const initialState = {
	mainProduct,
	relatedProduct,
};

export default initialState;
