// import Swiper core and required modules
import axios from "axios";
import React from "react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";

type ReviewSlide = {
	name: string;
	text: string;
	avatar: string;
};

const ReviewsCarousel = () => {
	const [reviewSlides, setReviewSlides] = React.useState<ReviewSlide[]>([]);

	React.useEffect(() => {
		async function getReviews() {
			const { data } = await axios.get(`http://localhost:3005/reviews`);
			setReviewSlides(data);
		}
		getReviews();
	}, []);

	console.log(reviewSlides);

	const slides = reviewSlides.map(({ name, text, avatar }, i) => {
		return (
			<SwiperSlide key={i} className="review-card">
				<div className="review-card__text-wrapper">
					<p className="review-card__text-content">{text}</p>
				</div>
				<div className="review-card__author-wrapper">
					<div className="review-card__author-avatar">
						<img src={avatar} alt="o/" />
					</div>
					<p className="review-card__author-name">{name}</p>
				</div>
			</SwiperSlide>
		);
	});

	return (
		<>
			<Swiper
				modules={[Navigation, Pagination, A11y]}
				spaceBetween={24}
				slidesPerView={3}
				centeredSlides={true}
				loop={true}
				navigation={{
					prevEl: ".review-swiper__arrow_prew",
					nextEl: ".review-swiper__arrow_next",
				}}
				slideToClickedSlide={true}
				pagination={{ clickable: true }}
				className="review-swiper"
			>
				{slides}
				<div className="review-swiper__navigate">
					<div className="review-swiper__arrow review-swiper__arrow_prew ">
						<svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M5.65685 9.41421L12.2426 2.82843L9.41421 0L0 9.41421L9.41421 18.8284L12.2426 16L5.65685 9.41421Z" fill="white" />
							<path fillRule="evenodd" clipRule="evenodd" d="M23.8281 11.4141H2.82812V7.41406H23.8281V11.4141Z" fill="white" />
						</svg>
					</div>
					<div className="review-swiper__arrow review-swiper__arrow_next ">
						<svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M18.1713 9.41421L11.5855 2.82843L14.4139 0L23.8281 9.41421L14.4139 18.8284L11.5855 16L18.1713 9.41421Z" fill="white" />
							<path fillRule="evenodd" clipRule="evenodd" d="M0 11.4141H21V7.41406H0V11.4141Z" fill="white" />
						</svg>
					</div>
				</div>
			</Swiper>
		</>
	);
};

export default ReviewsCarousel;
