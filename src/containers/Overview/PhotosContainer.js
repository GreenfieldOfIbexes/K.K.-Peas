import photos from "../../components/Overview/Photos/Photos";
import { connect } from "react-redux";
import store from "../../store";
import pictureIndexChange from "../../actions/pictureIndexChange";
import fullScreenToggle from "../../actions/fullScreenToggle";
import zoomedIn from "../../actions/zoomedIn";
import carouselArrowClick from "../../actions/carouselArrowClick";
import $ from "jquery";

function _changephoto(change, dispatch) {
	const currentIndex = store.getState().view.photo_index;
	const maxIndex = store.getState().view.max_photo_index;
	if (change === "right") {
		const newIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
		dispatch(photoIndexChange(newIndex));
	} else if (change === "left") {
		const newIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex;
		dispatch(photoIndexChange(newIndex));
	} else if (typeof change === "number") {
		dispatch(photoIndexChange(change));
	}
}

const mapStateToProps = ({ mainProduct, view }, ownProps) => ({
	styles: mainProduct.styles.results,
	style_index: view.style_index,
	photo_index: view.photo_index,
	max_photo_index: view.max_photo_index,
	zoomed_in: view.zoomed_in,
	fullscreen_photo: view.fullscreen_photo,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	changephoto: (change) => {
		_changephoto(change, dispatch);
	},
	fullScreenHandler: () => {
		if (!store.getState().view.fullscreen_photo) {
			dispatch(fullScreenToggle());
		}
	},
	fullscreenphotoClickHandler: (e) => {
		if (store.getState().view.fullscreen_photo) {
			console.log("full screen click");
			dispatch(zoomedIn());
			let $frame = $(
				`.feature-photo[data-photo-index=${store.getState().view.photo_index}]`,
			);
			let $photo = $frame.find("img");
			if (store.getState().view.zoomed_in) {
				let newPhotoHeight = $photo.height() * 2.5;
				let newPhotoWidth = $photo.width() * 2.5;
				let pictureAndFrameHeightDiff = Math.max(
					newPhotoHeight - $frame.height(),
					0,
				);
				let pictureAndFrameWidthDiff = Math.max(
					newPhotoWidth - $frame.width(),
					0,
				);
				console.log("new height and width", newPhotoHeight, newPhotoWidth);
				$photo.css({
					height: newPhotoHeight + "px",
					width: newPhotoWidth + "px",
					minHeight: newPhotoHeight + "px",
					minWidth: newPhotoWidth + "px",
				});
				// handling the background-position changing in proportion to the mouse movement
				$photo.mousemove((e) => {
					// if the mouse is all the way on the left, this number will be -100%. if it is all the way on the right, it will be 100%
					const leftPercentageFromCenter =
						(e.pageX / window.innerWidth - 0.5) * -1;
					// ditto, but for the y axis
					const topPercentageFromCenter =
						(e.pageY / window.innerHeight - 0.5) * -1;
					console.log(
						"left",
						leftPercentageFromCenter,
						"top",
						topPercentageFromCenter,
					);
					// change the currently viewed photo's background-position to mimic that
					e.target.style.transform = `translate3d(${leftPercentageFromCenter *
						pictureAndFrameWidthDiff}px, ${topPercentageFromCenter *
						pictureAndFrameHeightDiff}px, 0`;
				});
				// TODO: need to make this a dispatching situation, I think
				$(".fullscreen-button .close").on("click tap", () => {
					$("img")
						.off("mousemove")
						.css({
							height: "100%",
							transform: "unset",
							minHeight: "unset",
							minWidth: "unset",
						});
				});
			} else {
				console.log("else");
				$photo.off("mousemove").css({
					height: "100%",
					width: "auto",
					transform: "unset",
					minHeight: "unset",
					minWidth: "unset",
				});
			}
		}
	},
	arrowClickHandler: (direction) => {
		// if full screen, set zoomed_in to false
		dispatch(carouselArrowClick(direction));
		_changephoto(direction, dispatch);
		let $newphoto = $(
			`.feature-photo[data-photo-index=${store.getState().view.photo_index}]`,
		);
		let $parent = $(".photos");
		let leftScroll = $newphoto.position().left;
		let currentScrollDistance = $parent.scrollLeft();
		$parent.animate(
			{
				scrollLeft: leftScroll + currentScrollDistance,
			},
			500,
		);
	},
});

const PhotosContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(photos);

export default PhotosContainer;
