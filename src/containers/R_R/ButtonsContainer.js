import Buttons from "../../components/R_R/Buttons/Buttons.jsx";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
    reviews: state.mainProduct.reviewMetaData,
});


const ButtonsContainer = connect(
    mapStateToProps
)(Buttons);

export default ButtonsContainer