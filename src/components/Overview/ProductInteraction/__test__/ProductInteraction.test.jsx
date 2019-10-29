import React from "react";
import renderer from "react-test-renderer";
import { testProduct } from "../../../../../tests/testProducts";
import ProductInteraction from "../ProductInteraction";
import { mapDispatchToProps } from "../../../../containers/Overview/ProductInteractionContainer";
import initialState from "../../../../reducers/initialState";
import store from "../../../../store";

// TODO: The below test is bad. Its intention is to check to see that you are creating the proper object that you're going to dispatch before you actually dispatch it.

// test("Add to cart handler should generate an action object with a session_id, product-id, and a type of ADD_TO_CART", () => {
// 	expect(
// 		mapDispatchToProps(() => {}).cartHandler(
// 			{ product_id: 1, session_id: 2 },
// 			false,
// 		),
// 	).toBe({ type: "ADD_TO_CART", product_id: 1, session_id: 2 });
// });

// TODO: Make a different test to make sure that the the actual axios post to the cart endpoint is working properly

// Simple test that checks to see that something has rendered to get my feet with with snapshot testing:
it("Product Interaction renders correctly", () => {
	const renderedComponent = renderer
		.create(
			<ProductInteraction
				mainProduct={testProduct}
				view={initialState.view}
				// updateStyle={mapDispatchToProps(store.dispatch).updateStyle}
				// cartHandler={mapDispatchToProps(store.dispatch).cartHandler}
				// addToOutfitHandler={
				// 	mapDispatchToProps(store.dispatch).addToOutfitHandler
				// }
			/>,
		)
		.toJSON();
	expect(renderedComponent).toMatchSnapshot();
});
