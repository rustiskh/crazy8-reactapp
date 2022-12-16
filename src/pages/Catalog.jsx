import React from 'react'

import CatalogProductCard from '../components/blocks/CatalogProductCard';
import CatalogSort from '../components/blocks/CatalogSort';
import CatalogFilters from '../components/blocks/CatalogFilters/CatalogFilters';
import CatalogPagination from '../components/blocks/CatalogPagination';

import products from '../assets/sneakers-crazy8.json';

const Catalog = () => {
    return (
    <section className="product-listing container">
        <h1 className="product-listing__title h1_inner-pages">All products</h1>
        <div className="product-listing__wrapper">
            {/* <!-- фильтры --> */}
            <CatalogFilters />
            <div className="product-listing__products-wrapper">
            {/* <!-- сортировки --> */}
            <div className="product-listing__sort-wrapper">
                <CatalogSort />
            </div>
            {/* <!-- карточки товаров --> */}
            <div className="product-listing__products-card-wrapper">
                {/* <CatalogProductCard /> */}
                {products.map((obj) => (
                <CatalogProductCard key={obj.SKU} {...obj} />
                ))}
                {/* <div className="product-card product-card_sale">
                <div className="product-card__img-wrapper">
                    <img src="img/products/adidas-by-Sean-Wotherspoon-Hot-Wheels-Superturf-Adventure-GX9682/adidas-by-Sean-Wotherspoon-Hot-Wheels-Superturf-Adventure-GX9682.jpg" alt="" className="product-card__img" />
                </div>
                <div className="product-card__info-wrapper">
                    <a href="#" className="product-card__title">Nike Air Max 1 SP Concepts Mellow</a>
                    <div className="product-card__footer">
                    <div className="product-card__price-wrapper">
                        <p className="product-card__current-price">$673</p>
                        <p className="product-card__old-price">1346</p>
                    </div>
                    <div className="product-card__counter-wrapper">
                        <div className="product-card__counter-minus icon-shadow icon-32px">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.33398 3.33398H26.0007V26.0007H3.33398V3.33398Z" fill="#4EFF9F" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.66699 3.33366C2.66699 2.96547 2.96547 2.66699 3.33366 2.66699H26.0003C26.3685 2.66699 26.667 2.96547 26.667 3.33366V26.0003C26.667 26.3685 26.3685 26.667 26.0003 26.667H3.33366C2.96547 26.667 2.66699 26.3685 2.66699 26.0003V3.33366ZM4.00033 4.00033V25.3337H25.3337V4.00033H4.00033Z" fill="black" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M21.3333 16.0007H8V13.334H21.3333V16.0007Z" fill="black" />
                        </svg>
                        </div>

                        <span className="product-card__counter-number">0 </span>

                        <div className="product-card__counter-plus icon-shadow icon-32px">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.33398 3.33398H26.0007V26.0007H3.33398V3.33398Z" fill="#FFCA29" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.66699 3.33366C2.66699 2.96547 2.96547 2.66699 3.33366 2.66699H26.0003C26.3685 2.66699 26.667 2.96547 26.667 3.33366V26.0003C26.667 26.3685 26.3685 26.667 26.0003 26.667H3.33366C2.96547 26.667 2.66699 26.3685 2.66699 26.0003V3.33366ZM4.00033 4.00033V25.3337H25.3337V4.00033H4.00033Z" fill="black" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.3333 7.99968L13.3333 21.333L16 21.333L16 7.99968L13.3333 7.99968Z" fill="black" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.99968 16.0007H21.333V13.334H7.99968V16.0007Z" fill="black" />
                        </svg>
                        </div>
                    </div>
                    </div>
                </div>
                </div> */}
            </div>
            <CatalogPagination />
            </div>
        </div>
    </section>
    );
}

export default Catalog;