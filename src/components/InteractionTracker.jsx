import React from "react";
import axios from "axios";
import constants from "../constants";

class InteractionTracker extends React.Component {
	constructor(props) {
		super(props);
		this.postInteractionToAPI = this.postInteractionToAPI.bind(this);
	}

	postInteractionToAPI(e) {
		var time = Date.now();
		var widget = this.props.widget;
		var element = e.target;
		console.log("Posting to API:", element, widget, time);
		axios.post(`${constants.HOST_ROOT}/interactions`, {
			element,
			widget,
			time,
		});
	}

	render() {
		{
			this.props.children;
		}
	}
}

// Example:
<InteractionTracker widget={"Overview"} onClick={postInteractionToAPI}>
	<Overview />
</InteractionTracker>;
