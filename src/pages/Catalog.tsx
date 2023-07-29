import React from "react";
import axios from "axios";

import CatalogProductCard from "../components/blocks/ProductCard/CatalogProductCard";
import CatalogProductCardSkeleton from "../components/blocks/ProductCard/CatalogProductCardSkeleton";
import CatalogSort, { list } from "../components/blocks/CatalogSort";
import CatalogFilters from "../components/blocks/CatalogFilters/CatalogFilters";
import Pagination from "../components/blocks/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { selectorPaginationPage, setCurrentPage, setParsePage } from "../redux/slices/paginationSlice";
import { useNavigate } from "react-router-dom";
import qs from "qs";
import { selectorSort, selectorSortSearch, setParseSort } from "../redux/slices/filterSlice";

type Product = {
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

const Catalog: React.FC = () => {
	const dispatch = useDispatch();
	// Пагинация
	const currentPage: number = useSelector(selectorPaginationPage);
	const onChangePage = (num: number) => {
		dispatch(setCurrentPage(num));
	};
	const maxProductsCardNumber = 6;

	const [products, setProducts] = React.useState<Product[]>([]);

	// Поиск
	const searchValue: string = useSelector(selectorSortSearch);

	const axiosProducts = () => {
		const search = searchValue ? `&q=${searchValue}` : "";
		setIsLoading(true);

		axios(`http://localhost:3005/products?_sort=${sortType.sortFilter.sortProperty}&_limit=${maxProductsCardNumber}&_page=${currentPage}${search}`).then((response) => {
			setProducts(response.data);
			setIsLoading(false);
		});
	};

	// Фильтрация
	const sortType = useSelector(selectorSort);

	// Флаги для смены скелетонов
	const [isLoading, setIsLoading] = React.useState(true);

	// Вшивание параметров в URL
	const navigate = useNavigate();
	// Не выводить при первом рендере
	const isMounted = React.useRef(false);
	// Парсим поиск
	const isSearch = React.useRef(false);
	// Отправляем в адресную строку
	React.useEffect(() => {
		if (isMounted.current) {
			const queryString = qs.stringify({
				sortProperty: sortType.sortFilter.sortProperty,
				currentPage,
				searchValue,
			});

			navigate(`?${queryString}`);
		}
		isMounted.current = true;
	}, [currentPage, searchValue, sortType]);

	// Парсим из адресной строки
	React.useEffect(() => {
		if (window.location.search) {
			const params = qs.parse(window.location.search.substring(1));

			const sort = list.find((obj) => obj.sortProperty === params.sortProperty);

			dispatch(setParsePage({ ...params }));
			dispatch(setParseSort({ sort }));

			isSearch.current = true;
		}
	}, []);

	React.useEffect(() => {
		//если в адреске не было параметров - делайем запрос по-умолчанию
		if (!isSearch.current) {
			axiosProducts();
		}

		isSearch.current = false;
	}, [currentPage, searchValue, sortType]);

	// Запрос для получения массива и подсчета кол-ва страниц - !!!КОСТЫЛЬ, но из-за ограничений фейк-бека!!!
	const [productsCountPagination, setProductsCountPagination] = React.useState([]);

	React.useEffect(() => {
		// Поиск
		const search = searchValue ? `&q=${searchValue}` : "";
		setIsLoading(true);
		axios(`http://localhost:3005/products?_sort=${sortType.sortFilter.sortProperty}${search}`).then((response) => {
			setProductsCountPagination(response.data.length);
			setIsLoading(false);
		});
	}, [currentPage, searchValue, sortType]);

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
						{isLoading ? [...new Array(6)].map((_, index) => <CatalogProductCardSkeleton key={index} />) : products.map((obj) => <CatalogProductCard key={obj.SKU} {...obj} />)}
					</div>
					{productsCountPagination > maxProductsCardNumber ? <Pagination currentPage={currentPage} onChangePage={onChangePage} totalProductCount={productsCountPagination} /> : ""}
				</div>
			</div>
		</section>
	);
};

export default Catalog;
