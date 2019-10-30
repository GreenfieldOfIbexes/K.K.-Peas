import React, { useEffect } from "react";
import Slider from "react-slick";
import "./Pictures.css";
import $ from "jquery";
import _ from "lodash";

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

const Pictures = ({
	styles,
	style_index,
	picture_index,
	max_picture_index,
	changePicture,
	arrowClickHandler,
}) => {
	return (
		<div className="picture-container">
			<div className="thumbnails-container">
				{styles[style_index].photos.map((photo, index) => {
					let classes =
						picture_index === index ? "thumbnail active" : "thumbnail";
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
			<div className="pictures">
				{styles[style_index].photos.map((photo, index) => {
					return (
						<div className="feature-photo" key={index} data-photo-index={index}>
							<img src={photo.url}></img>
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
					for (let i = 0; i < max_picture_index; i++) {
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

export default Pictures;
