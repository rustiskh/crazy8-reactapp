function FilterPrice() {
    return (
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
    );
}

export default FilterPrice;