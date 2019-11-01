import GetReviews from "../../components/R_R/Buttons/GetReviews.jsx";
import { connect } from "react-redux";
import getReviews from "../../actions/getReviews.js"
import reviewCount from "../../action/reviewCount.js"

const mapStateToProps = (state, ownProps) => ({
    reviews: state.reviews,
    sort: state.sort,
    reviewCount: state.reviewCount
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    addReviews: (id, page, count) => dispatch(getReviews(id, page, count)),
    updateCount: (count) => dispatch(reviewCount(count))
});

const GetReviewsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GetReviews);

export default GetReviewsContainer