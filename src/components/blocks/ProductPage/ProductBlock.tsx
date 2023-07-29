import React from "react";

const ProductBlock: React.FC = () => {
	return (
		<div className="product-block">
			<h1 className="product-block__title">Тайтл кросовок</h1>
			<div className="product-block__product-wrapper">
				<div className="product-block__img-wrapper">
					<div className="product-block__img-main">
						<img src="https://blob.sxv.pl/shops/media/f1000/2022/adidas/207122/adidas-adimatic-yellow-gy2090-6376051aa854f.jpg" alt="" />
					</div>
					<div className="product-block__img-carousel">
						<div className="product-block__img-carousel-item">
							<img src="https://blob.sxv.pl/shops/media/f1000/2022/adidas/207122/adidas-adimatic-yellow-gy2090-6376051aa854f.jpg" alt="" />
						</div>
						<div className="product-block__img-carousel-item">
							<img src="https://blob.sxv.pl/shops/media/f1000/2022/adidas/207122/adidas-adimatic-yellow-gy2090-6376051aa85ac.jpg" alt="" />
						</div>
						<div className="product-block__img-carousel-item">
							<img src="https://blob.sxv.pl/shops/media/f1000/2022/adidas/207122/adidas-adimatic-yellow-gy2090-6376051aa85da.jpg" alt="" />
						</div>
						<div className="product-block__img-carousel-item">
							<img src="https://blob.sxv.pl/shops/media/f1000/2022/adidas/207122/adidas-adimatic-yellow-gy2090-6376051aa8607.jpg" alt="" />
						</div>
					</div>
				</div>
				<div className="product-block__controls-wrapper">
					<div className="product-block__price-wrapper">
						<h2 className="product-block__price-current">$412</h2>
						<h3 className="product-block__price-old">$522</h3>
					</div>
					<div id="ProductBlockColor" className="product-block__option-wrapper">
						<h3 className="product-block__option-title">Colour</h3>
						<ul className="product-block__option-list">
							<li className="product-block__option-list-item product-block__option-list-item_color active">
								<img src="https://blob.sxv.pl/shops/media/wbthumb/2022/adidas/207122/adidas-adimatic-yellow-gy2090-6376051aa854f.jpg" alt="" />
							</li>
							<li className="product-block__option-list-item product-block__option-list-item_color">
								<img src="https://blob.sxv.pl/shops/media/wbthumb/2022/adidas/206473/adidas-adimatic-core-black-pink-tint-gy2092-639c1a8ba610c.jpg" alt="" />
							</li>
						</ul>
					</div>
					<div id="ProductBlockSize" className="product-block__option-wrapper">
						<h3 className="product-block__option-title">Size</h3>
						<ul className="product-block__option-list">
							<li className="product-block__option-list-item product-block__option-list-item_size">
								<p>41</p>
							</li>
							<li className="product-block__option-list-item product-block__option-list-item_size active">
								<p>42.5</p>
							</li>
						</ul>
					</div>
					<div className="product-block__option-wrapper">
						<h3 className="product-block__option-title">Quantity</h3>
						<div className="product-block__option-counter">
							<div onClick={() => {}} className="product-block__option-counter-handler icon-shadow icon-48px">
								<svg width="42" height="42" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M3.33398 3.33398H26.0007V26.0007H3.33398V3.33398Z" fill="#4EFF9F" />
									<path fillRule="evenodd" clipRule="evenodd" d="M2.66699 3.33366C2.66699 2.96547 2.96547 2.66699 3.33366 2.66699H26.0003C26.3685 2.66699 26.667 2.96547 26.667 3.33366V26.0003C26.667 26.3685 26.3685 26.667 26.0003 26.667H3.33366C2.96547 26.667 2.66699 26.3685 2.66699 26.0003V3.33366ZM4.00033 4.00033V25.3337H25.3337V4.00033H4.00033Z" fill="black" />
									<path fillRule="evenodd" clipRule="evenodd" d="M21.3333 16.0007H8V13.334H21.3333V16.0007Z" fill="black" />
								</svg>
							</div>

							<input onChange={() => {}} type="number" defaultValue="1" className="product-block__option-counter-number" />

							<div onClick={() => {}} className="product-block__option-counter-handler icon-shadow icon-48px">
								<svg width="42" height="42" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M3.33398 3.33398H26.0007V26.0007H3.33398V3.33398Z" fill="#FFCA29" />
									<path fillRule="evenodd" clipRule="evenodd" d="M2.66699 3.33366C2.66699 2.96547 2.96547 2.66699 3.33366 2.66699H26.0003C26.3685 2.66699 26.667 2.96547 26.667 3.33366V26.0003C26.667 26.3685 26.3685 26.667 26.0003 26.667H3.33366C2.96547 26.667 2.66699 26.3685 2.66699 26.0003V3.33366ZM4.00033 4.00033V25.3337H25.3337V4.00033H4.00033Z" fill="black" />
									<path fillRule="evenodd" clipRule="evenodd" d="M13.3333 7.99968L13.3333 21.333L16 21.333L16 7.99968L13.3333 7.99968Z" fill="black" />
									<path fillRule="evenodd" clipRule="evenodd" d="M7.99968 16.0007H21.333V13.334H7.99968V16.0007Z" fill="black" />
								</svg>
							</div>
						</div>
					</div>
					<div className="product-block__add-cart-button button button_normal">
						ADD TO CART
						<span> (5)</span>
					</div>
				</div>
			</div>
			<div className="product-block__info-wrapper">
				<p className="product-block__info-text">Text text text text text text text text text text text text text</p>
				<div className="product-block__info-img">
					<img src="https://blob.sxv.pl/shops/media/f1000/2022/adidas/207122/adidas-adimatic-yellow-gy2090-6376051aa8632.jpg" alt="" />
				</div>
			</div>
		</div>
	);
};

export default ProductBlock;
