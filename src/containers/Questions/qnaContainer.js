import QnA from "../../components/QnA/QnA";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
	return {
		questions: state.questions,
	};
};

const QuestionsContainer = connect(mapStateToProps)(QnA);

export default QuestionsContainer;
