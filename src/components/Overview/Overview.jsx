import React from "react";
import PicturesContainer from "../../containers/PicturesContainer";
import ProductDashboard from "./ProductDashboard/ProductDashboard";
import ProductDescription from "./ProductDescription/ProductDescription";

const Overview = () => (
	<div id="Overview">
		<PicturesContainer />
		<ProductDashboard />
		<ProductDescription />
	</div>
);

export default Overview;
