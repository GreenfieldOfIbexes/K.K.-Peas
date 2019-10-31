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
		<>
			<table>
				<tr>
					<th>{props.mainProduct.name}</th>
					<th></th>
					<th>{props.comparisonProduct.name}</th>
				</tr>
				{Object.keys(featureComparison).map((feature) => (
					<tr>
						<td>{featureComparison[feature][0]}</td>
						<td>{feature}</td>
						<td>{featureComparison[feature][1]}</td>
					</tr>
				))}
			</table>
		</>
	);
};

export default Comparison;
