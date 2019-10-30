import React, { useState, useEffect } from "react";

const Report = () => {
	const [text, updateText] = useState(false);

	// useEffect(() => {
	//   updateText(false)
	// })
	const handleClick = () => {
		if (!text) {
			updateText(true);
		} else {
			return;
		}
	};
	return (
		<div onClick={handleClick}>
			{text ? (
				<button className="report_btn">Reported</button>
			) : (
				<button className="report_btn">Report</button>
			)}
		</div>
	);
};

export default Report;
