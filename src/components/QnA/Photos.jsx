import React from "react";

const Photos = ({ photos }) => {
	return (
		<React.Fragment>
			{photos.length > 0 ? (
				<div className="photos_container">
					{photos.map((photo, i) => {
						return <img key={i} src={photo} className="answer_image" />;
					})}
				</div>
			) : (
				<span className="photos_span"></span>
			)}
		</React.Fragment>
	);
};

export default Photos;
