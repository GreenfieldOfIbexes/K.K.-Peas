import ReviewList from "../../components/R_R/ReviewList/ReviewList.jsx";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
    reviews: state.reviews
})

const ReviewListContainer = connect(mapStateToProps)(ReviewList);

export default ReviewListContainer;
