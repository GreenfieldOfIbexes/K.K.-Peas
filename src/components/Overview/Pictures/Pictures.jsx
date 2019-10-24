import React from "react";
import Slider from "react-slick";
import "./Pictures.css";
import mainProduct from "../../../reducers/mainProduct";
import $ from "jquery";

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
			console.log(this.props);
			$(".slick-prev").on("click tap", function() {
				changePicture("left");
			});
			$(".slick-next").on("click tap", function() {
				changePicture("right");
			});
		}, 200);
	}
	render() {
		const { mainProduct, view } = this.props;
		return (
			<div className="pictures-container">
				<Slider {...carouselSettings} className="carousel">
					{mainProduct.styles[view.style_index].photos.map((picture) => {
						let backgroundImageStyle = {
							backgroundImage: `url('${picture.url}')`,
						};
						return (
							<div className="picture-container">
								<div className="picture" style={backgroundImageStyle}></div>
							</div>
						);
					})}
				</Slider>
			</div>
		);
	}
}

export default Pictures;
