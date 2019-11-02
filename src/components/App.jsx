import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Overview from "./Overview/Overview.jsx";
import R_R from "./R_R/R_R.jsx";
import QnAContainer from "../containers/Questions/qnaContainer";
import InteractionTracker from "./InteractionTracker";
import RelatedApp from "./related-compare/RelatedApp.jsx";

export class App extends Component {
	render() {
		return (
			<div>
				<InteractionTracker>
					{(postInteractionToAPI) => (
						<React.Fragment>
							<Overview clickHandler={postInteractionToAPI} />
							<R_R clickHandler={postInteractionToAPI} />
							<QnAContainer clickHandler={postInteractionToAPI} />
							<RelatedApp clickHandler={postInteractionToAPI} />
						</React.Fragment>
					)}
				</InteractionTracker>
			</div>
		);
	}
}

export default App;