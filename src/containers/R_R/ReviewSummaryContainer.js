import ReviewSummary from "../../components/R_R/ReviewSummary.jsx";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
    avg_review: state.mainProduct.avg_review,
    reviewMetaData: state.mainProduct.reviewMetaData
});

// const mapDispatchToProps = (dispatch, ownProps) => ({
//     intendedMethodNameInComponent: (someInfoFromComponent) => {
//         dispatch(someActionObject(someInfoFromComponent));
//     },
// });

const SummaryContainer = connect(
    mapStateToProps,
    // mapDispatchToProps,
)(ReviewSummary);

export default SummaryContainer