import Buttons from "../../components/R_R/Buttons/Buttons.jsx";
import { connect } from "react-redux";
import getReviews from "../../actions/getReviews.js"
import getMetaData from "../../actions/getMetaData.js"

const mapStateToProps = (state, ownProps) => ({
    reviews: state.reviews,
    metaData: state.metaData
})


const mapStateToDispatch = (dispatch, ownProps) => ({
    getReviews: (id) => dispatch(getReviews(id)),
    getMetaData: (id) => dispatch(getMetaData(id))
})

const ButtonsContainer = connect(
    mapStateToProps,
    mapStateToDispatch
)(Buttons);

export default ButtonsContainer