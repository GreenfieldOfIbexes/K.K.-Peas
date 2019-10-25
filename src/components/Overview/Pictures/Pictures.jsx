import React from "react";
import Slider from "react-slick";
import "./Pictures.css";
import mainProduct from "../../../reducers/mainProduct";
import $ from "jquery";
import _ from "lodash";

const carouselSettings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
};

class Pictures extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { changePicture } = this.props;
		setTimeout(function() {
			$(".slick-prev").on(
				"click tap",
				_.debounce(() => changePicture("left"), 525),
			);
			$(".slick-next").on(
				"click tap",
				_.debounce(() => {
					console.log("next");
					changePicture("right");
				}, 525),
			);
		}, 1000);
	}

	render() {
		const {
			mainProduct,
			view,
			changePicture,
			fullScreenHandler,
			fullscreenPictureClickHandler,
		} = this.props;

		const thumbnailArrowStyle = {
			visibility:
				mainProduct.styles[view.style_index].photos.length > 7
					? "visible"
					: "hidden",
		};

		const containerClasses = [
			"pictures-container",
			view.fullscreen_picture ? "fullscreen" : "collapsed",
		].join(" ");

		return (
			<div className={containerClasses}>
				<div
					className="fullscreen-button"
					onClick={() => {
						console.log("initial register of full screen click");
						fullScreenHandler();
					}}>
					<i className="material-icons">fullscreen</i>
				</div>
				<Slider {...carouselSettings} className="carousel">
					{mainProduct.styles[view.style_index].photos.map((picture, index) => {
						let backgroundImageStyle = {
							backgroundImage: `url('${picture.url}')`,
						};
						return (
							<div className="picture-container" key={index}>
								<div
									className={[
										"picture",
										view.zoomed_in && view.picture_index === index
											? "zoomed-in"
											: "zoomed-out",
									].join(" ")}
									style={backgroundImageStyle}
									onClick={fullscreenPictureClickHandler}></div>
							</div>
						);
					})}
				</Slider>

				<div className="thumbnails-wrapper">
					<div
						className="top-arrow"
						style={thumbnailArrowStyle}
						onClick={() => {
							const currentScroll = $(".thumbnails-container").scrollTop();
							$(".thumbnails-container").animate(
								{ scrollTop: currentScroll - 60 },
								300,
							);
						}}>
						<i className="material-icons">keyboard_arrow_up</i>
					</div>
					<div className="thumbnails-container">
						{mainProduct.styles[view.style_index].photos.map(
							(picture, index) => {
								let backgroundImageStyle = {
									backgroundImage: `url('${picture.thumbnail_url}')`,
								};
								let classes = [
									"thumbnail",
									index === view.picture_index ? "active" : "inactive",
								].join(" ");
								return (
									<div
										className={classes}
										key={index}
										style={backgroundImageStyle}
										onClick={() => {
											changePicture(index);
											$(
												`.slick-dots li:nth-of-type(${index + 1}) button`,
											).click();
										}}></div>
								);
							},
						)}
					</div>
					<div
						className="down-arrow"
						style={thumbnailArrowStyle}
						onClick={() => {
							const currentScroll = $(".thumbnails-container").scrollTop();
							console.log("currentScroll", currentScroll);
							$(".thumbnails-container").animate(
								{
									scrollTop: currentScroll + 60,
								},
								300,
							);
						}}>
						<i className="material-icons">keyboard_arrow_down</i>
					</div>
				</div>
			</div>
		);
	}
}

export default Pictures;
