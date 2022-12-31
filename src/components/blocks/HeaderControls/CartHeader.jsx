import { Link } from "react-router-dom";


const CartHeader = () => {
    return (
        <Link to="/cart" id="cart" className="header-control">
            <span className="header-control__title">cart (0)</span>
            <div className="header-control__icon icon-shadow icon-48px">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 5H39V39H5V5Z" fill="#67E4FF" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M4 5C4 4.44772 4.44772 4 5 4H39C39.5523 4 40 4.44772 40 5V39C40 39.5523 39.5523 40 39 40H5C4.44772 40 4 39.5523 4 39V5ZM6 6V38H38V6H6Z" fill="black" />
                    <path d="M27 31L31 21H13L17 31H27Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.0459 19H33.954L28.354 33H15.6459L10.0459 19ZM15.954 23L18.354 29H25.6459L28.0459 23H15.954Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M15 24H29V22H15V24Z" fill="#67E4FF" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M17 28H27V26H17V28Z" fill="#67E4FF" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M28.2109 21.8943L24.2109 13.8943L27.7886 12.1055L31.7886 20.1055L28.2109 21.8943Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.7891 21.8943L19.7891 13.8943L16.2114 12.1055L12.2114 20.1055L15.7891 21.8943Z" fill="black" />
                </svg>
            </div>
        </Link>
    );
}

export default CartHeader;