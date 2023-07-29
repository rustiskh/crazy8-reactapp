import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { minusItem, plusItem, removeItem } from "../../../redux/slices/cartSlice";

type CartItemProps = {
	title: string;
	price: number;
	SKU: string;
	sizes: number;
	images: string;
	colors: string;
	count: number;
};

const CartItem: React.FC<CartItemProps> = ({ SKU, title, sizes, images, colors, count, price }) => {
	const dispatch = useDispatch();

	const onClickPlus = () => {
		dispatch(plusItem({ SKU, sizes, colors, count }));
	};

	const onClickMinus = () => {
		dispatch(minusItem({ SKU, sizes, colors }));
	};

	const onClickRemove = () => {
		dispatch(removeItem({ SKU, sizes, colors }));
	};

	console.log(images);

	return (
		<div className="cart-order-item">
			<div className="cart-order-item__header">
				<div className="cart-order-item__product-info-wrapper">
					<img src={images} alt="Your item" className="cart-order-item__product-img" />
					<Link to="#" className="cart-order-item__product-name">
						{title}
					</Link>
				</div>
				<div onClick={onClickRemove} className="cart-order-item__remove-item">
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M3.71428 14L14 3.71429L12.2857 2L2 12.2857L3.71428 14Z" fill="#7EC7D7"></path>
						<path fillRule="evenodd" clipRule="evenodd" d="M14 12.2857L3.71432 2L2.00004 3.71429L12.2857 14L14 12.2857Z" fill="#7EC7D7"></path>
					</svg>
				</div>
			</div>

			<div className="cart-order-item__controls-wrapper">
				<div className="cart-order-item__options-wrapper">
					<div id="cart-order-item-size" className="cart-order-item__option-item">
						<p className="cart-order-item__option-name">Size</p>
						<div className="cart-order-item__option-box">
							<span className="cart-order-item__option-size-text">{sizes}</span>
						</div>
					</div>
					{colors && (
						<div id="cart-order-item-color" className="cart-order-item__option-item">
							<p className="cart-order-item__option-name">Color</p>
							<div className="cart-order-item__option-box">
								<img src={colors} alt="Color" className="cart-order-item__option-color-img" />
							</div>
						</div>
					)}
				</div>
				<div className="cart-order-item__counters-wrapper">
					<div className="cart-order-item__counter-wrapper">
						<div onClick={onClickMinus} className="cart-order-item__counter-minus icon-shadow icon-32px">
							<svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M3.33398 3.33398H26.0007V26.0007H3.33398V3.33398Z" fill="#4EFF9F"></path>
								<path fillRule="evenodd" clipRule="evenodd" d="M2.66699 3.33366C2.66699 2.96547 2.96547 2.66699 3.33366 2.66699H26.0003C26.3685 2.66699 26.667 2.96547 26.667 3.33366V26.0003C26.667 26.3685 26.3685 26.667 26.0003 26.667H3.33366C2.96547 26.667 2.66699 26.3685 2.66699 26.0003V3.33366ZM4.00033 4.00033V25.3337H25.3337V4.00033H4.00033Z" fill="black"></path>
								<path fillRule="evenodd" clipRule="evenodd" d="M21.3333 16.0007H8V13.334H21.3333V16.0007Z" fill="black"></path>
							</svg>
						</div>

						<span className="cart-order-item__counter-number">{count}</span>

						<div onClick={onClickPlus} className="cart-order-item__counter-plus icon-shadow icon-32px">
							<svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M3.33398 3.33398H26.0007V26.0007H3.33398V3.33398Z" fill="#FFCA29"></path>
								<path fillRule="evenodd" clipRule="evenodd" d="M2.66699 3.33366C2.66699 2.96547 2.96547 2.66699 3.33366 2.66699H26.0003C26.3685 2.66699 26.667 2.96547 26.667 3.33366V26.0003C26.667 26.3685 26.3685 26.667 26.0003 26.667H3.33366C2.96547 26.667 2.66699 26.3685 2.66699 26.0003V3.33366ZM4.00033 4.00033V25.3337H25.3337V4.00033H4.00033Z" fill="black"></path>
								<path fillRule="evenodd" clipRule="evenodd" d="M13.3333 7.99968L13.3333 21.333L16 21.333L16 7.99968L13.3333 7.99968Z" fill="black"></path>
								<path fillRule="evenodd" clipRule="evenodd" d="M7.99968 16.0007H21.333V13.334H7.99968V16.0007Z" fill="black"></path>
							</svg>
						</div>
					</div>
					<div className="cart-order-item__total-cost">${Math.ceil(count * price * 100) / 100}</div>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
