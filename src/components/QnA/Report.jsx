import React, { useState, useEffect } from "react";

const Report = () => {
	const [text, updateText] = useState(false);

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
				<button className="report_btn all_btns">Reported</button>
			) : (
				<button className="report_btn all_btns">Report</button>
			)}
		</div>
	);
};

export default Report;
