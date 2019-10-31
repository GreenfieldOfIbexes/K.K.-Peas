import Photos from "../../components/Overview/Photos/Photos";
import { connect } from "react-redux";
import store from "../../store";
import pictureIndexChange from "../../actions/pictureIndexChange";
import openFullScreen_ao from "../../actions/openFullScreen";
import closeFullScreen_ao from "../../actions/closeFullScreen";
import zoomIn_ao from "../../actions/zoomInOnPhoto";
import zoomOut_ao from "../../actions/zoomOutOnPhoto";
import carouselArrowClick from "../../actions/carouselArrowClick";
import $ from "jquery";

const mapStateToProps = ({ mainProduct, view }, ownProps) => ({
	mainProduct,
	view,
});

const mapDispatchToProps = (dispatch, ownProps) => {
	function scrollToPicture(index) {
		// scroll to picture with given index
		let $newPhoto = $(`.feature-photo[data-photo-index=${index}]`);
		let $parent = $(".photos");
		let leftScroll = $newPhoto.position().left;
		let currentScrollDistance = $parent.scrollLeft();
		$parent.animate(
			{
				scrollLeft: leftScroll + currentScrollDistance,
			},
			500,
		);
		// change picture_index accordingly
		dispatch(pictureIndexChange(index));
	}

	function openFullScreen(indexOfPictureClickedOn) {
		dispatch(openFullScreen_ao());
		// TODO: need to figure out how to get this to run AFTER the css changes have been made to make everything full screen. It relies on those numbers being update. Is there some lifecycle hook that would help with this?
		scrollToPicture(indexOfPictureClickedOn);
	}

	function changeDisplayedPhoto(index) {
		dispatch(pictureIndexChange(index));
		scrollToPicture(index);
		// zoom out of all pictures
		zoomOutOnPhotos();
	}

	function zoomInOnPhoto(index) {
		// grab the image
		let $frame = $(`.feature-photo[data-photo-index=${index}]`);
		let $photo = $frame.find("img");
		// Increase the image size by 2.5x
		let newPhotoHeight = $photo.height() * 2.5;
		let newPhotoWidth = $photo.width() * 2.5;
		$photo.css({
			height: newPhotoHeight + "px",
			width: newPhotoWidth + "px",
			minHeight: newPhotoHeight + "px",
			minWidth: newPhotoWidth + "px",
		});
		// grab the difference in between the differences between the image's height and width and its container's height and width
		let pictureAndFrameHeightDiff = Math.max(
			newPhotoHeight - $frame.height(),
			0,
		);
		let pictureAndFrameWidthDiff = Math.max(newPhotoWidth - $frame.width(), 0);
		// Changing the image transform value in proportion to the mouse position
		$photo.mousemove((e) => {
			// If the mouse is all the way on the left, this number will be -100%. if it is all the way on the right, it will be 100%
			const leftPercentageFromCenter = e.pageX / window.innerWidth - 0.5;
			// Ditto, but for the y axis
			const topPercentageFromCenter = e.pageY / window.innerHeight - 0.5;
			console.log(
				"left",
				leftPercentageFromCenter,
				"top",
				topPercentageFromCenter,
			);
			// Use CSS transform to scooch the photo around accordingly
			e.target.style.transform = `translate3d(${leftPercentageFromCenter *
				pictureAndFrameWidthDiff *
				-1}px, ${topPercentageFromCenter *
				pictureAndFrameHeightDiff *
				-1}px, 0`;
		});
	}

	function zoomOutOnPhotos() {
		//TODO: make this an actual action object and then dispatch it here
		dispatch(zoomOut_ao());
		$(".feature-photo img")
			.off("mousemove")
			.css({
				height: "100%",
				width: "auto",
				transform: "unset",
				minHeight: "unset",
				minWidth: "unset",
			});
	}
	return {
		openFullScreen,
		changeDisplayedPhoto,
		zoomInOnPhoto,
		zoomOutOnPhotos,
		scrollToPicture,
	};
};

const PhotosContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Photos);

export default PhotosContainer;

// OLD MAP DISPATCH TO PROPS:

// {
// 	changePhoto: (change) => {
// 		_changePhoto(change, dispatch);
// 	},
// 	updateCarouselPosition: (index) => {
// 		_updateCarouselPosition(index);
// 	},
// 	fullScreenHandler: () => {
// 		if (!store.getState().view.fullscreen_photo) {
// 			dispatch(fullScreenToggle());
// 		}
// 	},
// 	fullscreenphotoClickHandler: (e) => {
// 		if (store.getState().view.fullscreen_photo) {
// 			console.log("full screen click");
// 			dispatch(zoomedIn());
// 			let $frame = $(
// 				`.feature-photo[data-photo-index=${store.getState().view.photo_index}]`,
// 			);
// 			let $photo = $frame.find("img");
// 			if (store.getState().view.zoomed_in) {
// 				let newPhotoHeight = $photo.height() * 2.5;
// 				let newPhotoWidth = $photo.width() * 2.5;
// 				let pictureAndFrameHeightDiff = Math.max(
// 					newPhotoHeight - $frame.height(),
// 					0,
// 				);
// 				let pictureAndFrameWidthDiff = Math.max(
// 					newPhotoWidth - $frame.width(),
// 					0,
// 				);
// 				console.log("new height and width", newPhotoHeight, newPhotoWidth);
// 				$photo.css({
// 					height: newPhotoHeight + "px",
// 					width: newPhotoWidth + "px",
// 					minHeight: newPhotoHeight + "px",
// 					minWidth: newPhotoWidth + "px",
// 				});
// 				// handling the background-position changing in proportion to the mouse movement
// 				$photo.mousemove((e) => {
// 					// if the mouse is all the way on the left, this number will be -100%. if it is all the way on the right, it will be 100%
// 					const leftPercentageFromCenter =
// 						(e.pageX / window.innerWidth - 0.5) * -1;
// 					// ditto, but for the y axis
// 					const topPercentageFromCenter =
// 						(e.pageY / window.innerHeight - 0.5) * -1;
// 					console.log(
// 						"left",
// 						leftPercentageFromCenter,
// 						"top",
// 						topPercentageFromCenter,
// 					);
// 					// change the currently viewed photo's background-position to mimic that
// 					e.target.style.transform = `translate3d(${leftPercentageFromCenter *
// 						pictureAndFrameWidthDiff}px, ${topPercentageFromCenter *
// 						pictureAndFrameHeightDiff}px, 0`;
// 				});
// 				// TODO: need to make this a dispatching situation, I think
// 				$(".fullscreen-button .close").on("click tap", () => {
// 					$("img")
// 						.off("mousemove")
// 						.css({
// 							height: "100%",
// 							transform: "unset",
// 							minHeight: "unset",
// 							minWidth: "unset",
// 						});
// 				});
// 			} else {
// 				console.log("else");
// 				$photo.off("mousemove").css({
// 					height: "100%",
// 					width: "auto",
// 					transform: "unset",
// 					minHeight: "unset",
// 					minWidth: "unset",
// 				});
// 			}
// 		}
// 	},
// 	arrowClickHandler: (direction) => {
// 		// if full screen, set zoomed_in to false
// 		dispatch(carouselArrowClick(direction));
// 		_changePhoto(direction, dispatch);
// 		_updateCarouselPosition(store.getState().view.photo_index);
// 		$(".feature-photo img")
// 			.off("mousemove")
// 			.css({
// 				height: "100%",
// 				width: "auto",
// 				transform: "unset",
// 				minHeight: "unset",
// 				minWidth: "unset",
// 			});
// 	},
// }
