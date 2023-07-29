import React from "react";

const PaginationArrowLeft: React.FC = () => {
	return (
		<div className="pagination__item-icon">
			<div className="pagination__link">
				<i className="pagination__icon pagination__icon_left icon-shadow icon-48px">
					<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M5 5H39V39H5V5Z" fill="#9204D2" />
						<path fillRule="evenodd" clipRule="evenodd" d="M4 5C4 4.44772 4.44772 4 5 4H39C39.5523 4 40 4.44772 40 5V39C40 39.5523 39.5523 40 39 40H5C4.44772 40 4 39.5523 4 39V5ZM6 6V38H38V6H6Z" fill="black" />
						<path fillRule="evenodd" clipRule="evenodd" d="M15.8287 22.0002L22.4145 15.4144L19.5861 12.5859L10.1719 22.0002L19.5861 31.4144L22.4145 28.5859L15.8287 22.0002Z" fill="white" />
						<path fillRule="evenodd" clipRule="evenodd" d="M34 24H13V20H34V24Z" fill="white" />
					</svg>
				</i>
			</div>
		</div>
	);
};

export default PaginationArrowLeft;
