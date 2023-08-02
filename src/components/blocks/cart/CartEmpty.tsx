import React from "react";
import { Link } from "react-router-dom";

const CartEmpty: React.FC = () => {
	return (
		<div className="container">
			<h1 className="cart__title h1_inner-pages">Cart</h1>
			<div className="cart__wrapper cart__wrapper_empty">
				<span className="cart__empty-cart-text">Your cart is empty!</span>
				<Link to="/" className="button button_normal cart__empty-cart-button">
					SHOP NOW
				</Link>
			</div>
		</div>
	);
};

export default CartEmpty;
