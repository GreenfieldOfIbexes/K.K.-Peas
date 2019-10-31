import Photos from "../../components/Overview/Photos/Photos";
import { connect } from "react-redux";
import zoomOut_ao from "../../actions/zoomOutOnPhoto";
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
