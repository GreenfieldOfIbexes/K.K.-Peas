import React from "react";
import PicturesContainer from "../../containers/Overview/PicturesContainer";
import ProductDashboardContainer from "../../containers/Overview/ProductDashboardContainer";
// import ProductDescription from "./ProductDescription/ProductDescription";
import "./Overview.css";

const Overview = () => (
	<div id="Overview">
		<PicturesContainer />
		<ProductDashboardContainer />
		{/* <ProductDescription /> */}
	</div>
);

export default Overview;
