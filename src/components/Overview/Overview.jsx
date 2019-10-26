import React, { useEffect } from "react";
import PicturesContainer from "../../containers/Overview/PicturesContainer";
import ProductDashboardContainer from "../../containers/Overview/ProductDashboardContainer";
import ProductDescriptionContainer from "../../containers/Overview/ProductDescriptionContainer";
import constants from "../../constants";
import store from "../../store";
import $ from "jquery";
import "./Overview.css";

const Overview = () => {
	return (
		<div id="Overview">
			<PicturesContainer />
			<ProductDashboardContainer />
			<ProductDescriptionContainer />
		</div>
	);
};

export default Overview;
