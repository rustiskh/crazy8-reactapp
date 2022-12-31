import React from 'react'

import CatalogProductCard from '../components/blocks/ProductCard/CatalogProductCard';
import CatalogProductCardSkeleton from '../components/blocks/ProductCard/CatalogProductCardSkeleton';
import CatalogSort from '../components/blocks/CatalogSort';
import CatalogFilters from '../components/blocks/CatalogFilters/CatalogFilters';
import Pagination from '../components/blocks/Pagination/Pagination';
import { SearchContext } from '../App';
import { useDispatch, useSelector } from 'react-redux';

// import products from '../assets/sneakers-crazy8.json';

const Catalog = () => {
    // Пагинация
    const [currentPage, setCurrentPage] = React.useState(1);

    const [products, setProducts] = React.useState([]);

    // Поиск
    const {searchValue} = React.useContext(SearchContext);

    // Фильтрация
    const sortType = useSelector(state => state.sortFilter);
    const dispatch = useDispatch();

    React.useEffect(() => {
        // Поиск
        const search = searchValue ? `&search=${searchValue}` : '';
        setIsLoading(true)
        fetch(`https://639a143016b0fdad77539925.mockapi.io/sneakers?page=${currentPage}&sortBy=${sortType.sortFilter.sortProperty}&limit=6${search}`)
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            setProducts(data);
            setIsLoading(false);
        })
    }, [currentPage, searchValue, sortType])
    
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
            <Pagination onChangePage={number => setCurrentPage(number)}/>
            </div>
        </div>
    </section>
    );
}

export default Catalog;