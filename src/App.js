// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import './scss/main.scss'

import Header from './components/global/Header';
import Footer from './components/global/Footer';
import CatalogProductCard from './components/blocks/CatalogProductCard';

import products from './assets/sneakers-crazy8.json';


function App() {
  return (
    <div className="App">
      <Header />
      <section className="product-listing container">
        <ul className="breadcrump">
          <li className="breadcrump__item">
            <a href="#" className="breadcrump__link">Home</a>
          </li>
          <li className="breadcrump__item">
            <a href="#" className="breadcrump__link">Catalog</a>
          </li>
        </ul>
        <h1 className="product-listing__title h1_inner-pages">All products</h1>
        <div className="product-listing__wrapper">
          {/* <!-- фильтры --> */}
          <div className="product-listing__filters-wrapper">
            {/* <!-- фильтры --> */}
            {/* <!-- Фильтр цены; Слайдер --> */}
            <div id="filter-price" data-filter-type="slider" className="catalog-filter catalog-filter_opened">
              <div className="catalog-filter__header">
                <p className="catalog-filter__header-title">Price</p>
                <div className="catalog-filter__header-icon catalog-filter__header-icon_minus icon-shadow icon-32px">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33398 3.33398H26.0007V26.0007H3.33398V3.33398Z" fill="#4EFF9F" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.66699 3.33366C2.66699 2.96547 2.96547 2.66699 3.33366 2.66699H26.0003C26.3685 2.66699 26.667 2.96547 26.667 3.33366V26.0003C26.667 26.3685 26.3685 26.667 26.0003 26.667H3.33366C2.96547 26.667 2.66699 26.3685 2.66699 26.0003V3.33366ZM4.00033 4.00033V25.3337H25.3337V4.00033H4.00033Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M21.3333 16.0007H8V13.334H21.3333V16.0007Z" fill="black" />
                  </svg>
                </div>
                <div className="catalog-filter__header-icon catalog-filter__header-icon_plus icon-shadow icon-32px">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33398 3.33398H26.0007V26.0007H3.33398V3.33398Z" fill="#FFCA29" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.66699 3.33366C2.66699 2.96547 2.96547 2.66699 3.33366 2.66699H26.0003C26.3685 2.66699 26.667 2.96547 26.667 3.33366V26.0003C26.667 26.3685 26.3685 26.667 26.0003 26.667H3.33366C2.96547 26.667 2.66699 26.3685 2.66699 26.0003V3.33366ZM4.00033 4.00033V25.3337H25.3337V4.00033H4.00033Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.3333 7.99968L13.3333 21.333L16 21.333L16 7.99968L13.3333 7.99968Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.99968 16.0007H21.333V13.334H7.99968V16.0007Z" fill="black" />
                  </svg>
                </div>
              </div>
              <div className="catalog-filter__body">
                <div className="range-slider-wrapper">
                  <div className="count-input">
                    <div className="field">
                      <input type="number" className="input-min" value="2500" />
                    </div>
                    <div className="separator">-</div>
                    <div className="field">
                      <input type="number" className="input-max" value="7500" />
                    </div>
                  </div>
                  <div className="slider"></div>
                  <div className="range-input">
                    <input type="range" className="range-min" min="0" max="10000" value="2500" step="100" />
                    <input type="range" className="range-max" min="0" max="10000" value="7500" step="100" />
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Фильтр брендов; Чекбоксы --> */}
            <div id="filter-brand" data-filter-type="checkbox" className="catalog-filter catalog-filter_opened">
              <div className="catalog-filter__header">
                <p className="catalog-filter__header-title">Brand</p>
                <div className="catalog-filter__header-icon catalog-filter__header-icon_minus icon-shadow icon-32px">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33398 3.33398H26.0007V26.0007H3.33398V3.33398Z" fill="#4EFF9F" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.66699 3.33366C2.66699 2.96547 2.96547 2.66699 3.33366 2.66699H26.0003C26.3685 2.66699 26.667 2.96547 26.667 3.33366V26.0003C26.667 26.3685 26.3685 26.667 26.0003 26.667H3.33366C2.96547 26.667 2.66699 26.3685 2.66699 26.0003V3.33366ZM4.00033 4.00033V25.3337H25.3337V4.00033H4.00033Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M21.3333 16.0007H8V13.334H21.3333V16.0007Z" fill="black" />
                  </svg>
                </div>
                <div className="catalog-filter__header-icon catalog-filter__header-icon_plus icon-shadow icon-32px">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33398 3.33398H26.0007V26.0007H3.33398V3.33398Z" fill="#FFCA29" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.66699 3.33366C2.66699 2.96547 2.96547 2.66699 3.33366 2.66699H26.0003C26.3685 2.66699 26.667 2.96547 26.667 3.33366V26.0003C26.667 26.3685 26.3685 26.667 26.0003 26.667H3.33366C2.96547 26.667 2.66699 26.3685 2.66699 26.0003V3.33366ZM4.00033 4.00033V25.3337H25.3337V4.00033H4.00033Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.3333 7.99968L13.3333 21.333L16 21.333L16 7.99968L13.3333 7.99968Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.99968 16.0007H21.333V13.334H7.99968V16.0007Z" fill="black" />
                  </svg>
                </div>
              </div>
              <div className="catalog-filter__body">
                <ul className="checkbox-filter">
                  <li className="checkbox-filter__item">
                    <label className="custom-checkbox">
                      adidas
                      <input className="hidden-checkbox" type="checkbox" />
                      <div className="checkbox">
                        <svg className="checkmark" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M6.99957 7.7815L14.0568 0.724308L15.9424 2.60992L6.99957 11.5527L0.723432 5.27659L2.60905 3.39097L6.99957 7.7815Z" fill="black" />
                        </svg>
                      </div>
                    </label>
                  </li>
                  <li className="checkbox-filter__item">
                    <label className="custom-checkbox">
                      Nike
                      <input className="hidden-checkbox" type="checkbox" />
                      <div className="checkbox">
                        <svg className="checkmark" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M6.99957 7.7815L14.0568 0.724308L15.9424 2.60992L6.99957 11.5527L0.723432 5.27659L2.60905 3.39097L6.99957 7.7815Z" fill="black" />
                        </svg>
                      </div>
                    </label>
                  </li>
                  <li className="checkbox-filter__item">
                    <label className="custom-checkbox">
                      reebok
                      <input className="hidden-checkbox" type="checkbox" />
                      <div className="checkbox">
                        <svg className="checkmark" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M6.99957 7.7815L14.0568 0.724308L15.9424 2.60992L6.99957 11.5527L0.723432 5.27659L2.60905 3.39097L6.99957 7.7815Z" fill="black" />
                        </svg>
                      </div>
                    </label>
                  </li>
                </ul>
              </div>
            </div>

            {/* <!-- Фильтр размеров; Чекбоксы --> */}
            <div id="filter-size" data-filter-type="checkbox" className="catalog-filter catalog-filter_opened">
              <div className="catalog-filter__header">
                <p className="catalog-filter__header-title">Size</p>
                <div className="catalog-filter__header-icon catalog-filter__header-icon_minus icon-shadow icon-32px">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33398 3.33398H26.0007V26.0007H3.33398V3.33398Z" fill="#4EFF9F" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.66699 3.33366C2.66699 2.96547 2.96547 2.66699 3.33366 2.66699H26.0003C26.3685 2.66699 26.667 2.96547 26.667 3.33366V26.0003C26.667 26.3685 26.3685 26.667 26.0003 26.667H3.33366C2.96547 26.667 2.66699 26.3685 2.66699 26.0003V3.33366ZM4.00033 4.00033V25.3337H25.3337V4.00033H4.00033Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M21.3333 16.0007H8V13.334H21.3333V16.0007Z" fill="black" />
                  </svg>
                </div>
                <div className="catalog-filter__header-icon catalog-filter__header-icon_plus icon-shadow icon-32px">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33398 3.33398H26.0007V26.0007H3.33398V3.33398Z" fill="#FFCA29" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.66699 3.33366C2.66699 2.96547 2.96547 2.66699 3.33366 2.66699H26.0003C26.3685 2.66699 26.667 2.96547 26.667 3.33366V26.0003C26.667 26.3685 26.3685 26.667 26.0003 26.667H3.33366C2.96547 26.667 2.66699 26.3685 2.66699 26.0003V3.33366ZM4.00033 4.00033V25.3337H25.3337V4.00033H4.00033Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.3333 7.99968L13.3333 21.333L16 21.333L16 7.99968L13.3333 7.99968Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.99968 16.0007H21.333V13.334H7.99968V16.0007Z" fill="black" />
                  </svg>
                </div>
              </div>
              <div className="catalog-filter__body">
                <ul className="checkbox-filter">
                  <li className="checkbox-filter__item">
                    <label className="custom-checkbox">
                      39
                      <input className="hidden-checkbox" type="checkbox" />
                      <div className="checkbox">
                        <svg className="checkmark" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M6.99957 7.7815L14.0568 0.724308L15.9424 2.60992L6.99957 11.5527L0.723432 5.27659L2.60905 3.39097L6.99957 7.7815Z" fill="black" />
                        </svg>
                      </div>
                    </label>
                  </li>
                  <li className="checkbox-filter__item">
                    <label className="custom-checkbox">
                      40
                      <input className="hidden-checkbox" type="checkbox" />
                      <div className="checkbox">
                        <svg className="checkmark" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M6.99957 7.7815L14.0568 0.724308L15.9424 2.60992L6.99957 11.5527L0.723432 5.27659L2.60905 3.39097L6.99957 7.7815Z" fill="black" />
                        </svg>
                      </div>
                    </label>
                  </li>
                  <li className="checkbox-filter__item">
                    <label className="custom-checkbox">
                      41
                      <input className="hidden-checkbox" type="checkbox" />
                      <div className="checkbox">
                        <svg className="checkmark" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M6.99957 7.7815L14.0568 0.724308L15.9424 2.60992L6.99957 11.5527L0.723432 5.27659L2.60905 3.39097L6.99957 7.7815Z" fill="black" />
                        </svg>
                      </div>
                    </label>
                  </li>
                  <li className="checkbox-filter__item">
                    <label className="custom-checkbox">
                      41
                      <input className="hidden-checkbox" type="checkbox" />
                      <div className="checkbox">
                        <svg className="checkmark" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M6.99957 7.7815L14.0568 0.724308L15.9424 2.60992L6.99957 11.5527L0.723432 5.27659L2.60905 3.39097L6.99957 7.7815Z" fill="black" />
                        </svg>
                      </div>
                    </label>
                  </li>
                  <li className="checkbox-filter__item">
                    <label className="custom-checkbox">
                      41
                      <input className="hidden-checkbox" type="checkbox" />
                      <div className="checkbox">
                        <svg className="checkmark" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M6.99957 7.7815L14.0568 0.724308L15.9424 2.60992L6.99957 11.5527L0.723432 5.27659L2.60905 3.39097L6.99957 7.7815Z" fill="black" />
                        </svg>
                      </div>
                    </label>
                  </li>
                  <li className="checkbox-filter__item">
                    <label className="custom-checkbox">
                      41
                      <input className="hidden-checkbox" type="checkbox" />
                      <div className="checkbox">
                        <svg className="checkmark" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M6.99957 7.7815L14.0568 0.724308L15.9424 2.60992L6.99957 11.5527L0.723432 5.27659L2.60905 3.39097L6.99957 7.7815Z" fill="black" />
                        </svg>
                      </div>
                    </label>
                  </li>
                  <li className="checkbox-filter__item">
                    <label className="custom-checkbox">
                      41
                      <input className="hidden-checkbox" type="checkbox" />
                      <div className="checkbox">
                        <svg className="checkmark" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M6.99957 7.7815L14.0568 0.724308L15.9424 2.60992L6.99957 11.5527L0.723432 5.27659L2.60905 3.39097L6.99957 7.7815Z" fill="black" />
                        </svg>
                      </div>
                    </label>
                  </li>
                  <li className="checkbox-filter__item">
                    <label className="custom-checkbox">
                      41
                      <input className="hidden-checkbox" type="checkbox" />
                      <div className="checkbox">
                        <svg className="checkmark" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M6.99957 7.7815L14.0568 0.724308L15.9424 2.60992L6.99957 11.5527L0.723432 5.27659L2.60905 3.39097L6.99957 7.7815Z" fill="black" />
                        </svg>
                      </div>
                    </label>
                  </li>
                  <li className="checkbox-filter__item">
                    <label className="custom-checkbox">
                      41
                      <input className="hidden-checkbox" type="checkbox" />
                      <div className="checkbox">
                        <svg className="checkmark" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M6.99957 7.7815L14.0568 0.724308L15.9424 2.60992L6.99957 11.5527L0.723432 5.27659L2.60905 3.39097L6.99957 7.7815Z" fill="black" />
                        </svg>
                      </div>
                    </label>
                  </li>
                  <li className="checkbox-filter__item">
                    <label className="custom-checkbox">
                      41
                      <input className="hidden-checkbox" type="checkbox" />
                      <div className="checkbox">
                        <svg className="checkmark" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M6.99957 7.7815L14.0568 0.724308L15.9424 2.60992L6.99957 11.5527L0.723432 5.27659L2.60905 3.39097L6.99957 7.7815Z" fill="black" />
                        </svg>
                      </div>
                    </label>
                  </li>
                  <li className="checkbox-filter__item">
                    <label className="custom-checkbox">
                      41
                      <input className="hidden-checkbox" type="checkbox" />
                      <div className="checkbox">
                        <svg className="checkmark" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M6.99957 7.7815L14.0568 0.724308L15.9424 2.60992L6.99957 11.5527L0.723432 5.27659L2.60905 3.39097L6.99957 7.7815Z" fill="black" />
                        </svg>
                      </div>
                    </label>
                  </li>
                  <li className="checkbox-filter__item">
                    <label className="custom-checkbox">
                      41
                      <input className="hidden-checkbox" type="checkbox" />
                      <div className="checkbox">
                        <svg className="checkmark" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M6.99957 7.7815L14.0568 0.724308L15.9424 2.60992L6.99957 11.5527L0.723432 5.27659L2.60905 3.39097L6.99957 7.7815Z" fill="black" />
                        </svg>
                      </div>
                    </label>
                  </li>
                  <li className="checkbox-filter__item">
                    <label className="custom-checkbox">
                      41
                      <input className="hidden-checkbox" type="checkbox" />
                      <div className="checkbox">
                        <svg className="checkmark" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M6.99957 7.7815L14.0568 0.724308L15.9424 2.60992L6.99957 11.5527L0.723432 5.27659L2.60905 3.39097L6.99957 7.7815Z" fill="black" />
                        </svg>
                      </div>
                    </label>
                  </li>
                </ul>
              </div>
            </div>

            <div id="filter-reset" data-filter-type="filter-reset" className="catalog-filter-reset">
              <div className="catalog-filter-reset__header">
                <p className="catalog-filter-reset__header-title">RESET FILTERS</p>
                <div className="catalog-filter-reset__header-icon icon-shadow icon-32px">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33398 3.33398H26.0007V26.0007H3.33398V3.33398Z" fill="#FFCA29" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.66699 3.33366C2.66699 2.96547 2.96547 2.66699 3.33366 2.66699H26.0003C26.3685 2.66699 26.667 2.96547 26.667 3.33366V26.0003C26.667 26.3685 26.3685 26.667 26.0003 26.667H3.33366C2.96547 26.667 2.66699 26.3685 2.66699 26.0003V3.33366ZM4.00033 4.00033V25.3337H25.3337V4.00033H4.00033Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 7.99968L10 21.333L12 21.333L12 7.99968L10 7.99968Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.334 7.99968L17.334 21.333L19.334 21.333L19.334 7.99968L17.334 7.99968Z" fill="black" />
                    <path d="M16 8H20.6667V12.6667H16V8Z" fill="black" />
                    <path d="M8.66699 14H13.3337V18.6667H8.66699V14Z" fill="black" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="product-listing__products-wrapper">
            {/* <!-- сортировки --> */}
            <div className="product-listing__sort-wrapper">
              <div className="sort">
                <div className="sort__label">
                  <p>Sort by:</p>
                  <span>Popular</span>
                  <div className="sort__icon icon-shadow icon-32px">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.33301 3.33301H25.9997V25.9997H3.33301V3.33301Z" fill="#4EFF9F" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M2.66602 3.33268C2.66602 2.96449 2.96449 2.66602 3.33268 2.66602H25.9993C26.3675 2.66602 26.666 2.96449 26.666 3.33268V25.9993C26.666 26.3675 26.3675 26.666 25.9993 26.666H3.33268C2.96449 26.666 2.66602 26.3675 2.66602 25.9993V3.33268ZM3.99935 3.99935V25.3327H25.3327V3.99935H3.99935Z" fill="black" />
                      <path d="M10.3327 21.3333V16H7.66602V21.3333H10.3327Z" fill="black" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M6.99902 15.333H10.999V21.9997H6.99902V15.333ZM8.33236 16.6663V20.6663H9.66569V16.6663H8.33236Z" fill="black" />
                      <path d="M15.6657 21.333V13.333H12.999V21.333H15.6657Z" fill="black" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M12.332 12.666H16.332V21.9993H12.332V12.666ZM13.6654 13.9993V20.666H14.9987V13.9993H13.6654Z" fill="black" />
                      <path d="M21.332 21.3333V8H18.332V21.3333H21.332Z" fill="black" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.666 7.33301H21.9993V21.9997H17.666V7.33301ZM18.9993 8.66634V20.6663H20.666V8.66634H18.9993Z" fill="black" />
                    </svg>
                  </div>
                </div>
                <div className="sort__popup">
                  <ul>
                    <li className="active">Price: Low to high</li>
                    <li>Price: High to low</li>
                    <li>Popular</li>
                    <li>Newest</li>
                  </ul>
                </div>
              </div>
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
            <div id="listing-pagination" className="product-listing__pagination pagination">
              <ul className="pagination__list">
                <li className="pagination__item-icon">
                  <a href="" className="pagination__link" rel="next">
                    <i className="pagination__icon pagination__icon_left icon-shadow icon-48px">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 5H39V39H5V5Z" fill="#9204D2" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M4 5C4 4.44772 4.44772 4 5 4H39C39.5523 4 40 4.44772 40 5V39C40 39.5523 39.5523 40 39 40H5C4.44772 40 4 39.5523 4 39V5ZM6 6V38H38V6H6Z" fill="black" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M15.8287 22.0002L22.4145 15.4144L19.5861 12.5859L10.1719 22.0002L19.5861 31.4144L22.4145 28.5859L15.8287 22.0002Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M34 24H13V20H34V24Z" fill="white" />
                      </svg>
                    </i>
                  </a>
                </li>
                <li className="pagination__item">
                  <span className="pagination__link pagination__current">1</span>
                </li>
                <li className="pagination__item">
                  <a href="" className="pagination__link">2</a>
                </li>
                <li className="pagination__item">
                  <a href="" className="pagination__link">3</a>
                </li>
                <li className="pagination__item">
                  <a href="" className="pagination__link">4</a>
                </li>
                <li className="pagination__item">
                  <a href="" className="pagination__link">...</a>
                </li>
                <li className="pagination__item">
                  <a href="" className="pagination__link">12</a>
                </li>
                <li className="pagination__item">
                  <a href="" className="pagination__link">13</a>
                </li>
                <li className="pagination__item-icon">
                  <a href="" className="pagination__link" rel="next">
                    <i className="pagination__icon pagination__icon_right icon-shadow icon-48px">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 5H39V39H5V5Z" fill="#9204D2" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M4 5C4 4.44772 4.44772 4 5 4H39C39.5523 4 40 4.44772 40 5V39C40 39.5523 39.5523 40 39 40H5C4.44772 40 4 39.5523 4 39V5ZM6 6V38H38V6H6Z" fill="black" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M28.3431 22.0002L21.7574 15.4144L24.5858 12.5859L34 22.0002L24.5858 31.4144L21.7574 28.5859L28.3431 22.0002Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.1719 24H31.1719V20H10.1719V24Z" fill="white" />
                      </svg>
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="mail-form mail-form_yellow">
        <div className="container">
          <div className="mail-form__elements-wrapper">
            <p className="mail-form__title">
              <span>Subscribe</span>
            </p>
            <p className="mail-form__description">
              <span>if you want to receive information about sales and discounts</span>
            </p>
            <div className="mail-form__controls">
              <input type="email" className="mail-form__input" maxLength="256" name="Email" data-name="Email" placeholder="E-mail" id="Email" required="" />
              <button type="submit" data-wait="Doings things..." data-event-action="Click" className="mail-form__button icon-shadow icon-48px">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 5H39V39H5V5Z" fill="#9204D2" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M4 5C4 4.44772 4.44772 4 5 4H39C39.5523 4 40 4.44772 40 5V39C40 39.5523 39.5523 40 39 40H5C4.44772 40 4 39.5523 4 39V5ZM6 6V38H38V6H6Z" fill="black" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M28.3431 22.0002L21.7574 15.4144L24.5858 12.5859L34 22.0002L24.5858 31.4144L21.7574 28.5859L28.3431 22.0002Z" fill="white" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.1719 24H31.1719V20H10.1719V24Z" fill="white" />
                </svg>
              </button>
            </div>
          </div>
          <div className="mail-form__img-wrapper">
            <img src="src/assets/img/mail-form/mail-form-person-img-yellow.png" alt="WoW" className="mail-form__img" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
