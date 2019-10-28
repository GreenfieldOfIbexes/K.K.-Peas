import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";

import "./ProductInteraction.css";

const ProductInteraction = ({
	mainProduct,
	view,
	updateStyle,
	cartHandler,
	addToOutfitHandler,
}) => {
	const currentStyle = mainProduct.styles.results[view.style_index];

	const [choice, setChoice] = React.useState({
		size: "Select Size",
		count: "",
		style_index: 0,
	});

	const styleChangeToState = (index) => {
		setChoice((oldValues) => ({
			...oldValues,
			style_index: index,
		}));
	};

	const changeState = (event, prop) => {
		setChoice((oldValues) => {
			const newValues = Object.create(oldValues);
			newValues[prop] = event.target.value;
			return newValues;
		});
	};

	const noProducts = Object.keys(currentStyle.skus).length > 0 ? false : true;

	return (
		<div className="product-interaction">
			<div className="style-name">Style: {currentStyle.name}</div>
			<div className="style-selectors wrapper">
				{mainProduct.styles.results.map((style, index) => {
					const backgroundImageStyle = {
						backgroundImage: `url(${style.photos[0].thumbnail_url})`,
					};
					return (
						<div
							className="style-selector wrapper"
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
			<div className="size-quantity wrapper">
				<FormControl error={noProducts}>
					<Select
						value={choice.size}
						displayEmpty={true}
						onChange={(event) => {
							changeState(event, "size");
							if (choice.count === "") choice.count = 1;
						}}
						className="size select">
						<MenuItem value="Select Size" disabled>
							Select Size
						</MenuItem>
						{[
							"XXS",
							"XS",
							"S",
							"M",
							"L",
							"XL",
							"XXL",
							"6",
							"6.5",
							"7",
							"7.5",
							"8",
							"8.5",
							"9",
							"9.5",
							"10",
							"10.5",
							"11",
							"11.5",
							"12",
							"12.5",
							"13",
							"13.5",
							"14",
							"14.5",
							"15",
							"15.5",
						].map((size) => {
							if (currentStyle.skus[size]) {
								return (
									<MenuItem name="size" value={size} key={size}>
										{size}
									</MenuItem>
								);
							}
						})}
					</Select>
					{noProducts && <FormHelperText>Out of stock</FormHelperText>}
				</FormControl>
				<Select
					value={choice.count}
					displayEmpty={true}
					onChange={(event) => {
						changeState(event, "count");
					}}
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
			<div className="cart-outfit wrapper">
				<div
					className="add-to-cart"
					onClick={() => {
						cartHandler({ product_id: mainProduct.id });
					}}>
					Add to Cart
				</div>
				<div
					className="add-to-outfit"
					onClick={() => {
						addToOutfitHandler(mainProduct);
					}}>
					Add to Outfit
				</div>
			</div>
		</div>
	);
};

export default ProductInteraction;
