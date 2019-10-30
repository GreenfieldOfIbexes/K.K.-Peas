import React, { useState, useEffect } from "react";

const Helpfulness = ({ helpful }) => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		setCounter(helpful);
	}, [0]);

	return (
		<div className="Helpfulness_container">
			<p> | Helpful? &nbsp;</p>
			<p>
				<button
					className="helpfulness_btn"
					onClick={() => setCounter(counter + 1)}>
					Yes
				</button>
				({counter})
			</p>
		</div>
	);
};

export default Helpfulness;
