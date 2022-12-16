import { Link } from 'react-router-dom';

function CatalogPagination() {
    return (
        <div id="listing-pagination" className="product-listing__pagination pagination">
            <ul className="pagination__list">
            <li className="pagination__item-icon">
                <Link to='/' className="pagination__link" rel="next">
                <i className="pagination__icon pagination__icon_left icon-shadow icon-48px">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 5H39V39H5V5Z" fill="#9204D2" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M4 5C4 4.44772 4.44772 4 5 4H39C39.5523 4 40 4.44772 40 5V39C40 39.5523 39.5523 40 39 40H5C4.44772 40 4 39.5523 4 39V5ZM6 6V38H38V6H6Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.8287 22.0002L22.4145 15.4144L19.5861 12.5859L10.1719 22.0002L19.5861 31.4144L22.4145 28.5859L15.8287 22.0002Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M34 24H13V20H34V24Z" fill="white" />
                    </svg>
                </i>
                </Link>
            </li>
            <li className="pagination__item">
                <span className="pagination__link pagination__current">1</span>
            </li>
            <li className="pagination__item">
                <Link to='/' className="pagination__link">2</Link>
            </li>
            <li className="pagination__item">
                <Link to='/' className="pagination__link">3</Link>
            </li>
            <li className="pagination__item">
                <Link to='/' className="pagination__link">4</Link>
            </li>
            <li className="pagination__item">
                <Link to='/' className="pagination__link">...</Link>
            </li>
            <li className="pagination__item">
                <Link to='/' className="pagination__link">12</Link>
            </li>
            <li className="pagination__item">
                <Link to='/' className="pagination__link">13</Link>
            </li>
            <li className="pagination__item-icon">
                <Link to='/' className="pagination__link" rel="next">
                <i className="pagination__icon pagination__icon_right icon-shadow icon-48px">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 5H39V39H5V5Z" fill="#9204D2" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M4 5C4 4.44772 4.44772 4 5 4H39C39.5523 4 40 4.44772 40 5V39C40 39.5523 39.5523 40 39 40H5C4.44772 40 4 39.5523 4 39V5ZM6 6V38H38V6H6Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M28.3431 22.0002L21.7574 15.4144L24.5858 12.5859L34 22.0002L24.5858 31.4144L21.7574 28.5859L28.3431 22.0002Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.1719 24H31.1719V20H10.1719V24Z" fill="white" />
                    </svg>
                </i>
                </Link>
            </li>
            </ul>
        </div>
    );
}

export default CatalogPagination;