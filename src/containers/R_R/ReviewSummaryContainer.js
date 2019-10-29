import ReviewSummary from "../../components/R_R/ReviewSummary.jsx";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
	return {
		avg_review: state.mainProduct.avgRating,
		reviewMetaData: state.mainProduct.reviewMetadata,
	};
};

// const mapDispatchToProps = (dispatch, ownProps) => ({
//     intendedMethodNameInComponent: (someInfoFromComponent) => {
//         dispatch(someActionObject(someInfoFromComponent));
//     },
// });

const SummaryContainer = connect(
	mapStateToProps,
	// mapDispatchToProps,
)(ReviewSummary);

export default SummaryContainer;
