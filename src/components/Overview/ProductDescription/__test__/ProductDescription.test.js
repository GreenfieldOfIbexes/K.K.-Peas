import React from "react";
import renderer from "react-test-renderer";
import ProductDescription from "../ProductDescription.jsx";
import { testProduct } from "../../../../../tests/testProducts";

it("renders correctly", () => {
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
