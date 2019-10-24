import React from "react";
import Card from "../../../src/components/related-compare/Card.jsx";
import renderer from "react-test-renderer";
const { testProduct } = require("../../testProducts.js");

test("Activity card renders correctly", () => {
	const card = renderer.create(<Card product={testProduct} />).toJSON();
	expect(card).toMatchSnapshot();
});
