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
	const currentStyle = mainProduct.styles[view.style_index];

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

	const changeState = (event, prop) => {
		setChoice((oldValues) => {
			const newValues = Object.create(oldValues);
			newValues[prop] = event.target.value;
			return newValues;
		});
	};

	return (
		<div className="product-interaction">
			<div className="style-name">Style: {currentStyle.name}</div>
			<div className="style-selectors wrapper">
				{mainProduct.styles.map((style, index) => {
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
