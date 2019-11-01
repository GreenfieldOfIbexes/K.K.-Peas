import React from "react";
import DeckContainer from "../../containers/DeckContainer.js";
import OutfitDeckContainer from "../../containers/OutfitDeckContainer.js";
import ComparisonContainer from "../../containers/ComparisonContainer.js";

const RelatedApp = (props) => (
	<div
		className="Related-Container"
		onClick={(e) => {
			props.clickHandler(e, "Related and Outfit");
		}}>
		<DeckContainer icon="star" />
		<OutfitDeckContainer icon="clear" />
		<ComparisonContainer />
	</div>
);

export default RelatedApp;
