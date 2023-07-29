import React from "react";
import { useDispatch, useSelector } from "react-redux";
// @ts-ignore
import Select, { ValueType } from "react-select";
import { addItem, selectorCartItemBySKU } from "../../../redux/slices/cartSlice";
import { Link } from "react-router-dom";

type CatalogProductCardProps = {
	title: string;
	price: number;
	brand: string;
	description: string;
	oldPrice: number;
	discount: number;
	SKU: string;
	flags: string[];
	sizes: number[];
	images: string[];
	colors: string[];
};

const CatalogProductCard: React.FC<CatalogProductCardProps> = ({ SKU, title, price, images, sizes, colors }) => {
	const [itemCount, setItemCount] = React.useState<number>(1);

	const onClickPlusButton = () => {
		setItemCount(itemCount + 1);
	};

	const onClickMinusButton = () => {
		if (itemCount > 0) {
			setItemCount(itemCount - 1);
		}
	};

	// Selects
	// Sizes
	const sizeOptions = sizes.map((item) => ({ value: item, label: item.toString() }));
	const [selectedSize, setSelectedSize] = React.useState<ValueType<typeof sizeOptions>>(sizeOptions[0]);
	// Colors
	const colorOptions = colors.map((item) => ({ value: item, label: "", image: item.toString() }));
	const [selectedColor, setSelectedColor] = React.useState<ValueType<typeof colorOptions>>(colorOptions[0]);

	// Добавление в корзину
	const dispatch = useDispatch();
	const cartItem = useSelector(selectorCartItemBySKU(SKU));
	const addedCount: number = cartItem ? cartItem.count : 0;
	const onClickAdd = () => {
		if (itemCount <= 0) {
			// Проверка на корректность количества перед добавлением в корзину
			return;
		}

		const item = {
			SKU,
			title,
			price,
			images: images[0],
			sizes: selectedSize.value,
			colors: selectedColor && selectedColor.value,
			count: itemCount, // Используем значение itemCount из состояния компонента
		};
		dispatch(addItem(item));
	};

	return (
		<div className="product-card">
			<div className="product-card__img-wrapper">
				<img src={images[0]} alt={title} className="product-card__img" />
			</div>
			<div className="product-card__info-wrapper">
				<Link to={`/product/${title.replaceAll(" ", "-").toLowerCase().replace(/"/g, "")}`} className="product-card__title">
					{title.length > 30 ? title.slice(0, 30) + `...` : title}
				</Link>
				<div className="product-card__select-wrapper">
					<div className="product-card__select-container">
						<p className="product-card__select-title">Size</p>
						<Select className="product-card-select-item" classNamePrefix="product-card-select" defaultValue={selectedSize} onChange={(selectedOption: ValueType<typeof sizeOptions>) => setSelectedSize(selectedOption)} options={sizeOptions} />
					</div>
					{colors.length > 0 && (
						<div className="product-card__select-container">
							<p className="product-card__select-title">Color</p>
							<Select
								id="color"
								className="product-card-select-item"
								classNamePrefix="product-card-select"
								defaultValue={selectedColor}
								onChange={(selectedOption: ValueType<typeof colorOptions>) => setSelectedColor(selectedOption)}
								options={colorOptions}
								formatOptionLabel={(color) => (
									<div className="color">
										<img src={color.image} alt="Color" />
									</div>
								)}
								isSearchable={false}
							/>
						</div>
					)}
				</div>
				<div className="product-card__footer">
					<div className="product-card__price-wrapper">
						<p className="product-card__current-price">${price}</p>
						<p className="product-card__old-price"></p>
					</div>
					<div className="product-card__counter-wrapper">
						{itemCount > 1 && (
							<div onClick={() => onClickMinusButton()} className="product-card__counter-minus icon-shadow icon-32px">
								<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M3.33398 3.33398H26.0007V26.0007H3.33398V3.33398Z" fill="#4EFF9F" />
									<path fillRule="evenodd" clipRule="evenodd" d="M2.66699 3.33366C2.66699 2.96547 2.96547 2.66699 3.33366 2.66699H26.0003C26.3685 2.66699 26.667 2.96547 26.667 3.33366V26.0003C26.667 26.3685 26.3685 26.667 26.0003 26.667H3.33366C2.96547 26.667 2.66699 26.3685 2.66699 26.0003V3.33366ZM4.00033 4.00033V25.3337H25.3337V4.00033H4.00033Z" fill="black" />
									<path fillRule="evenodd" clipRule="evenodd" d="M21.3333 16.0007H8V13.334H21.3333V16.0007Z" fill="black" />
								</svg>
							</div>
						)}

						<span className="product-card__counter-number">{itemCount}</span>

						<div onClick={() => onClickPlusButton()} className="product-card__counter-plus icon-shadow icon-32px">
							<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M3.33398 3.33398H26.0007V26.0007H3.33398V3.33398Z" fill="#FFCA29" />
								<path fillRule="evenodd" clipRule="evenodd" d="M2.66699 3.33366C2.66699 2.96547 2.96547 2.66699 3.33366 2.66699H26.0003C26.3685 2.66699 26.667 2.96547 26.667 3.33366V26.0003C26.667 26.3685 26.3685 26.667 26.0003 26.667H3.33366C2.96547 26.667 2.66699 26.3685 2.66699 26.0003V3.33366ZM4.00033 4.00033V25.3337H25.3337V4.00033H4.00033Z" fill="black" />
								<path fillRule="evenodd" clipRule="evenodd" d="M13.3333 7.99968L13.3333 21.333L16 21.333L16 7.99968L13.3333 7.99968Z" fill="black" />
								<path fillRule="evenodd" clipRule="evenodd" d="M7.99968 16.0007H21.333V13.334H7.99968V16.0007Z" fill="black" />
							</svg>
						</div>
					</div>
				</div>
				<div onClick={onClickAdd} className="product-card__add-cart-button button button_normal">
					ADD TO CART
					{addedCount > 0 && <span> ({addedCount})</span>}
				</div>
			</div>
		</div>
	);
};

export default CatalogProductCard;
