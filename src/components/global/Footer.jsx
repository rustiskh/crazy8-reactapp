import logoSvg from '../../assets/img/icons/logo_crazy8.svg'

function Footer() {

    return (
    <footer className="footer">
        <div className="container">
          <div className="footer__block">
            <a href="#" className="footer__logo">
              <img src={logoSvg} alt="CRAZY8" className="footer__block-logo" />
            </a>
            <p className="footer__block-copywrite">©2022, all rights reserved</p>
          </div>

          <div className="footer__block">
            <div className="footer__block-header">CATALOG</div>
            <div className="footer__block-body">
              <ul className="footer__block-list">
                <li className="footer__block-list-item">
                  <a href="" className="footer__block-list-link"> men </a>
                </li>
                <li className="footer__block-list-item">
                  <a href="" className="footer__block-list-link"> women </a>
                </li>
                <li className="footer__block-list-item">
                  <a href="" className="footer__block-list-link"> all </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__block">
            <div className="footer__block-header">SERVICES</div>
            <div className="footer__block-body">
              <ul className="footer__block-list">
                <li className="footer__block-list-item">
                  <a href="" className="footer__block-list-link"> payments </a>
                </li>
                <li className="footer__block-list-item">
                  <a href="" className="footer__block-list-link"> shipping </a>
                </li>
                <li className="footer__block-list-item">
                  <a href="" className="footer__block-list-link"> returns </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__block">
            <div className="footer__block-header">CRAZY 8</div>
            <div className="footer__block-body">
              <ul className="footer__block-list">
                <li className="footer__block-list-item">
                  <a href="" className="footer__block-list-link"> contacts </a>
                </li>
                <li className="footer__block-list-item">
                  <a href="" className="footer__block-list-link"> privacy policy </a>
                </li>
                <li className="footer__block-list-item">
                  <a href="" className="footer__block-list-link"> right of withdrawal </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__block footer__block-social">
            <a href="" className="footer__block-social-item footer__block-instagram icon-48px icon-shadow">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 5H39V39H5V5Z" fill="#4EFF9F" />
                <path fillRule="evenodd" clipRule="evenodd" d="M4 5C4 4.44772 4.44772 4 5 4H39C39.5523 4 40 4.44772 40 5V39C40 39.5523 39.5523 40 39 40H5C4.44772 40 4 39.5523 4 39V5ZM6 6V38H38V6H6Z" fill="black" />
                <path d="M21.7498 18.6582C19.768 18.6582 18.1582 20.268 18.1582 22.2498C18.1582 24.2316 19.768 25.8453 21.7498 25.8453C23.7316 25.8453 25.3453 24.2316 25.3453 22.2498C25.3453 20.268 23.7316 18.6582 21.7498 18.6582Z" fill="black" />
                <path d="M27.1703 12.458H16.329C13.9203 12.458 11.958 14.4203 11.958 16.829V27.6703C11.958 30.083 13.9203 32.0413 16.329 32.0413H27.1703C29.583 32.0413 31.5413 30.083 31.5413 27.6703V16.829C31.5413 14.4203 29.583 12.458 27.1703 12.458V12.458ZM21.7497 28.5947C18.2521 28.5947 15.4047 25.7473 15.4047 22.2497C15.4047 18.7521 18.2521 15.9086 21.7497 15.9086C25.2473 15.9086 28.0947 18.7521 28.0947 22.2497C28.0947 25.7473 25.2473 28.5947 21.7497 28.5947ZM28.2278 17.0601C27.4876 17.0601 26.8844 16.4608 26.8844 15.7206C26.8844 14.9803 27.4876 14.3772 28.2278 14.3772C28.9681 14.3772 29.5713 14.9803 29.5713 15.7206C29.5713 16.4608 28.9681 17.0601 28.2278 17.0601Z" fill="black" />
              </svg>
            </a>
            <a href="" className="footer__block-social-item footer__block-fb icon-48px icon-shadow">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 5H39V39H5V5Z" fill="#4EFF9F" />
                <path fillRule="evenodd" clipRule="evenodd" d="M4 5C4 4.44772 4.44772 4 5 4H39C39.5523 4 40 4.44772 40 5V39C40 39.5523 39.5523 40 39 40H5C4.44772 40 4 39.5523 4 39V5ZM6 6V38H38V6H6Z" fill="black" />
                <path d="M10 22.2479C10.0014 28.028 14.2045 32.9495 19.9132 33.8553V25.6435H16.9323V22.2479H19.9167V19.6631C19.7832 18.4382 20.2016 17.2175 21.0583 16.332C21.915 15.4465 23.1212 14.9879 24.3498 15.0807C25.2316 15.095 26.1112 15.1735 26.9817 15.3157V18.2049H25.4966C24.9852 18.138 24.4712 18.3068 24.0992 18.664C23.7272 19.0211 23.5376 19.5278 23.5837 20.0413V22.2479H26.8396L26.319 25.6447H23.5837V33.8553C29.7574 32.8796 34.0867 27.2413 33.4352 21.0249C32.7835 14.8086 27.3791 10.1905 21.1372 10.5162C14.8953 10.842 10.001 15.9976 10 22.2479Z" fill="black" />
              </svg>
            </a>
            <a href="" className="footer__block-social-item footer__block-twitter icon-48px icon-shadow"
            ><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 5H39V39H5V5Z" fill="#4EFF9F" />
                <path fillRule="evenodd" clipRule="evenodd" d="M4 5C4 4.44772 4.44772 4 5 4H39C39.5523 4 40 4.44772 40 5V39C40 39.5523 39.5523 40 39 40H5C4.44772 40 4 39.5523 4 39V5ZM6 6V38H38V6H6Z" fill="black" />
                <path d="M30.7319 15.5099C31.7389 14.9079 32.4925 13.9598 32.8518 12.8429C31.9055 13.4044 30.87 13.7999 29.7904 14.0124C28.2936 12.4289 25.9219 12.0436 24.0007 13.0717C22.0795 14.0998 21.0844 16.2868 21.5714 18.4106C17.6951 18.216 14.0836 16.385 11.6357 13.3731C10.3582 15.5767 11.011 18.3935 13.1276 19.8104C12.3623 19.7858 11.6138 19.5786 10.9448 19.206C10.9448 19.2262 10.9448 19.2465 10.9448 19.2667C10.9452 21.562 12.563 23.5392 14.8128 23.9941C14.1029 24.1872 13.3582 24.2156 12.6356 24.0772C13.2683 26.0402 15.0774 27.385 17.1394 27.4251C15.4316 28.7654 13.3225 29.4924 11.1515 29.4888C10.7667 29.4894 10.3822 29.4673 10 29.4225C12.2046 30.8392 14.7705 31.5911 17.3911 31.5885C21.0369 31.6136 24.5406 30.1763 27.1185 27.5981C29.6965 25.0199 31.1336 21.516 31.1082 17.8702C31.1082 17.6613 31.1034 17.4535 31.0936 17.2467C32.0378 16.5644 32.8527 15.719 33.5 14.7505C32.6203 15.1404 31.6873 15.3964 30.7319 15.5099Z" fill="black" /></svg
              ></a>
          </div>
        </div>
    </footer>
    );
}

export default Footer;