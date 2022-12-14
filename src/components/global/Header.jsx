import logoSvg from '../../assets/img/icons/logo_crazy8.svg'

function Header () {
    return (
        <header className="header">
        <div className="container">
          <nav>
            <ul className="header__nav">
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">women</a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">men</a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">all</a>
              </li>
            </ul>
          </nav>
          <a href="#" className="header__logo">
            <img src={logoSvg} alt="CRAZY8" className="geader__logo-img" />
          </a>
          <div className="header__elements-wrapper">
            <div id="search" className="header-control">
              <span className="header-control__title">search</span>
              <div className="header-control__icon icon-shadow icon-48px">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 5H39V39H5V5Z" fill="#67E4FF" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M4 5C4 4.44772 4.44772 4 5 4H39C39.5523 4 40 4.44772 40 5V39C40 39.5523 39.5523 40 39 40H5C4.44772 40 4 39.5523 4 39V5ZM6 6V38H38V6H6Z" fill="black" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M25.9279 20.0192C25.9279 23.2825 23.2825 25.9279 20.0192 25.9279C16.7559 25.9279 14.1104 23.2825 14.1104 20.0192C14.1104 16.7559 16.7559 14.1104 20.0192 14.1104C23.2825 14.1104 25.9279 16.7559 25.9279 20.0192ZM25.7028 28.2714C24.0879 29.3858 22.1297 30.0383 20.0192 30.0383C14.4857 30.0383 10 25.5526 10 20.0192C10 14.4857 14.4857 10 20.0192 10C25.5526 10 30.0383 14.4857 30.0383 20.0192C30.0383 21.9548 29.4894 23.7623 28.5388 25.2943L35.0004 31.756L32.0939 34.6625L25.7028 28.2714Z" fill="black" />
                </svg>
              </div>
            </div>
            <div id="cart" className="header-control">
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
            </div>
          </div>
        </div>
      </header>
    );
}

export default Header;