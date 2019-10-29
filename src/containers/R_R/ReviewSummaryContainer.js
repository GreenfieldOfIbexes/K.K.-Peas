import ReviewSummary from "../../components/R_R/ReviewSummary.jsx";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
	return {
		avg_review: state.mainProduct.avgRating,
		reviewMetaData: state.mainProduct.reviewMetadata,
	};
};

const SummaryContainer = connect(
	mapStateToProps,
)(ReviewSummary);

export default SummaryContainer;
