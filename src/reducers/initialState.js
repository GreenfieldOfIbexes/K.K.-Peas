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

const mainProduct = Object.assign({}, emptyProduct, {
	avg_review: 0,
});

const view = {
	thumbnail_index: 0,
};

const initialState = {
	mainProduct,
	relatedProduct,
	view,
};

export default initialState;
