import Starfilter from "../../components/R_R/Starfilter/Starfilter.jsx";
import starFilter from "../../actions/starFilter.js"
import getReviews from "../../actions/getReviews.js"
import reviewCount from '../../actions/reviewCount.js'
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
	return {
		starFilters: state.starFilter
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateFilter: (value) => dispatch(starFilter(value)),
        getReviews: (id) => dispatch(getReviews(id)),
        updateCount: () => dispatch(reviewCount())
    }
}

const StarfilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Starfilter);

export default StarfilterContainer
