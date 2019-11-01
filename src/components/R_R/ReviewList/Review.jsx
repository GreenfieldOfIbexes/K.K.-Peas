import React, { useState } from "react";
import Stars from "../Stars.jsx";
import Helpful from "./Helpful.jsx";
import Report from "./Report.jsx";
import Photos from "./Photos.jsx";
import moment from "moment";
import Response from "./Response";
import "./Review.css";
import { NavigationFullscreenExit } from "material-ui/svg-icons";

const Review = (props) => {
	var date = moment(props.review.date).format("MMM DD, YYYY");
	const summary = props.review.summary;
	// const [body, setBody] = useState(props.review.body)
	// if(body.length > 250){
	//     setBody(props.review.body.slice(0, 250))
	// }

	return (
		<>
			<div className="review-header-container">
				<div>
					<Stars rating={props.review.rating} />
				</div>
				<div>
					{props.review.reviewer_name}, {date}
				</div>
			</div>
			<div className="review-title">{summary}</div>
			<div className="review-description">{props.review.body}</div>
			{/* {(body.length === 250) ?  <div className="review-expand" onClick={() => setBody(props.review.body)} style={{display: 'flex'}}>expand</div> : <div/>} */}
			{props.review.photos.map((photo) => {
				return <Photos photo={photo} />;
			})}
			{props.review.response ? (
				<Response response={props.review.response} />
			) : (
				<div />
			)}
			<div className="footer">
				{props.review.recommend === 1 ? (
					<div className="review-recommend">
						I recommend this product{" "}
						<i
							className="material-icons"
							style={{ position: "relative", top: "5px" }}>
							check
						</i>
					</div>
				) : (
					<div />
				)}
				<div className="footer-buttons">
					<div className="helpful">
						<Helpful review={props.review} />
					</div>
					<div className="report">
						<Report review={props.review} />
					</div>
				</div>
			</div>
			<div className="review-line" />
		</>
	);
};

export default Review;
