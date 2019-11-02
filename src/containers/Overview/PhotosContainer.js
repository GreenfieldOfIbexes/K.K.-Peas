import Photos from "../../components/Overview/Photos/Photos";
import { connect } from "react-redux";
import zoomOut_ao from "../../actions/zoomOutOnPhoto";
import $ from "jquery";

// Scroll the carousel to a specified picture
function scrollToPicture(index, speed = 500) {
	let $newPhoto = $(`.feature-photo[data-photo-index=${index}]`);
	let $parent = $(".photos");
	let leftScroll = $newPhoto.position().left;
	let currentScrollDistance = $parent.scrollLeft();
	$parent.animate(
		{
			scrollLeft: leftScroll + currentScrollDistance,
		},
		speed,
	);
}

// Remove any mousemove event handlers from carousel images, and remove any CSS applied when zooming in. As it stands, this runs for all photos, not just the one you're zooming out of
function _zoomOutOnPhotos(dispatch) {
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

// Zoom in on a given photo, and attach an event listener for mousemove events that shifts the image around accordingly using CSS transform. Zoom is 2.5x by default.
function zoomInOnPhoto(index, zoom = 2.5) {
	// grab the image
	let $frame = $(`.feature-photo[data-photo-index=${index}]`);
	let $photo = $frame.find("img");
	// Increase the image size
	let newPhotoHeight = $photo.height() * zoom;
	let newPhotoWidth = $photo.width() * zoom;
	$photo.css({
		height: newPhotoHeight + "px",
		width: newPhotoWidth + "px",
		minHeight: newPhotoHeight + "px",
		minWidth: newPhotoWidth + "px",
	});
	// grab the difference in between the differences between the image's height and width and its container's height and width
	let pictureAndFrameHeightDiff = Math.max(newPhotoHeight - $frame.height(), 0);
	let pictureAndFrameWidthDiff = Math.max(newPhotoWidth - $frame.width(), 0);
	// Changing the image transform value in proportion to the mouse position
	$photo.mousemove((e) => {
		// This number reflects how extreme in one direction your mouse has gone. If the mouse is all the way on the left, this number will be -100%. if it is all the way on the right, it will be 100%
		const leftPercentageFromCenter = e.pageX / window.innerWidth - 0.5;
		// Ditto, but for the y axis
		const topPercentageFromCenter = e.pageY / window.innerHeight - 0.5;
		console.log(
			"left",
			leftPercentageFromCenter,
			"top",
			topPercentageFromCenter,
		);
		// Use CSS transform to scooch the photo around accordingly. The "...PercentageFromCenter" reflects the percentage of the image that should be brought into view, and pictureAndFrame____Diff is used to find the actual pixel amount.
		e.target.style.transform = `translate3d(${leftPercentageFromCenter *
			pictureAndFrameWidthDiff *
			-1}px, ${topPercentageFromCenter * pictureAndFrameHeightDiff * -1}px, 0`;
	});
}

const mapStateToProps = ({ mainProduct, view }, ownProps) => ({
	mainProduct,
	view,
});

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		zoomInOnPhoto,
		zoomOutOnPhotos: () => _zoomOutOnPhotos(dispatch),
		scrollToPicture,
	};
};

const PhotosContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Photos);

export default PhotosContainer;
