import Buttons from "../../components/R_R/Buttons/Buttons.jsx";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
    return ({
    reviews: state.reviews,
    metaData: state.mainProduct.reviewMetadata
})
}

const ButtonsContainer = connect(
    mapStateToProps
)(Buttons);

export default ButtonsContainer