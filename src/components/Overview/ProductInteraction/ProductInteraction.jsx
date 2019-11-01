import React, { useState } from "react";
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

	// Internal state for the product options that are currently selected. The cart_clicked prop is used to conditionally render the "select a size" error message.
	const [choice, setChoice] = useState({
		size: default_size_select,
		count: "",
		cart_clicked: false,
	});

	// Utility for changing anything in internal/hooks state
	const changeState = (value, prop) => {
		setChoice((oldValues) => {
			const newValues = Object.create(oldValues);
			newValues[prop] = value;
			return newValues;
		});
	};

	// Array of the html for each style selector
	const styleSelectors = mainProduct.styles.results.map((style, index) => {
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
	});

	// Array of the <option></option> tags for the size dropdown
	const sizeOptions = constants.SIZE_OPTIONS.map((size) => {
		if (currentStyle.skus[size]) {
			return (
				<option name="size" value={size} key={size}>
					{size}
				</option>
			);
		}
	});

	// Array of the <option></option> tags for the quantity dropdown
	const quantityOptions = (() => {
		var options = [];
		for (let i = 0; i < Math.min(currentStyle.skus[choice.size], 15); i++) {
			options.push(
				<option name="count" value={i + 1} key={i}>
					{i + 1}
				</option>,
			);
		}
		return options;
	})();

	const addToCartClickHandler = () => {
		changeState(true, "cart_clicked");
		if (!noProducts) {
			if (choice.size !== default_size_select) {
				cartHandler(
					{ product_id: mainProduct.id },
					window.localStorage.getItem("user_session"),
					noProducts,
				);
			} else {
				// display "please select a price"
			}
		}
	};

	// Determine whether or not there are no products
	const firstSku = Object.keys(currentStyle.skus)[0];
	const noProducts =
		firstSku === undefined || firstSku === "null" ? true : false;

	return (
		<div className="product-interaction">
			<div className="style-name">Style: {currentStyle.name}</div>
			<div className="style-selectors wrapper">{styleSelectors}</div>
			<div className="size-quantity wrapper">
				{choice.cart_clicked && choice.size === default_size_select && (
					<p className="error">Please select a size</p>
				)}
				<select
					value={choice.size}
					onChange={(e) => {
						changeState(encodeURI.target.value, "size");
						if (choice.count === "") choice.count = 1;
					}}
					className="size select">
					<option value={default_size_select}>Select Size</option>
					{sizeOptions}
					{noProducts && <p class="error">Out of stock</p>}
				</select>
				<select
					value={choice.count}
					onChange={(event) => {
						changeState(event.target.value, "count");
					}}
					className="count select"
					defaultValue="-"
					disabled={choice.size === default_size_select ? true : false}>
					<option value="-" disabled>
						-
					</option>
					{quantityOptions}
				</select>
			</div>
			<div className="cart-outfit wrapper">
				<div
					className={noProducts ? "add-to-cart no-products" : "add-to-cart"}
					onClick={addToCartClickHandler}>
					Add to Cart
				</div>
				<div
					className="add-to-outfit"
					onClick={() => {
						addToOutfitHandler(mainProduct);
						$("html, body").animate(
							{
								scrollTop: $("html, body").height(),
							},
							500,
						);
					}}>
					Add to Outfit
				</div>
			</div>
		</div>
	);
};

export default ProductInteraction;
