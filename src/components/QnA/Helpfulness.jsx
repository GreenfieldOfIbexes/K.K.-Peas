import React, { useState, useEffect } from "react";

const Helpfulness = ({ helpfulnessCount }) => {
	const [counter, setCounter] = useState(0);
	const [helpful, updateHelpful] = useState(false);

	useEffect(() => {
		setCounter(helpfulnessCount);
	}, [0]);

	const handleClick = () => {
		if (!helpful) {
			updateHelpful(true);
		} else {
			return;
		}
		setCounter(counter + 1);
	};
	return (
		<div className="Helpfulness_container">
			<p> | Helpful? &nbsp;</p>
			<p>
				<button className="helpfulness_btn all_btns" onClick={handleClick}>
					Yes
				</button>
				({counter})
			</p>
			&nbsp;|&nbsp;
		</div>
	);
};

export default Helpfulness;
