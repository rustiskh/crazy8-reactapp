import React from "react";

const FilterReset: React.FC = () => {
	return (
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
	);
};

export default FilterReset;
