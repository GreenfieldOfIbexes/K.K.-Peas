import React from "react";
import renderer from "react-test-renderer";
import ProductDescription from "../ProductDescription.jsx";
import { testProduct } from "../../../../../tests/testProducts";

it("Product description renders description and features", () => {
	const renderedComponent = renderer
		.create(
			<ProductDescription
				description={testProduct.description}
				features={testProduct.features}
			/>,
		)
		.toJSON();
	expect(renderedComponent).toMatchSnapshot();
});

it("Product description does not render a 'null' feature value", () => {
	const modifiedTestProduct = Object.create(testProduct);
	modifiedTestProduct.features.push({
		feature: "null",
		value: "null",
	});
	const renderedComponent = renderer
		.create(
			<ProductDescription
				description={modifiedTestProduct.description}
				features={modifiedTestProduct.features}
			/>,
		)
		.toJSON();
	expect(renderedComponent).toMatchSnapshot();
});
