import React, { useState, useEffect } from "react";
import store from "../../../store";
import "./Photos.css";
import $ from "jquery";
import _ from "lodash";

const Photos = ({
	mainProduct: {
		styles: { results: styles },
	},
	view: { style_index, max_photo_index },
	scrollToPicture,
	openFullScreen,
	changeDisplayedPhoto,
	zoomInOnPhoto,
	zoomOutOnPhotos,
}) => {
	// create internal state for photo index
	const [photo_index, update_photo_index] = useState(0);

	// create internal state for whether or not you're zoomed in
	const [zoomed_in, update_zoomed_in] = useState(false);

	// create internal state for whether or not you're zoomed in
	const [fullscreen_photo, update_fullscreen_photo] = useState(false);

	// scroll to new picture when the photo index is changed. fires on updates to photo index & fullscreen status
	useEffect(() => {
		scrollToPicture(photo_index);
	}, [photo_index, fullscreen_photo]);

	// utility function for shifting the thumbnails
	const thumbnailShift = (direction) => {
		let $conatiner = $(".thumbnails-container");
		if (direction === "left") {
			$conatiner.animate({ scrollLeft: "-=82px" });
		} else if (direction === "right") {
			$conatiner.animate({ scrollLeft: "+=82x" });
		}
	};

	// create className string for photos-container
	let PhotosContainerClasses = "photo-container";
	if (zoomed_in) PhotosContainerClasses += " zoomed-in";
	if (fullscreen_photo) PhotosContainerClasses += " fullscreen";

	// JSX for rendering
	return (
		<div className={PhotosContainerClasses}>
			<div className="thumbnails-wrapper">
				{styles[style_index].photos.length > 6 &&
					["left", "right"].map((direction) => (
						<div
							className={`thumbnail-arrow ${direction}`}
							onClick={() => {
								thumbnailShift(direction);
							}}>
							<i className="material-icons">{`arrow_${direction}`}</i>
						</div>
					))}
				<div className="thumbnails-container">
					{styles[style_index].photos.map((photo, index) => (
						<div
							className={
								photo_index === index ? "thumbnail active" : "thumbnail"
							}
							key={index}
							data-thumbnail-index={index}
							onClick={() => {
								update_photo_index(index);
							}}>
							<img
								src={
									photo.thumbnail_url ||
									"https://www.hertrack.com/wp-content/uploads/2018/10/no-image.jpg"
								}></img>
						</div>
					))}
				</div>
			</div>
			<div
				className="fullscreen-close"
				onClick={() => {
					update_zoomed_in(false);
					update_fullscreen_photo(false);
					zoomOutOnPhotos();
				}}>
				<i className="material-icons">close</i>
			</div>
			<i
				className="material-icons arrow-left"
				onClick={() => {
					update_photo_index(
						photo_index > 0 ? photo_index - 1 : max_photo_index,
					);
					update_zoomed_in(false);
					zoomOutOnPhotos();
				}}>
				arrow_left
			</i>
			<div
				className="photos"
				onClick={() => {
					if (!fullscreen_photo) {
						update_fullscreen_photo(true);
					}
				}}>
				{styles[style_index].photos.map((photo, index) => {
					return (
						<div className="feature-photo" key={index} data-photo-index={index}>
							<img
								src={
									photo.url ||
									"https://www.hertrack.com/wp-content/uploads/2018/10/no-image.jpg"
								}
								onClick={() => {
									if (fullscreen_photo) {
										if (zoomed_in) {
											zoomOutOnPhotos();
										} else {
											zoomInOnPhoto(index);
										}
										update_zoomed_in(!zoomed_in);
									}
								}}></img>
						</div>
					);
				})}
			</div>
			<i
				className="material-icons arrow-right"
				onClick={() => {
					update_photo_index(
						photo_index < max_photo_index ? photo_index + 1 : 0,
					);
					update_zoomed_in(false);
					zoomOutOnPhotos();
				}}>
				arrow_right
			</i>
			<div className="dots">
				{(() => {
					let dots = [];
					for (let i = 0; i <= max_photo_index; i++) {
						let classes = photo_index === i ? "dot active" : "dot";
						dots.push(
							<div key={i} className={classes}>
								.
							</div>,
						);
					}
					return dots;
				})()}
			</div>
		</div>
	);
};

export default Photos;
