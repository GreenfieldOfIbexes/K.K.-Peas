const testProduct = {
	id: 10,
	name: "Infinity Stone",
	slogan:
		"Reality is often disappointing. That is, it was. Now, reality can be whatever I want.",
	description:
		"The Infinity Stones are six immensely powerful stone-like objects tied to different aspects of the universe, created by the Cosmic Entities. Each of the stones possesses unique capabilities that have been enhanced and altered by various alien civilizations for millennia.",
	category: "Accessories",
	default_price: "5000000",
	features: [],
	styles: {
		product_id: "10",
		results: [
			{
				style_id: 47,
				name: "Reality",
				original_price: "500000000",
				sale_price: "0",
				"default?": 1,
				photos: [
					{
						thumbnail_url:
							"https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/9b/Reality_Stone_VFX.png/revision/latest?cb=20190427012609",
						url:
							"https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/9b/Reality_Stone_VFX.png/revision/latest?cb=20190427012609",
					},
				],
				skus: { null: null },
			},
			{
				style_id: 48,
				name: "Space",
				original_price: "500000000",
				sale_price: "0",
				"default?": 0,
				photos: [
					{
						thumbnail_url:
							"https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/0/0a/Space_Stone_VFX.png/revision/latest?cb=20190427012702",
						url:
							"https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/0/0a/Space_Stone_VFX.png/revision/latest?cb=20190427012702",
					},
				],
				skus: { null: null },
			},
			{
				style_id: 49,
				name: "Time",
				original_price: "500000000",
				sale_price: "0",
				"default?": 0,
				photos: [
					{
						thumbnail_url:
							"https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/f/f0/Time_Stone_VFX.png/revision/latest?cb=20190427012724",
						url:
							"https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/f/f0/Time_Stone_VFX.png/revision/latest?cb=20190427012724",
					},
				],
				skus: { null: null },
			},
			{
				style_id: 50,
				name: "Power",
				original_price: "500000000",
				sale_price: "0",
				"default?": 0,
				photos: [
					{
						thumbnail_url:
							"https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/d/d7/Power_Stone_VFX.png/revision/latest?cb=20190427012543",
						url:
							"https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/d/d7/Power_Stone_VFX.png/revision/latest?cb=20190427012543",
					},
				],
				skus: { null: null },
			},
			{
				style_id: 51,
				name: "Mind",
				original_price: "500000000",
				sale_price: "0",
				"default?": 0,
				photos: [
					{
						thumbnail_url:
							"https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/e/e4/Mind_Stone_VFX.png/revision/latest?cb=20190427012504",
						url:
							"https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/e/e4/Mind_Stone_VFX.png/revision/latest?cb=20190427012504",
					},
				],
				skus: { null: null },
			},
			{
				style_id: 52,
				name: "Soul",
				original_price: "500000000",
				sale_price: "0",
				"default?": 0,
				photos: [{ thumbnail_url: null, url: null }],
				skus: { null: null },
			},
		],
	},
	reviewMetadata: {
		product_id: "10",
		ratings: {},
		recommended: {},
		characteristics: { Quality: { id: 34, value: null } },
	},
	avgRating: NaN,
};

// Corresponds to products related to product 1
const testRelatedProducts = [
	{
		id: 2,
		name: "Bright Future Sunglasses",
		slogan: "You've got to wear shades",
		description:
			"Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
		category: "Accessories",
		default_price: "69",
		features: [
			{ feature: "Lenses", value: "Ultrasheen" },
			{ feature: "UV Protection", value: "null" },
			{ feature: "Frames", value: "LightCompose" },
		],
		styles: {
			product_id: "2",
			results: [
				{
					style_id: 7,
					name: "Black Lenses & Black Frame",
					original_price: "69",
					sale_price: "0",
					"default?": 0,
					photos: [{ thumbnail_url: null, url: null }],
					skus: { null: null },
				},
				{
					style_id: 8,
					name: "Black Lenses & Gold Frame",
					original_price: "69",
					sale_price: "0",
					"default?": 1,
					photos: [{ thumbnail_url: null, url: null }],
					skus: { null: null },
				},
				{
					style_id: 9,
					name: "Gold Lenses & Black Frame",
					original_price: "69",
					sale_price: "0",
					"default?": 0,
					photos: [{ thumbnail_url: null, url: null }],
					skus: { null: null },
				},
				{
					style_id: 10,
					name: "Gold Lenses & Gold Frame",
					original_price: "69",
					sale_price: "0",
					"default?": 0,
					photos: [{ thumbnail_url: null, url: null }],
					skus: { null: null },
				},
			],
		},
		reviews: {
			product: "2",
			page: 0,
			count: 5,
			results: [
				{
					review_id: 4,
					rating: 4,
					summary: "They look good on me",
					recommend: 0,
					response: "",
					body: "I so stylish and just my aesthetic.",
					date: "2019-03-12T00:00:00.000Z",
					reviewer_name: "fashionperson",
					helpfulness: 6,
					photos: [],
				},
			],
		},
		reviewMetaData: {
			product_id: "2",
			ratings: { "2": 1, "3": 1, "4": 2, "5": 1 },
			recommended: { "0": 5 },
			characteristics: { Quality: { id: 5, value: "4.2000" } },
		},
		related: [3, 7, 6, 5],
		questions: [
			{
				question_id: 11,
				question_body: "Where does this product ship from?",
				question_date: "2018-01-06T00:00:00.000Z",
				asker_name: "jbilas",
				question_helpfulness: 24,
				reported: 0,
				answers: {
					"23": {
						id: 23,
						body: "It ships from the facility in Tulsa",
						date: "2018-01-06T00:00:00.000Z",
						answerer_name: "dschulman",
						helpfulness: 25,
						photos: [],
					},
					"31": {
						id: 31,
						body: "Mine was delivered from Oklahoma",
						date: "2018-01-06T00:00:00.000Z",
						answerer_name: "dschulman",
						helpfulness: 23,
						photos: [],
					},
				},
			},
			{
				question_id: 13,
				question_body: "What fabric is the bottom made of?",
				question_date: "2019-02-18T00:00:00.000Z",
				asker_name: "cleopatra",
				question_helpfulness: 7,
				reported: 0,
				answers: {
					"16": {
						id: 16,
						body: "Rubber",
						date: "2019-03-18T00:00:00.000Z",
						answerer_name: "Seller",
						helpfulness: 7,
						photos: [],
					},
					"35": {
						id: 35,
						body: "Its a rubber sole",
						date: "2019-03-18T00:00:00.000Z",
						answerer_name: "marcanthony",
						helpfulness: 7,
						photos: [],
					},
					"47": {
						id: 47,
						body: "The rubber on the bottom wears thin quickly",
						date: "2019-02-18T00:00:00.000Z",
						answerer_name: "marcanthony",
						helpfulness: 9,
						photos: [],
					},
				},
			},
			{
				question_id: 9,
				question_body:
					"I'm allergic to dye #17, does this product contain any?",
				question_date: "2019-01-24T00:00:00.000Z",
				asker_name: "l33tgamer",
				question_helpfulness: 6,
				reported: 0,
				answers: {
					"49": {
						id: 49,
						body: "Yes",
						date: "2019-11-24T00:00:00.000Z",
						answerer_name: "n00bgamer",
						helpfulness: 3,
						photos: [],
					},
				},
			},
			{
				question_id: 10,
				question_body: "Why is this product cheaper here than other sites?",
				question_date: "2018-04-24T00:00:00.000Z",
				asker_name: "toofast",
				question_helpfulness: 5,
				reported: 0,
				answers: {},
			},
			{
				question_id: 14,
				question_body: "Where is this product made?",
				question_date: "2018-10-04T00:00:00.000Z",
				asker_name: "jbilas",
				question_helpfulness: 4,
				reported: 0,
				answers: {
					"17": {
						id: 17,
						body: "China",
						date: "2018-08-04T00:00:00.000Z",
						answerer_name: "Seller",
						helpfulness: 8,
						photos: [],
					},
				},
			},
		],
	},
	{
		id: 3,
		name: "Morning Joggers",
		slogan: "Make yourself a morning person",
		description:
			"Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
		category: "Pants",
		default_price: "40",
		features: [
			{ feature: "Fabric", value: "100% Cotton" },
			{ feature: "Cut", value: "Skinny" },
		],
		styles: {
			product_id: "3",
			results: [
				{
					style_id: 11,
					name: "Black",
					original_price: "40",
					sale_price: "0",
					"default?": 1,
					photos: [
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1548133464-29abc661eb5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1548133464-29abc661eb5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1500340520802-1687634cbe38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1500340520802-1687634cbe38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1559304022-afbf28f53c4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1559304022-afbf28f53c4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1656&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1554921148-83d8ceda2095?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1554921148-83d8ceda2095?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
						},
					],
					skus: { XS: 8, S: 16, M: 17, L: 10, XL: 15, XXL: 6 },
				},
				{
					style_id: 12,
					name: "Grey",
					original_price: "40",
					sale_price: "0",
					"default?": 0,
					photos: [
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1562542082-519ebcdb43e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1562542082-519ebcdb43e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2057&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1562542132-8555e1b583f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1562542132-8555e1b583f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2057&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1562542096-218d8f9760bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1562542096-218d8f9760bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2057&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1562542119-19d015b93c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1562542119-19d015b93c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2057&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1516684810863-e49c82f1f092?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1516684810863-e49c82f1f092?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=965&q=80",
						},
						{
							thumbnail_url:
								'https://images.unsplash.com/photo-1490427712608-588e68359dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80\n49,13,"https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=fo',
							url:
								"https://images.unsplash.com/photo-1490427712608-588e68359dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
					],
					skus: { XS: 8, S: 16, M: 17, L: 10, XL: 15, XXL: 6 },
				},
				{
					style_id: 13,
					name: "Goldenrod",
					original_price: "40",
					sale_price: "35",
					"default?": 0,
					photos: [
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80",
						},
					],
					skus: { XS: 8, S: 16, M: 17, L: 10, XL: 15, XXL: 6 },
				},
				{
					style_id: 14,
					name: "Maroon",
					original_price: "40",
					sale_price: "35",
					"default?": 0,
					photos: [
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1519857609704-61e751edba25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1519857609704-61e751edba25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1499714832275-d6205d94c35d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1499714832275-d6205d94c35d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1549540806-76ce9007b674?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1549540806-76ce9007b674?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1532244769164-ff64ddeefa45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1532244769164-ff64ddeefa45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1554136920-a1df2909d8f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1554136920-a1df2909d8f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1541214880206-03318856c6c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1541214880206-03318856c6c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
						},
					],
					skus: { XS: 8, S: 16, L: 10, M: 17, XL: 15, XXL: 6 },
				},
				{
					style_id: 15,
					name: "Chartreuse",
					original_price: "40",
					sale_price: "25",
					"default?": 0,
					photos: [
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80",
						},
					],
					skus: { XS: 8, S: 16, M: 17, L: 10, XL: 15, XXL: 6 },
				},
				{
					style_id: 16,
					name: "White",
					original_price: "40",
					sale_price: "0",
					"default?": 0,
					photos: [
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1547257965-087be799b084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1547257965-087be799b084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1510390099355-23e690d8129d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1510390099355-23e690d8129d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1510217167326-549ae78e4738?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1510217167326-549ae78e4738?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1552904219-f4b87efe8792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1552904219-f4b87efe8792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1519241978701-4302ab53de1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1519241978701-4302ab53de1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
						},
					],
					skus: { S: 16, XS: 8, M: 17, L: 10, XL: 15, XXL: 6 },
				},
			],
		},
		reviews: { product: "3", page: 0, count: 5, results: [] },
		reviewMetaData: {
			product_id: "3",
			ratings: {},
			recommended: {},
			characteristics: {
				Fit: { id: 6, value: null },
				Length: { id: 7, value: null },
				Comfort: { id: 8, value: null },
				Quality: { id: 9, value: null },
			},
		},
		related: [5, 9, 7, 2, 1],
		questions: [
			{
				question_id: 24,
				question_body: "Where does this product ship from?",
				question_date: "2017-11-04T00:00:00.000Z",
				asker_name: "toofast",
				question_helpfulness: 24,
				reported: 0,
				answers: {
					"62": {
						id: 62,
						body: "Mine was delivered from Oklahoma",
						date: "2017-11-04T00:00:00.000Z",
						answerer_name: "toofast",
						helpfulness: 15,
						photos: [],
					},
					"73": {
						id: 73,
						body: "It ships from the facility in Tulsa",
						date: "2017-11-04T00:00:00.000Z",
						answerer_name: "toofast",
						helpfulness: 24,
						photos: [],
					},
				},
			},
			{
				question_id: 22,
				question_body: "Is this product sustainable?",
				question_date: "2018-09-04T00:00:00.000Z",
				asker_name: "cleopatra",
				question_helpfulness: 19,
				reported: 0,
				answers: {
					"25": {
						id: 25,
						body:
							"Its made from sustainable parts and manufactured in a green facility",
						date: "2018-10-04T00:00:00.000Z",
						answerer_name: "marcanthony",
						helpfulness: 19,
						photos: [],
					},
				},
			},
			{
				question_id: 25,
				question_body: "Where is this product made?",
				question_date: "2018-08-12T00:00:00.000Z",
				asker_name: "thegrimreaker",
				question_helpfulness: 9,
				reported: 0,
				answers: {
					"74": {
						id: 74,
						body: "Taiwan",
						date: "2018-09-12T00:00:00.000Z",
						answerer_name: "thegrimreaker",
						helpfulness: 0,
						photos: [],
					},
				},
			},
			{
				question_id: 17,
				question_body: "Does this product run big or small?",
				question_date: "2018-11-12T00:00:00.000Z",
				asker_name: "coolkid",
				question_helpfulness: 8,
				reported: 0,
				answers: {
					"18": {
						id: 18,
						body: "Runs small, I'd say",
						date: "2018-01-12T00:00:00.000Z",
						answerer_name: "warmkid",
						helpfulness: 9,
						photos: [],
					},
				},
			},
			{
				question_id: 19,
				question_body: "Why is this product cheaper here than other sites?",
				question_date: "2018-11-28T00:00:00.000Z",
				asker_name: "jbilas",
				question_helpfulness: 6,
				reported: 0,
				answers: {},
			},
		],
	},
	{
		id: 8,
		name: "YEasy 350",
		slogan: "Just jumped over jumpman",
		description:
			"These stretchy knit shoes show off asymmetrical lacing and a big sculpted rubber midsole. In a nod to adidas soccer heritage.",
		category: "Kicks",
		default_price: "450",
		features: [
			{ feature: "Sole", value: "Rubber" },
			{ feature: "Material", value: "FullControlSkin" },
			{ feature: "Stitching", value: "Double Stitch" },
		],
		styles: {
			product_id: "8",
			results: [
				{
					style_id: 37,
					name: "Zebra Stripe",
					original_price: "900",
					sale_price: "0",
					"default?": 0,
					photos: [
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
						{
							thumbnail_url:
								'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80\n250,37,"https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80',
							url:
								"https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1558014356-f7c41bc744f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1558014356-f7c41bc744f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1542818212-9899bafcb9db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1542818212-9899bafcb9db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1526&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1515110371136-7e393289662c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1515110371136-7e393289662c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1656&q=80",
						},
					],
					skus: {
						"7": 14,
						"8": 9,
						"9": 18,
						"10": 10,
						"11": 11,
						"12": 25,
						"7.5": 25,
						"8.5": 2,
						"9.5": 12,
						"10.5": 18,
						"11.5": 35,
					},
				},
				{
					style_id: 38,
					name: "Oreo",
					original_price: "750",
					sale_price: "0",
					"default?": 0,
					photos: [
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1520904549193-5ab0027b3fa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1520904549193-5ab0027b3fa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
						{
							thumbnail_url:
								'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80\n264,38,"https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80',
							url:
								"https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
					],
					skus: {
						"7": 14,
						"8": 9,
						"9": 18,
						"10": 10,
						"11": 11,
						"12": 25,
						"7.5": 25,
						"8.5": 2,
						"9.5": 12,
						"10.5": 18,
						"11.5": 35,
					},
				},
				{
					style_id: 39,
					name: "Red Supply",
					original_price: "450",
					sale_price: "0",
					"default?": 0,
					photos: [
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1473396413399-6717ef7c4093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1473396413399-6717ef7c4093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1558014356-f7c41bc744f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1558014356-f7c41bc744f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
						{
							thumbnail_url:
								'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80\n273,39,"https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80',
							url:
								"https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
					],
					skus: {
						"7": 14,
						"8": 9,
						"9": 18,
						"10": 10,
						"11": 11,
						"12": 25,
						"7.5": 25,
						"8.5": 2,
						"9.5": 12,
						"10.5": 18,
						"11.5": 35,
					},
				},
				{
					style_id: 40,
					name: "White",
					original_price: "450",
					sale_price: "0",
					"default?": 1,
					photos: [
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1505248254168-1de4e1abfa78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1505248254168-1de4e1abfa78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80",
						},
						{
							thumbnail_url:
								'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80\n283,40,"https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80',
							url:
								"https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
					],
					skus: {
						"7": 14,
						"8": 9,
						"9": 18,
						"10": 10,
						"11": 11,
						"12": 25,
						"7.5": 25,
						"8.5": 2,
						"9.5": 12,
						"10.5": 18,
						"11.5": 35,
					},
				},
				{
					style_id: 41,
					name: "Black",
					original_price: "950",
					sale_price: "0",
					"default?": 0,
					photos: [
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1519482816300-1490fdf2c2bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1519482816300-1490fdf2c2bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1542818212-9899bafcb9db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1542818212-9899bafcb9db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1526&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1515110371136-7e393289662c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1515110371136-7e393289662c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1656&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1512521952190-7e1a47820ff4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1512521952190-7e1a47820ff4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=978&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1470434767159-ac7bf1b43351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1470434767159-ac7bf1b43351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1547597456-4c18a06d9073?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1547597456-4c18a06d9073?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
						},
						{
							thumbnail_url:
								'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80\n299,41,"https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80',
							url:
								"https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
						},
					],
					skus: {
						"7": 14,
						"8": 9,
						"9": 18,
						"10": 10,
						"11": 11,
						"12": 25,
						"7.5": 25,
						"8.5": 2,
						"9.5": 12,
						"10.5": 18,
						"11.5": 35,
					},
				},
				{
					style_id: 42,
					name: "Pink",
					original_price: "450",
					sale_price: "0",
					"default?": 0,
					photos: [
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1554735490-80893c93b06f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1554735490-80893c93b06f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
						{
							thumbnail_url:
								'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80\n305,42,"https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80',
							url:
								"https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
					],
					skus: {
						"7": 14,
						"8": 9,
						"9": 18,
						"10": 10,
						"11": 11,
						"12": 25,
						"7.5": 25,
						"8.5": 2,
						"9.5": 12,
						"10.5": 18,
						"11.5": 35,
					},
				},
				{
					style_id: 43,
					name: "Green",
					original_price: "450",
					sale_price: "0",
					"default?": 0,
					photos: [
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1550188053-b4e1e8e4f94f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1550188053-b4e1e8e4f94f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80",
						},
						{
							thumbnail_url:
								'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80\n316,43,"https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80',
							url:
								"https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
					],
					skus: {
						"7": 14,
						"8": 9,
						"9": 18,
						"10": 10,
						"11": 11,
						"12": 25,
						"7.5": 25,
						"8.5": 2,
						"9.5": 12,
						"10.5": 18,
						"11.5": 35,
					},
				},
				{
					style_id: 44,
					name: "Butter",
					original_price: "450",
					sale_price: "400",
					"default?": 0,
					photos: [
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1548369735-f548cbe6a294?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1548369735-f548cbe6a294?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=977&q=80",
						},
						{
							thumbnail_url:
								'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80\n327,44,"https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80',
							url:
								"https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
					],
					skus: {
						"7": 14,
						"8": 9,
						"9": 18,
						"10": 10,
						"11": 11,
						"12": 25,
						"7.5": 25,
						"8.5": 2,
						"9.5": 12,
						"10.5": 18,
						"11.5": 35,
					},
				},
				{
					style_id: 45,
					name: "Grey",
					original_price: "450",
					sale_price: "0",
					"default?": 0,
					photos: [
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1536181211993-cf4b2c100475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1536181211993-cf4b2c100475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
						},
						{
							thumbnail_url:
								'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80\n338,45,"https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80',
							url:
								"https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
					],
					skus: {
						"7": 14,
						"8": 9,
						"9": 18,
						"10": 10,
						"11": 11,
						"12": 25,
						"7.5": 25,
						"8.5": 2,
						"9.5": 12,
						"10.5": 18,
						"11.5": 35,
					},
				},
			],
		},
		reviews: { product: "8", page: 0, count: 5, results: [] },
		reviewMetaData: {
			product_id: "8",
			ratings: {},
			recommended: {},
			characteristics: {
				Size: { id: 26, value: null },
				Width: { id: 27, value: null },
				Comfort: { id: 28, value: null },
				Quality: { id: 29, value: null },
			},
		},
		related: [2, 3, 4, 7, 9, 10],
		questions: [
			{
				question_id: 48,
				question_body: "How long does it last?",
				question_date: "2018-09-12T00:00:00.000Z",
				asker_name: "l33tgamer",
				question_helpfulness: 8,
				reported: 0,
				answers: {
					"41": {
						id: 41,
						body: "I've had mine for months and still holdign up great!",
						date: "2018-10-12T00:00:00.000Z",
						answerer_name: "n00bgamer",
						helpfulness: 3,
						photos: [],
					},
				},
			},
			{
				question_id: 44,
				question_body: "What fabric is the top made of?",
				question_date: "2018-02-12T00:00:00.000Z",
				asker_name: "mrmrs",
				question_helpfulness: 6,
				reported: 0,
				answers: {
					"50": {
						id: 50,
						body: "Something pretty soft but I can't be sure",
						date: "2018-02-12T00:00:00.000Z",
						answerer_name: "mrmrs",
						helpfulness: 0,
						photos: [],
					},
					"61": {
						id: 61,
						body: "Its the best! Seriously magic fabric",
						date: "2018-03-12T00:00:00.000Z",
						answerer_name: "mrmrs",
						helpfulness: 1,
						photos: [],
					},
					"66": {
						id: 66,
						body: "Supposedly suede, but I think its synthetic",
						date: "2018-03-12T00:00:00.000Z",
						answerer_name: "mrmrs",
						helpfulness: 2,
						photos: [],
					},
					"90": {
						id: 90,
						body: "Suede",
						date: "2018-03-12T00:00:00.000Z",
						answerer_name: "mrmrs",
						helpfulness: 9,
						photos: [],
					},
				},
			},
			{
				question_id: 45,
				question_body: "Where is this product made?",
				question_date: "2019-06-12T00:00:00.000Z",
				asker_name: "iluvcatz",
				question_helpfulness: 5,
				reported: 0,
				answers: {
					"91": {
						id: 91,
						body: "Manufactured in Mexico City",
						date: "2019-12-12T00:00:00.000Z",
						answerer_name: "Seller",
						helpfulness: 4,
						photos: [],
					},
				},
			},
			{
				question_id: 46,
				question_body: "Can I wash it?",
				question_date: "2018-09-24T00:00:00.000Z",
				asker_name: "cleopatra",
				question_helpfulness: 4,
				reported: 0,
				answers: {
					"51": {
						id: 51,
						body: "I've thrown it in the wash and it seems fine",
						date: "2018-10-24T00:00:00.000Z",
						answerer_name: "marcanthony",
						helpfulness: 1,
						photos: [],
					},
					"52": {
						id: 52,
						body: "It says not to",
						date: "2018-10-24T00:00:00.000Z",
						answerer_name: "marcanthony",
						helpfulness: 12,
						photos: [],
					},
					"53": {
						id: 53,
						body: "Yes",
						date: "2018-10-24T00:00:00.000Z",
						answerer_name: "ceasar",
						helpfulness: 3,
						photos: [],
					},
					"83": {
						id: 83,
						body: "I wouldn't machine wash it",
						date: "2018-10-24T00:00:00.000Z",
						answerer_name: "ceasar",
						helpfulness: 2,
						photos: [],
					},
					"110": {
						id: 110,
						body: "Only if you want to ruin it!",
						date: "2018-10-24T00:00:00.000Z",
						answerer_name: "ceasar",
						helpfulness: 1,
						photos: [],
					},
				},
			},
			{
				question_id: 49,
				question_body: "Does this product run big or small?",
				question_date: "2018-08-04T00:00:00.000Z",
				asker_name: "jbilas",
				question_helpfulness: 4,
				reported: 0,
				answers: {
					"42": {
						id: 42,
						body: "It runs pretty wide on me",
						date: "2018-09-04T00:00:00.000Z",
						answerer_name: "dschulman",
						helpfulness: 4,
						photos: [],
					},
				},
			},
		],
	},
	{
		id: 7,
		name: "Blues Suede Shoes",
		slogan: "2019 Stanley Cup Limited Edition",
		description:
			"Touch down in the land of the Delta Blues in the middle of the pouring rain",
		category: "Dress Shoes",
		default_price: "120",
		features: [
			{ feature: "Sole", value: "Rubber" },
			{ feature: "Material", value: "FullControlSkin" },
			{ feature: "Stitching", value: "Double Stitch" },
		],
		styles: {
			product_id: "7",
			results: [
				{
					style_id: 32,
					name: "White Sole",
					original_price: "120",
					sale_price: "0",
					"default?": 0,
					photos: [
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1561861422-a549073e547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1561861422-a549073e547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1560072810-1cffb09faf0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1560072810-1cffb09faf0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
					],
					skus: {
						"7": 14,
						"8": 9,
						"9": 18,
						"10": 10,
						"11": 11,
						"12": 25,
						"7.5": 25,
						"8.5": 2,
						"9.5": 12,
						"10.5": 18,
						"11.5": 35,
					},
				},
				{
					style_id: 33,
					name: "Black Sole",
					original_price: "120",
					sale_price: "0",
					"default?": 0,
					photos: [
						{
							thumbnail_url:
								"https://images.unsplash.com/uploads/1412198532414025532c0/6a31309c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/uploads/1412198532414025532c0/6a31309c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1454024183771-42d54053cd75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1454024183771-42d54053cd75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
					],
					skus: {
						"7": 14,
						"8": 9,
						"9": 18,
						"10": 10,
						"11": 11,
						"12": 25,
						"7.5": 25,
						"8.5": 2,
						"9.5": 12,
						"10.5": 18,
						"11.5": 35,
					},
				},
				{
					style_id: 34,
					name: "Tan Sole",
					original_price: "120",
					sale_price: "0",
					"default?": 0,
					photos: [
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1465124982537-9f918f1e1aaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1465124982537-9f918f1e1aaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
						},
					],
					skus: {
						"7": 14,
						"8": 9,
						"9": 18,
						"10": 10,
						"11": 11,
						"12": 25,
						"7.5": 25,
						"8.5": 2,
						"9.5": 12,
						"10.5": 18,
						"11.5": 35,
					},
				},
				{
					style_id: 35,
					name: "Red Sole",
					original_price: "120",
					sale_price: "0",
					"default?": 0,
					photos: [
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1454177643390-7f100d1bbeec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1454177643390-7f100d1bbeec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
						},
					],
					skus: {
						"7": 14,
						"8": 9,
						"9": 18,
						"10": 10,
						"11": 11,
						"12": 25,
						"7.5": 25,
						"8.5": 2,
						"9.5": 12,
						"10.5": 18,
						"11.5": 35,
					},
				},
				{
					style_id: 36,
					name: "Yellow Sole",
					original_price: "120",
					sale_price: "0",
					"default?": 0,
					photos: [
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1459631836437-1c2824882e3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1459631836437-1c2824882e3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
						},
						{
							thumbnail_url:
								"https://images.unsplash.com/photo-1499013819532-e4ff41b00669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
							url:
								"https://images.unsplash.com/photo-1499013819532-e4ff41b00669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80",
						},
					],
					skus: {
						"7": 14,
						"8": 9,
						"9": 18,
						"10": 10,
						"11": 11,
						"12": 25,
						"7.5": 25,
						"8.5": 2,
						"9.5": 12,
						"10.5": 18,
						"11.5": 35,
					},
				},
			],
		},
		reviews: {
			product: "7",
			page: 0,
			count: 5,
			results: [
				{
					review_id: 14,
					rating: 1,
					summary: "I don't like Kanye",
					recommend: 0,
					response: "",
					body: "I didn't buy the shoes but I don't like the man behind them",
					date: "2018-11-11T00:00:00.000Z",
					reviewer_name: "taylor",
					helpfulness: 7,
					photos: [],
				},
				{
					review_id: 13,
					rating: 5,
					summary: "Ye is good at everything",
					recommend: 0,
					response: "",
					body: "I mortgaged my house to pay for these",
					date: "2018-12-13T00:00:00.000Z",
					reviewer_name: "yecrazy",
					helpfulness: 3,
					photos: [],
				},
				{
					review_id: 57335,
					rating: 4,
					summary: "Test summary",
					recommend: 1,
					response: null,
					body: "Test body",
					date: "2019-09-04T00:00:00.000Z",
					reviewer_name: "test_name",
					helpfulness: 1,
					photos: [],
				},
				{
					review_id: 57356,
					rating: 2,
					summary: "This is quite a long review.",
					recommend: 1,
					response: null,
					body:
						"safda asdfasdf a asdfasf asdfasfasdaf asdfasdfasdsd dasfads safda asdfasdf a asdfasf asdfasfasdaf asdfasdfasdsd dasfadssafda asdfasdf a asdfasf asdfasfasdaf asdfasdfasdsd dasfadssafda asdfasdf a asdfasf asdfasfasdaf asdfasdfasdsd dasfads safda asdfasdf a asdfasf asdfasfasdaf asdfasdfasdsd dasfads",
					date: "2019-09-11T00:00:00.000Z",
					reviewer_name: "jjj",
					helpfulness: 1,
					photos: [
						{
							id: 27141,
							url: "https://cdn.filestackcontent.com/X7rE98dETq2brDaQNeXN",
						},
					],
				},
				{
					review_id: 57336,
					rating: 4,
					summary: "Test summary",
					recommend: 1,
					response: null,
					body: "Test body",
					date: "2019-09-05T00:00:00.000Z",
					reviewer_name: "test_name",
					helpfulness: 0,
					photos: [],
				},
			],
		},
		reviewMetaData: {
			product_id: "7",
			ratings: { "1": 1, "2": 1, "3": 2, "4": 4, "5": 1 },
			recommended: { "0": 2, "1": 3, null: 4 },
			characteristics: {
				Size: { id: 22, value: "2.5714" },
				Width: { id: 23, value: "3.1429" },
				Comfort: { id: 24, value: "4.5714" },
				Quality: { id: 25, value: "3.7143" },
			},
		},
		related: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		questions: [
			{
				question_id: 41,
				question_body: "What fabric is the top made of?",
				question_date: "2019-08-18T00:00:00.000Z",
				asker_name: "coolkid",
				question_helpfulness: 10,
				reported: 0,
				answers: {
					"81": {
						id: 81,
						body: "Suede",
						date: "2019-09-18T00:00:00.000Z",
						answerer_name: "warmkid",
						helpfulness: 0,
						photos: [
							"https://images.unsplash.com/photo-1548430395-ec39eaf2aa1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1974&q=80",
						],
					},
					"82": {
						id: 82,
						body: "Something pretty soft but I can't be sure",
						date: "2019-09-18T00:00:00.000Z",
						answerer_name: "warmkid",
						helpfulness: 1,
						photos: [],
					},
					"93": {
						id: 93,
						body: "Its the best! Seriously magic fabric",
						date: "2019-09-18T00:00:00.000Z",
						answerer_name: "warmkid",
						helpfulness: 1,
						photos: [],
					},
					"94": {
						id: 94,
						body: "Supposedly suede, but I think its synthetic",
						date: "2019-09-18T00:00:00.000Z",
						answerer_name: "warmkid",
						helpfulness: 2,
						photos: [],
					},
				},
			},
			{
				question_id: 43,
				question_body: "Why is this product cheaper here than other sites?",
				question_date: "2019-02-04T00:00:00.000Z",
				asker_name: "l33tgamer",
				question_helpfulness: 5,
				reported: 0,
				answers: {},
			},
		],
	},
];

export { testProduct, testRelatedProducts };
