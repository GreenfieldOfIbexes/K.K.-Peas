import React from "react";
import renderer from "react-test-renderer";
import { mainProduct, view } from "../../../../../tests/initialStateStub";
import ProductInteraction from "../ProductInteraction";
import ProductInteractionContainer from "../../../../containers/Overview/ProductInteractionContainer";
import store from "../../../../store";

it("Renders properly on load", () => {
	const renderedComponent = renderer
		.create(
			<ProductInteractionContainer mainProduct={mainProduct} view={view} />,
		)
		.toJSON();
	expect(renderedComponent).toMatchSnapshot();
});

it("Selecting a new style only updates style_index", () => {
	const viewStyleIndex1 = Object.assign({}, view, { style_index: 1 });

	const renderedComponent = renderer
		.create(
			<ProductInteractionContainer
				mainProduct={mainProduct}
				view={viewStyleIndex1}
			/>,
		)
		.toJSON();
	expect(renderedComponent).toMatchSnapshot();
});

// Props ProductInteraction needs:
// mainProduct,
// view,
// updateStyle,
// cartHandler,
// addToOutfitHandler,
