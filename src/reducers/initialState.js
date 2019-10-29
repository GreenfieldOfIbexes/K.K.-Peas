const relatedProducts = [];

const reviews = [];

const outfitProducts = [];

const questions = { product_id: 0, results: [] };

const emptyProduct = {
	reviewMetadata: {},
	avgRating: 0,
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
	styles: {
		product_id: 0,
		results: [
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
	},
};

const productQuestion = {
	question_id: 0,
	question_body: "???",
	question_date: "",
	asker_name: "",
	question_helpfulness: 0,
	reported: 0,
	answers: {},
};

const view = {
	picture_index: 0,
	style_index: 0,
	max_picture_index: 0,
	fullscreen_picture: false,
	zoomed_in: false,
};

const mainProduct = Object.assign({}, emptyProduct, {});

const initialState = {
	mainProduct,
	relatedProducts,
	reviews,
	outfitProducts,
	questions,
	view,
};

export default initialState;
