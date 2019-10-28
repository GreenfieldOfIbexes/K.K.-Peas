import React from "react";
import axios from "axios";
import constants from "../constants";

class InteractionTracker extends React.Component {
	constructor(props) {
		super(props);
		this.postInteractionToAPI = this.postInteractionToAPI.bind(this);
	}

	postInteractionToAPI(e, widget) {
		var time = Date.now().toString();
		var element = {
			classList: [...e.target.classList].join(" "),
			dataset: e.target.dataset,
			id: e.target.id,
			innerHTML: e.target.innerHTML,
			outerHTML: e.target.outerHTML,
		};
		axios.post(`${constants.API_URL}/interactions`, {
			element,
			widget,
			time,
		});
	}

	render() {
		return this.props.children(this.postInteractionToAPI);
	}
}

export default InteractionTracker;
