import GetReviews from "../../components/R_R/Buttons/GetReviews.jsx";
import { connect } from "react-redux";
import getReviews from "../../actions/getReviews.js"

const mapStateToProps = (state, ownProps) => ({
    reviews: state.reviews,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    addReviews: (id, page, count) => dispatch(getReviews(id, page, count))
});

const GetReviewsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GetReviews);

export default GetReviewsContainer