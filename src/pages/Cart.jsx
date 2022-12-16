import { Link } from "react-router-dom";

const Cart = () => {
    return (
        <section class="cart container">
            <h1 class="cart__title h1_inner-pages">Cart</h1>
			<div class="cart__wrapper cart__wrapper_empty">
                <span class="cart__empty-cart-text">Your cart is empty!</span>
                <Link to="/" class="button button_normal cart__empty-cart-button">SHOP NOW</Link>
            </div>
        </section>
        
    );
}

export default Cart;