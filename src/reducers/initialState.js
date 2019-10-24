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

const productQuestion = {
	question_id: 0,
	question_body: "",
	question_date: "",
	asker_name: "",
	question_helpfulness: 0,
	reported: 0,
	answers: {},
};

const initialState = {
	mainProduct,
	relatedProduct,
	productQuestion,
};

export default initialState;
