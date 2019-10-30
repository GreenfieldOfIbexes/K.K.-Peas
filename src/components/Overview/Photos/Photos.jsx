import React, { useEffect } from "react";
import Slider from "react-slick";
import "./Photos.css";
import $ from "jquery";
import _ from "lodash";
import fullScreenToggle from "../../../actions/fullScreenToggle";

// thumbnails
// onClick={() => {
// 	const currentScroll = $(".thumbnails-container").scrollTop();
// 	console.log("currentScroll", currentScroll);
// 	$(".thumbnails-container").animate(
// 		{
// 			scrollTop: currentScroll + 60,
// 		},
// 		300,
// 	);
// }}>

const photos = ({
	styles,
	style_index,
	photo_index,
	max_photo_index,
	changephoto,
	arrowClickHandler,
	zoomed_in,
	fullscreen_photo,
	fullscreenphotoClickHandler,
	fullScreenHandler,
}) => {
	let PhotosContainerClasses = ["photo-container"];
	zoomed_in ? PhotosContainerClasses.push("zoomed-in") : null;
	fullscreen_photo ? PhotosContainerClasses.push("fullscreen") : null;

	return (
		<div className={PhotosContainerClasses.join(" ")}>
			<div className="thumbnails-container">
				{styles[style_index].photos.map((photo, index) => {
					let classes =
						photo_index === index ? "thumbnail active" : "thumbnail";
					return (
						<div className={classes} key={index} data-thumbnail-index={index}>
							<img src={photo.thumbnail_url}></img>
						</div>
					);
				})}
			</div>
			<i
				className="material-icons arrow-left"
				onClick={() => {
					arrowClickHandler("left");
				}}>
				arrow_left
			</i>
			<div className="photos" onClick={fullScreenHandler}>
				{styles[style_index].photos.map((photo, index) => {
					return (
						<div className="feature-photo" key={index} data-photo-index={index}>
							<img src={photo.url} onClick={fullscreenphotoClickHandler}></img>
						</div>
					);
				})}
			</div>
			<i
				className="material-icons arrow-right"
				onClick={() => {
					arrowClickHandler("right");
				}}>
				arrow_right
			</i>
			<div className="dots">
				{(() => {
					let dots = [];
					for (let i = 0; i < max_photo_index; i++) {
						dots.push(
							<div key={i} className="dot">
								dot
							</div>,
						);
					}
					return dots;
				})()}
			</div>
		</div>
	);
};

export default photos;
