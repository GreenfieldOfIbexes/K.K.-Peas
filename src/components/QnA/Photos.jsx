import React from "react";

const Photos = ({ photos }) => {
	return (
		<React.Fragment>
			{photos ? (
				<div>
					{photos.map((photo, i) => {
						return <img key={i} src={photo} className="answer_image" />;
					})}
				</div>
			) : (
				<span></span>
			)}
		</React.Fragment>
	);
};

export default Photos;
