import React from "react";
import { Link, useNavigate } from "react-router-dom";
import heroImg from "../assets/img/landing-page/hero-sneaker-img.png";
import axios from "axios";

type GalleryProduct = {
	title: string;
	price: number;
	images: string[];
};

const LandingPage: React.FC = () => {
	const navigate = useNavigate();

	const [galleryProducts, setGalleryProducts] = React.useState<GalleryProduct[]>([]);

	React.useEffect(() => {
		async function getGallery() {
			try {
				// Тут можно было бы сразу отправлять запрос на продукты, имеющие значение New в flags, но json-server так не умеет (??)
				const { data } = await axios.get(`http://localhost:3005/products`);

				const findFlagsNew = data.filter((obj) => obj.flags.includes("New"));
				setGalleryProducts(findFlagsNew.slice(0, 7));
				// galleryProducts.splice(6);
			} catch (error) {
				alert("Ошибка при получении кросовок!");
				navigate("/");
				// Добавить возможность при ошибке рендерить другую картегорию?
			}
		}
		getGallery();
	}, [navigate]);

	const galleryBlock = galleryProducts.map(({ title, price, images }, i) => {
		return (
			<Link key={i} to={`/product/${title.replaceAll(" ", "-").toLowerCase().replace(/"/g, "")}`} className={`gallery-card card-${++i}`}>
				<div className="gallery-card__img-wrapper">
					<img src={images[0]} alt="" className="gallery-card__img" />
				</div>
				<div className="gallery-card__info-wrapper">
					<h3 className="gallery-card__title">{title}</h3>
					<div className="gallery-card__price-wrapper">
						<p className="gallery-card__price gallery-card__price_current">${price}</p>
					</div>
				</div>
			</Link>
		);
	});

	return (
		<>
			<section className="hero">
				<div className="hero-content container">
					<div className="hero-info">
						<h2 className="hero-info__title">30% OFF</h2>
						<p className="hero-info__text">For all goods, only this week, automatic discount during payment</p>
						<Link to="/catalog" className="hero-info__button button button_normal">
							Shop now
						</Link>
					</div>
					<div className="hero-img">
						<img src={heroImg} alt="" className="hero-img__main-img" />
					</div>
				</div>
				<div className="hero-bg">{/* <img src={heroBg} alt="" /> */}</div>
			</section>
			<section className="gallery container">
				<div className="gallery-wrapper">
					<h2 className="gallery__title h1_inner-pages">New arrivals</h2>
					<div className="gallery__content">{galleryBlock}</div>
					<div className="gallery__controls">
						<Link to="/catalog" className="gallery__btn gallery__btn_main button button_normal">
							VIEW ALL
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export default LandingPage;
