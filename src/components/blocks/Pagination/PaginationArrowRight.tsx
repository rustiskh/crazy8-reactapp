import React from "react";

const PaginationArrowRight: React.FC = () => {
	return (
		<div className="pagination__item-icon">
			<div className="pagination__link">
				<i className="pagination__icon pagination__icon_right icon-shadow icon-48px">
					<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M5 5H39V39H5V5Z" fill="#9204D2" />
						<path fillRule="evenodd" clipRule="evenodd" d="M4 5C4 4.44772 4.44772 4 5 4H39C39.5523 4 40 4.44772 40 5V39C40 39.5523 39.5523 40 39 40H5C4.44772 40 4 39.5523 4 39V5ZM6 6V38H38V6H6Z" fill="black" />
						<path fillRule="evenodd" clipRule="evenodd" d="M28.3431 22.0002L21.7574 15.4144L24.5858 12.5859L34 22.0002L24.5858 31.4144L21.7574 28.5859L28.3431 22.0002Z" fill="white" />
						<path fillRule="evenodd" clipRule="evenodd" d="M10.1719 24H31.1719V20H10.1719V24Z" fill="white" />
					</svg>
				</i>
			</div>
		</div>
	);
};

export default PaginationArrowRight;
