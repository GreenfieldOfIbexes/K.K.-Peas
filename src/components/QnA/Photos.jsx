import React from "react";

const Photos = ({ photos }) => {
	return (
		<div className="photos_container">
			{photos
				? photos.map((photo, i) => {
						return <img key={i} src={photo} className="answer_image" />;
				  })
				: ""}
		</div>
	);
};

export default Photos;
