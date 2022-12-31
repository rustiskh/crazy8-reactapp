import logoSvg from '../../assets/img/icons/logo_crazy8.svg'
import { Link } from 'react-router-dom';
import SearchHeader from '../blocks/HeaderControls/SearchHeader';
import CartHeader from '../blocks/HeaderControls/CartHeader';

function Header () {
    return (
        <header className="header">
        <div className="container">
          <nav>
            <ul className="header__nav">
              <li className="header__nav-item">
                <Link to="/" className="header__nav-link">women</Link>
              </li>
              <li className="header__nav-item">
                <Link to="/" className="header__nav-link">men</Link>
              </li>
              <li className="header__nav-item">
                <Link to="/" className="header__nav-link">all</Link>
              </li>
            </ul>
          </nav>
          <Link to="/" className="header__logo">
            <img src={logoSvg} alt="CRAZY8" className="geader__logo-img" />
          </Link>
          <div className="header__elements-wrapper">
            <SearchHeader/>
            <CartHeader/>
          </div>
        </div>
      </header>
    );
}

export default Header;