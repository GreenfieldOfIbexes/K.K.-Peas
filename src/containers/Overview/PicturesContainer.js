import Pictures from "../../components/Overview/Pictures/Pictures";
import { connect } from "react-redux";
import store from "../../store";
import pictureIndexChange from "../../actions/pictureIndexChange";
import fullScreenToggle from "../../actions/fullScreenToggle";
import zoomedIn from "../../actions/zoomedIn";
import carouselArrowClick from "../../actions/carouselArrowClick";
import $ from "jquery";

function _changePicture(change, dispatch) {
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
}

const mapStateToProps = ({ mainProduct, view }, ownProps) => ({
	styles: mainProduct.styles.results,
	style_index: view.style_index,
	picture_index: view.picture_index,
	max_picture_index: view.max_picture_index,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	changePicture: (change) => {
		_changePicture(change, dispatch);
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
		_changePicture(direction, dispatch);
		let $newPicture = $(
			`.feature-photo[data-photo-index=${store.getState().view.picture_index}]`,
		);
		let $parent = $(".pictures");
		let leftScroll = $newPicture.position().left;
		let currentScrollDistance = $parent.scrollLeft();
		$parent.animate(
			{
				scrollLeft: leftScroll + currentScrollDistance,
			},
			500,
		);
	},
});

const PicturesContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Pictures);

export default PicturesContainer;
