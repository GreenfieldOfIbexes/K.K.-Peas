import Pictures from "../../components/Overview/Pictures/Pictures";
import { connect } from "react-redux";
import store from "../../store";
import pictureIndexChange from "../../actions/pictureIndexChange";
import fullScreenToggle from "../../actions/fullScreenToggle";
import zoomedIn from "../../actions/zoomedIn";
import carouselArrowClick from "../../actions/carouselArrowClick";
import $ from "jquery";

const mapStateToProps = ({ mainProduct, view }, ownProps) => ({
	mainProduct,
	view,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	changePicture: (change) => {
		const currentIndex = store.getState().view.picture_index;
		const maxIndex = store.getState().view.max_picture_index;
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
		dispatch(fullScreenToggle());
	},
	fullscreenPictureClickHandler: (e) => {
		if (store.getState().view.fullscreen_picture) {
			dispatch(zoomedIn());
			if (store.getState().view.zoomed_in) {
				// handling the background-position changing in proportion to the mouse movement
				$(
					`.picture[data-picture-index=${store.getState().view.picture_index}]`,
				).mousemove((e) => {
					// calculate actual percentage distance from top and left
					const leftPercentage = (e.pageX / window.innerWidth) * 100;
					const topPercentage = (e.pageY / window.innerHeight) * 100;
					// change the currently viewed photo's background-position to mimic that
					e.target.style.backgroundPosition = `${leftPercentage}% ${topPercentage}%`;
				});
				// TODO: need to make this a dispatching situation, I think
				$(".fullscreen-button .close").on("click tap", () => {
					$(".picture")
						.off("mousemove")
						.css("background-position", "center");
				});
			} else {
				$(".picture")
					.off("mousemove")
					.css("background-position", "center");
			}
		}
	},
	arrowClickHandler: (direction) => {
		// if full screen, set zoomed_in to false
		dispatch(carouselArrowClick(direction));
	},
});

const PicturesContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Pictures);

export default PicturesContainer;
