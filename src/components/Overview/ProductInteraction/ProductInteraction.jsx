import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import constants from "../../../constants";
import $ from "jquery";

import "./ProductInteraction.css";

const ProductInteraction = ({
	mainProduct,
	view,
	updateStyle,
	cartHandler,
	addToOutfitHandler,
}) => {
	const currentStyle = mainProduct.styles.results[view.style_index];

	const default_size_select = "Select Size";

	const [choice, setChoice] = useState({
		size: default_size_select,
		count: "",
		style_index: 0,
		cart_clicked: false,
	});

	const styleChangeToState = (index) => {
		setChoice((oldValues) => ({
			...oldValues,
			style_index: index,
		}));
	};

	const changeState = (value, prop) => {
		setChoice((oldValues) => {
			const newValues = Object.create(oldValues);
			newValues[prop] = value;
			return newValues;
		});
	};

	// Determine whether or not there are no products
	const firstSku = Object.keys(currentStyle.skus)[0];
	const noProducts =
		firstSku === undefined || firstSku === "null" ? true : false;

	return (
		<div className="product-interaction">
			<div className="style-name">Style: {currentStyle.name}</div>
			<div className="style-selectors wrapper">
				{mainProduct.styles.results.map((style, index) => {
					const backgroundImageStyle = {
						backgroundImage: `url(${style.photos[0].thumbnail_url ||
							"https://www.hertrack.com/wp-content/uploads/2018/10/no-image.jpg"})`,
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
							{view.style_index === index && (
								<div className="selected-style border">
									<div className="selected-style checkmark">
										<i className="material-icons">check</i>
									</div>
								</div>
							)}
						</div>
					);
				})}
			</div>
			<div className="size-quantity wrapper">
				{choice.cart_clicked && choice.size === default_size_select && (
					<p className="error">Please select a size</p>
				)}
				<select
					value={choice.size}
					displayEmpty={true}
					onChange={(event) => {
						changeState(event.target.value, "size");
						if (choice.count === "") choice.count = 1;
					}}
					className="size select">
					<option value={default_size_select}>Select Size</option>
					{constants.SIZE_OPTIONS.map((size) => {
						if (currentStyle.skus[size]) {
							return (
								<option name="size" value={size} key={size}>
									{size}
								</option>
							);
						}
					})}
					{noProducts && <p class="error">Out of stock</p>}
				</select>
				<select
					value={choice.count}
					displayEmpty={true}
					onChange={(event) => {
						changeState(event.target.value, "count");
					}}
					className="count select"
					disabled={choice.size === default_size_select ? true : false}>
					<option value="-" disabled selected>
						-
					</option>
					{(() => {
						var options = [];
						for (
							let i = 0;
							i < Math.min(currentStyle.skus[choice.size], 15);
							i++
						) {
							options.push(
								<option name="count" value={i + 1} key={i}>
									{i + 1}
								</option>,
							);
						}
						return options;
					})()}
				</select>
			</div>
			<div className="cart-outfit wrapper">
				<div
					className={noProducts ? "add-to-cart no-products" : "add-to-cart"}
					onClick={() => {
						changeState(true, "cart_clicked");
						if (!noProducts) {
							if (choice.size !== default_size_select) {
								cartHandler({ product_id: mainProduct.id }, noProducts);
							} else {
								// display "please select a price"
							}
						}
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
