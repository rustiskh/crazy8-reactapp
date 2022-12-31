import React from 'react';
import { SearchContext } from '../../../App';


const SearchHeader = () => {
    // контекст для поиска
    const {searchValue, setSearchValue} = React.useContext(SearchContext);

    function showSearchField() {
        const searchField = document.querySelector('#search-header');
        searchField.classList.toggle('active');
    }

    return (
        <div id="search-header" className="header-control">
            <div className="header-control__search-wrapper">
                <span className="header-control__title">search</span>
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="header-control__search-input" type="text" placeholder="Write here"/>
            </div>
            <div onClick={showSearchField} id="search-btn" className="header-control__icon icon-shadow icon-48px">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 5H39V39H5V5Z" fill="#67E4FF" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M4 5C4 4.44772 4.44772 4 5 4H39C39.5523 4 40 4.44772 40 5V39C40 39.5523 39.5523 40 39 40H5C4.44772 40 4 39.5523 4 39V5ZM6 6V38H38V6H6Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M25.9279 20.0192C25.9279 23.2825 23.2825 25.9279 20.0192 25.9279C16.7559 25.9279 14.1104 23.2825 14.1104 20.0192C14.1104 16.7559 16.7559 14.1104 20.0192 14.1104C23.2825 14.1104 25.9279 16.7559 25.9279 20.0192ZM25.7028 28.2714C24.0879 29.3858 22.1297 30.0383 20.0192 30.0383C14.4857 30.0383 10 25.5526 10 20.0192C10 14.4857 14.4857 10 20.0192 10C25.5526 10 30.0383 14.4857 30.0383 20.0192C30.0383 21.9548 29.4894 23.7623 28.5388 25.2943L35.0004 31.756L32.0939 34.6625L25.7028 28.2714Z" fill="black" />
                </svg>
            </div>
        </div> 
    );
}

export default SearchHeader;