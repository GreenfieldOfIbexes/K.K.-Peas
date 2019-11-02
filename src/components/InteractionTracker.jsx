import React from "react";
import axios from "axios";
import constants from "../constants";

/*
	When app is rendered, this is the only the component inside of it.
	It's child (this.props.children) is a function that accepts a function
	as an argument and returns every other module component's JSX, each
	with the passed down function as the "clickHandler" prop
*/
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
