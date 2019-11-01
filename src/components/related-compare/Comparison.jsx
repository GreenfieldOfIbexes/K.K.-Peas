import React from "react";
import CardContainer from "../../containers/CardContainer.js";

const Comparison = (props) => {
	if (
		props.mainProduct === undefined ||
		props.comparisonProduct === undefined
	) {
		return null;
	}
	let featureComparison = {};
	props.mainProduct.features.forEach((featureItem) => {
		featureComparison[featureItem.feature] = [featureItem.value, null];
	});
	props.comparisonProduct.features.forEach((featureItem) => {
		if (featureComparison[featureItem.feature] === undefined) {
			featureComparison[featureItem.feature] = [null, featureItem.value];
		} else {
			featureComparison[featureItem.feature][1] = featureItem.value;
		}
	});
	return (
		<div className="modalWindow">
			<i
				className="material-icons"
				style={{ fontSize: "30px", color: "white" }}
				onClick={() => {
					document.getElementsByClassName("modalWindow")[0].style.display =
						"none";
				}}>
				clear
			</i>
			<h1 className="table-title">Features Comparison</h1>
			<table className="compare-table">
				<thead>
					<tr className="compare-row">
						<th>{props.mainProduct.name}</th>
						<th> </th>
						<th>{props.comparisonProduct.name}</th>
					</tr>
				</thead>
				<tbody>
					{Object.keys(featureComparison).map((feature) => (
						<tr key={feature} className="compare-row">
							<td>{featureComparison[feature][0]}</td>
							<td>{feature}</td>
							<td>{featureComparison[feature][1]}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Comparison;
