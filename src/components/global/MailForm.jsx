import MailFormImgYellow from '../../assets/img/mail-form/mail-form-person-img-yellow.png'

function MailForm() {
    return (
        <section className="mail-form mail-form_yellow">
        <div className="container">
          <div className="mail-form__elements-wrapper">
            <p className="mail-form__title">
              <span>Subscribe</span>
            </p>
            <p className="mail-form__description">
              <span>if you want to receive information about sales and discounts</span>
            </p>
            <div className="mail-form__controls">
              <input type="email" className="mail-form__input" maxLength="256" name="Email" data-name="Email" placeholder="E-mail" id="Email" required="" />
              <button type="submit" data-wait="Doings things..." data-event-action="Click" className="mail-form__button icon-shadow icon-48px">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 5H39V39H5V5Z" fill="#9204D2" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M4 5C4 4.44772 4.44772 4 5 4H39C39.5523 4 40 4.44772 40 5V39C40 39.5523 39.5523 40 39 40H5C4.44772 40 4 39.5523 4 39V5ZM6 6V38H38V6H6Z" fill="black" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M28.3431 22.0002L21.7574 15.4144L24.5858 12.5859L34 22.0002L24.5858 31.4144L21.7574 28.5859L28.3431 22.0002Z" fill="white" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.1719 24H31.1719V20H10.1719V24Z" fill="white" />
                </svg>
              </button>
            </div>
          </div>
          <div className="mail-form__img-wrapper">
            <img src={MailFormImgYellow} alt="WoW" className="mail-form__img" />
          </div>
        </div>
      </section>
    );
}

export default MailForm;