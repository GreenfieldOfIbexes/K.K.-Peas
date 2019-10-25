import QuestionsList from "../components/QnA/QuestionsList.jsx";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
	return {
		productQuestions: state.productQuestions,
	};
};

// const mapDispatchToProps = (dispatch, ownProps) => ({
// 	intendedMethodNameInComponent: (someInfoFromComponent) => {
// 		dispatch(someActionObject(someInfoFromComponent));
// 	},
// });

const QuestionsContainer = connect(
	mapStateToProps,
	// mapDispatchToProps,
)(QuestionsList);

export default QuestionsContainer;

// send store to component
// manipulate store
//======
