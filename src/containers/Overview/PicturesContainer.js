import Pictures from "../../components/Overview/Pictures/Pictures";
import { connect } from "react-redux";
import store from "../../store";
import pictureIndexChange from "../../actions/pictureIndexChange";
import fullScreenToggle from "../../actions/fullScreenToggle";
import zoomedIn from "../../actions/zoomedIn";
import $ from "jquery";

const mapStateToProps = ({ mainProduct, view }, ownProps) => ({
	mainProduct,
	view,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	changePicture: (change) => {
		const currentIndex = store.getState().view.picture_index;
		const maxIndex = store.getState().view.max_picture_index;
		console.log("changing picture");
		if (change === "right") {
			const newIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
			dispatch(pictureIndexChange(newIndex));
		} else if (change === "left") {
			const newIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex;
			dispatch(pictureIndexChange(newIndex));
		} else if (typeof change === "number") {
			dispatch(pictureIndexChange(change));
		}
	},
	fullScreenHandler: () => {
		console.log("full screen getting toggled!");
		dispatch(fullScreenToggle());
	},
	fullscreenPictureClickHandler: () => {
		console.log("click on pictures");
		if (store.getState().view.fullscreen_picture) {
			dispatch(zoomedIn());
			// handling the background-position changing in proportion to the mouse movement
			$(".picture").on("mousemove", (e) => {
				console.log($(this));
			});
		}
	},
});

const PicturesContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Pictures);

export default PicturesContainer;
