import React, { useEffect } from "react";
import PhotosContainer from "../../containers/Overview/PhotosContainer";
import ProductDashboardContainer from "../../containers/Overview/ProductDashboardContainer";
import ProductDescriptionContainer from "../../containers/Overview/ProductDescriptionContainer";
import constants from "../../constants";
import store from "../../store";
import $ from "jquery";
import "./Overview.css";

const Overview = (props) => {
	return (
		<div
			id="Overview"
			onClick={(e) => {
				props.clickHandler(e, "Overview");
			}}>
			<PhotosContainer />
			<ProductDashboardContainer />
			<ProductDescriptionContainer />
		</div>
	);
};

export default Overview;
