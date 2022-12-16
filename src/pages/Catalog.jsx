import React from 'react'

import CatalogProductCard from '../components/blocks/ProductCard/CatalogProductCard';
import CatalogProductCardSkeleton from '../components/blocks/ProductCard/CatalogProductCardSkeleton';
import CatalogSort from '../components/blocks/CatalogSort';
import CatalogFilters from '../components/blocks/CatalogFilters/CatalogFilters';
import CatalogPagination from '../components/blocks/CatalogPagination';

// import products from '../assets/sneakers-crazy8.json';

const Catalog = () => {

    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        fetch("https://639a143016b0fdad77539925.mockapi.io/sneakers")
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            setProducts(data);
            setIsLoading(false);
        })
    }, [])
    
    // Флаги для смены скелетонов
    const [isLoading, setIsLoading] = React.useState(true);

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
                {
                    isLoading ? [...new Array(6)].map((_ , index) => <CatalogProductCardSkeleton key={index}/>) : products.map((obj) => (
                        <CatalogProductCard key={obj.SKU} {...obj} />
                ))}
                {/* {products.map((obj) => (
                <CatalogProductCard key={obj.SKU} {...obj} />
                ))} */}
            </div>
            <CatalogPagination />
            </div>
        </div>
    </section>
    );
}

export default Catalog;