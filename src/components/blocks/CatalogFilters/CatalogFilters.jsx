import React from 'react'
import FilterBrand from "./FilterBrand";
import FilterPrice from "./FilterPrice";
import FilterReset from "./FilterReset";
import FilterSize from "./FilterSize";


function CatalogFilters() {

    return (
        <div className="product-listing__filters-wrapper">
            {/* <!-- Фильтр цены; Слайдер --> */}
            <FilterPrice/>
            {/* <!-- Фильтр брендов; Чекбоксы --> */}
            <FilterBrand/>
            {/* <!-- Фильтр размеров; Чекбоксы --> */}
            <FilterSize/>

            <FilterReset/>
        </div> 
    );
}

export default CatalogFilters;