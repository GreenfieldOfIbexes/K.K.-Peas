import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";

import "./ProductInteraction.css";

const ProductInteraction = ({ mainProduct: { styles }, view, updateStyle }) => {
	const currentStyle = styles[view.style_index];

	const [choice, setChoice] = React.useState({
		size: "Select Size",
		count: "",
		style_index: 0,
	});

	const sizeChangeToState = (event) => {
		setChoice((oldValues) => ({
			...oldValues,
			size: event.target.value,
		}));
	};

	const styleChangeToState = (index) => {
		setChoice((oldValues) => ({
			...oldValues,
			style_index: index,
		}));
	};

	const countChangeToState = (event) => {
		setChoice((oldValues) => ({
			...oldValues,
			count: event.target.value,
		}));
	};

	return (
		<div className="product-interaction">
			<div className="style-name">Style: {currentStyle.name}</div>
			<div className="style-selectors container">
				{styles.map((style, index) => {
					const backgroundImageStyle = {
						backgroundImage: `url(${style.photos[0].thumbnail_url})`,
					};
					return (
						<div
							className="style-selector container"
							key={index}
							onClick={() => {
								updateStyle(index);
								styleChangeToState(index);
							}}>
							<div className="style-image" style={backgroundImageStyle}></div>
						</div>
					);
				})}
			</div>
			<div className="size-quantity container">
				<Select
					value={choice.size}
					displayEmpty={true}
					onChange={sizeChangeToState}
					className="size select">
					<MenuItem value="Select Size" disabled>
						Select Size
					</MenuItem>
					{["XXS", "XS", "S", "M", "L", "XL", "XXL"].map((size) => {
						if (currentStyle.skus[size]) {
							return (
								<MenuItem name="size" value={size} key={size}>
									{size}
								</MenuItem>
							);
						}
					})}
				</Select>
				<Select
					value={choice.count}
					displayEmpty={true}
					onChange={countChangeToState}
					className="count select">
					{(() => {
						var menuItems = [];
						for (
							let i = 0;
							i < Math.min(currentStyle.skus[choice.size], 15);
							i++
						) {
							menuItems.push(
								<MenuItem name="count" value={i + 1} key={i}>
									{i + 1}
								</MenuItem>,
							);
						}
						return menuItems;
					})()}
				</Select>
			</div>
			<div className="cart-outfit container"></div>
		</div>
	);
};

export default ProductInteraction;
