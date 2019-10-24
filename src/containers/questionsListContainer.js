// import ComponentName from "../components/YourWidget/ComponentName.jsx";
import QuestionsList from "../components/QnA/QuestionsList.jsx";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
	// intendedPropNameInComponent: state.nameOfPropInStore,
	productQuestions: state.productQuestions,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	intendedMethodNameInComponent: (someInfoFromComponent) => {
		dispatch(someActionObject(someInfoFromComponent));
	},
});

const ContainerName = connect(
	//
	mapStateToProps,
	mapDispatchToProps,
)(ComponentName); //

export default ContainerName; //

// send store to component
// manipulate store
//======
