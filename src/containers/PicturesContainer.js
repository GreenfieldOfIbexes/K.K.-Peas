import Pictures from "../components/Overview/Pictures/Pictures";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
	picture_url: state.mainProduct.styles.pictures[0].url
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const PicturesContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Pictures);

export default PicturesContainer;
