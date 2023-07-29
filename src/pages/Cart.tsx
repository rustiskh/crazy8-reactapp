import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/blocks/cart/CartItem";
import CartEmpty from "../components/blocks/cart/CartEmpty";
import { selectorCart } from "../redux/slices/cartSlice";

const Cart = () => {
	const { totalPrice, items } = useSelector(selectorCart);

	const shippingPrice: number = items.length ? 30 : 0;
	const giftDiscountRatio: number = 10;
	const giftDiscount: number = Math.ceil(totalPrice * (giftDiscountRatio / 100) * 100) / 100;
	const orderSum: number = Math.ceil((totalPrice + shippingPrice - giftDiscount) * 100) / 100;

	if (!totalPrice) {
		return <CartEmpty />;
	}

	return (
		<section className="cart container">
			<h1 className="cart__title h1_inner-pages">Checkout</h1>
			<div className="cart__wrapper">
				{/* <!-- <div className="cart-bill">
                    Сделать потом
                </div> --> */}
				<div className="cart-order">
					<h2 className="cart-order__title">Order</h2>
					<div className="cart-order__items-wrapper">
						{items.map((item: any) => (
							<CartItem key={`${item.SKU}-${item.sizes}-${item.colors}`} {...item} />
						))}
					</div>
					<div className="cart-order__info-wrapper">
						<div className="cart-order__info-item">
							<p className="cart-order__info-text">Subtotal</p>
							<p className="cart-order__info-sum">${totalPrice}</p>
						</div>
						<div className="cart-order__info-item">
							<p className="cart-order__info-text">Shipping</p>
							<p className="cart-order__info-sum">${shippingPrice}</p>
						</div>
						<div className="cart-order__info-item">
							<p className="cart-order__info-text">{giftDiscountRatio}% discount</p>
							<p className="cart-order__info-sum">-${giftDiscount}</p>
						</div>
						<div className="cart-order__info-item">
							<p className="cart-order__info-text">Total</p>
							<p className="cart-order__info-sum">${orderSum}</p>
						</div>
					</div>
					<button className="button button_normal cart-order__payment-button">PURCHASE ${orderSum}</button>
				</div>
			</div>
		</section>
	);
};

export default Cart;
