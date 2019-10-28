import QnA from "../../components/QnA/QnA";
import { connect } from "react-redux";

const mapStateToProps = ({ productQuestions }, ownProps) => ({
	productQuestions,
});

// const mapDispatchToProps = (dispatch, ownProps) => ({
// 	intendedMethodNameInComponent: (someInfoFromComponent) => {
// 		dispatch(someActionObject(someInfoFromComponent));
// 	},
// });

const QuestionsContainer = connect(
	mapStateToProps,
	// mapDispatchToProps,
)(QnA);

export default QuestionsContainer;

// send store to component
// manipulate store
//======
