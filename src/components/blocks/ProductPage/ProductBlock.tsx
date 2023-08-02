import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addItem, selectorCart, selectorCartItemBySKU } from "../../../redux/slices/cartSlice";

type ProductBlockProps = {
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

function getRandomInfoImage(arr: string[]) {
	const rand = Math.floor(Math.random() * arr?.length);
	return arr[rand];
}

const ProductBlock: React.FC<ProductBlockProps> = ({ SKU }) => {
	const navigate = useNavigate();

	const productTitle = useParams();

	const [product, setProduct] = React.useState<{
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
	}>();

	// Стейты для установки цвета и размера поумолчанию, для последующей отправки в корзину
	const [colorCart, setColorCart] = React.useState<string>("");
	const [sizeCart, setSizeCart] = React.useState<number>();
	const [randomInfoImage, setRandomInfoImage] = React.useState<string>("");

	React.useEffect(() => {
		async function getProduct() {
			try {
				const { data } = await axios.get(`http://localhost:3005/products`);
				const foundProduct = data.find((obj) => obj.title.replaceAll(" ", "-").toLowerCase().replace(/"/g, "") === productTitle.title);
				setProduct(foundProduct);
				setColorCart(foundProduct.colors[0]);
				setSizeCart(foundProduct.sizes[0]);
				setRandomInfoImage(getRandomInfoImage(foundProduct.images));
			} catch (error) {
				alert("Ошибка при получении кросовок!");
				navigate("/");
			}
		}
		getProduct();
	}, []);

	// Стейт для галереи - устанавливает главное изображение [0] и затем меняет при клике
	const [imageIndex, setActiveImageIndex] = React.useState(0);
	const [mainImage, setMainImage] = React.useState("");

	const imagesCarousel = product?.images.map((image, i) => (
		<div
			onClick={() => {
				setMainImage(image);
				setActiveImageIndex(i);
			}}
			className={imageIndex === i ? "product-block__img-carousel-item active" : "product-block__img-carousel-item"}
		>
			<img src={image} alt="" />
		</div>
	));

	// const [colorIndex, setActiveColorIndex] = React.useState(0);

	// const optionColors = product?.colors.map((image, i) => (
	// 	<li onClick={() => setActiveColorIndex(i)} className={colorIndex === i ? "product-block__option-list-item product-block__option-list-item_color active" : "product-block__option-list-item product-block__option-list-item_color"}>
	// 		<img src={image} alt="" />
	// 	</li>
	// ));

	const optionColors = product?.colors.map((image) => (
		<li onClick={() => setColorCart(image)} className={colorCart === image ? "product-block__option-list-item product-block__option-list-item_color active" : "product-block__option-list-item product-block__option-list-item_color"}>
			<img src={image} alt="" />
		</li>
	));

	// const [sizeIndex, setActiveSizeIndex] = React.useState(0);

	// const optionSizes = product?.sizes.map((size, i) => (
	// 	<li onClick={() => setActiveSizeIndex(i)} className={sizeIndex === i ? "product-block__option-list-item product-block__option-list-item_size active" : "product-block__option-list-item product-block__option-list-item_size"}>
	// 		<p>{size}</p>
	// 	</li>
	// ));

	const optionSizes = product?.sizes.map((size) => (
		<li onClick={() => setSizeCart(size)} className={sizeCart === size ? "product-block__option-list-item product-block__option-list-item_size active" : "product-block__option-list-item product-block__option-list-item_size"}>
			<p>{size}</p>
		</li>
	));

	const [itemCount, setItemCount] = React.useState<number>(1);

	const onClickPlusButton = () => {
		setItemCount(itemCount + 1);
	};

	const onClickMinusButton = () => {
		if (itemCount > 0) {
			setItemCount(itemCount - 1);
		}
	};

	// Добавление в корзину
	const dispatch = useDispatch();
	// const cartItem = useSelector(selectorCartItemBySKU(SKU));
	const { items } = useSelector(selectorCart);
	const addedCount = items.reduce((final: any, item: any) => final + item.count, 0);

	// const addedCount: number = cartItem ? cartItem.count : 0;

	const onClickAdd = () => {
		if (itemCount <= 0) {
			// Проверка на корректность количества перед добавлением в корзину
			return;
		}

		const item = {
			SKU: product?.SKU,
			title: product?.title,
			price: product?.price,
			images: product?.images[0],
			sizes: sizeCart,
			colors: colorCart,
			count: itemCount, // Используем значение itemCount из состояния компонента
		};
		console.log(item);
		console.log(sizeCart);

		dispatch(addItem(item));
	};

	if (!product) {
		return <div className="container">Загрузка....</div>;
	}

	return (
		<div className="product-block">
			<h1 className="product-block__title">{product.title}</h1>
			<div className="product-block__product-wrapper">
				<div className="product-block__img-wrapper">
					<div className="product-block__img-main">
						<img src={mainImage ? mainImage : product.images[0]} alt="" />
					</div>
					<div className="product-block__img-carousel">{imagesCarousel}</div>
				</div>
				<div className="product-block__controls-wrapper">
					<div className="product-block__price-wrapper">
						<h2 className="product-block__price-current">${product.price}</h2>
						{product.oldPrice ? <h3 className="product-block__price-old">${product.oldPrice}</h3> : ""}
					</div>
					{optionColors?.length > 0 ? (
						<div id="ProductBlockColor" className="product-block__option-wrapper">
							<h3 className="product-block__option-title">Colour</h3>
							<ul className="product-block__option-list">{optionColors}</ul>
						</div>
					) : (
						""
					)}
					<div id="ProductBlockSize" className="product-block__option-wrapper">
						<h3 className="product-block__option-title">Size</h3>
						<ul className="product-block__option-list">{optionSizes}</ul>
					</div>
					<div className="product-block__option-wrapper">
						<h3 className="product-block__option-title">Quantity</h3>
						<div className="product-block__option-counter">
							<input
								onChange={(event) => setItemCount(event.target.value)}
								//  onChange={() => itemCount}
								type="number"
								value={itemCount}
								className="product-block__option-counter-number"
							/>

							<div onClick={() => onClickPlusButton()} className="product-block__option-counter-handler icon-shadow icon-48px">
								<svg width="42" height="42" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M3.33398 3.33398H26.0007V26.0007H3.33398V3.33398Z" fill="#FFCA29" />
									<path fillRule="evenodd" clipRule="evenodd" d="M2.66699 3.33366C2.66699 2.96547 2.96547 2.66699 3.33366 2.66699H26.0003C26.3685 2.66699 26.667 2.96547 26.667 3.33366V26.0003C26.667 26.3685 26.3685 26.667 26.0003 26.667H3.33366C2.96547 26.667 2.66699 26.3685 2.66699 26.0003V3.33366ZM4.00033 4.00033V25.3337H25.3337V4.00033H4.00033Z" fill="black" />
									<path fillRule="evenodd" clipRule="evenodd" d="M13.3333 7.99968L13.3333 21.333L16 21.333L16 7.99968L13.3333 7.99968Z" fill="black" />
									<path fillRule="evenodd" clipRule="evenodd" d="M7.99968 16.0007H21.333V13.334H7.99968V16.0007Z" fill="black" />
								</svg>
							</div>

							{itemCount > 1 && (
								<div onClick={() => onClickMinusButton()} className="product-block__option-counter-handler icon-shadow icon-48px">
									<svg width="42" height="42" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M3.33398 3.33398H26.0007V26.0007H3.33398V3.33398Z" fill="#4EFF9F" />
										<path fillRule="evenodd" clipRule="evenodd" d="M2.66699 3.33366C2.66699 2.96547 2.96547 2.66699 3.33366 2.66699H26.0003C26.3685 2.66699 26.667 2.96547 26.667 3.33366V26.0003C26.667 26.3685 26.3685 26.667 26.0003 26.667H3.33366C2.96547 26.667 2.66699 26.3685 2.66699 26.0003V3.33366ZM4.00033 4.00033V25.3337H25.3337V4.00033H4.00033Z" fill="black" />
										<path fillRule="evenodd" clipRule="evenodd" d="M21.3333 16.0007H8V13.334H21.3333V16.0007Z" fill="black" />
									</svg>
								</div>
							)}
						</div>
					</div>
					<div onClick={onClickAdd} className="product-block__add-cart-button button button_normal">
						ADD TO CART
						{addedCount > 0 && <span> ({addedCount})</span>}
					</div>
				</div>
			</div>
			<div className="product-block__info-wrapper">
				<p className="product-block__info-text">{product.description}</p>
				<div className="product-block__info-img">
					{/* Тут размещать рандомное фото из images */}
					<img src={randomInfoImage} alt="" />
				</div>
			</div>
		</div>
	);
};

export default ProductBlock;
