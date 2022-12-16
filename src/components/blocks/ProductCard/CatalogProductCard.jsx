import React from "react";

function CatalogProductCard({title, price, images}) {

    // Отображение избражений из локального хранилища с ссылками из локального json файла
    // const [img, setImg] = React.useState();

    // React.useEffect( () => {
    //     const getImgCatalog = async () => {
    //         const data = await import(`../../assets/img/products/${images[0]}`);
    //         setImg(data.default);
    //     }
        
    //     getImgCatalog();
    // }, [images]);

    const [itemCount, setItemCount] = React.useState(0);

  const onClickPlusButton = () => {
    setItemCount(itemCount + 1);
  }

  const onClickMinusButton = () => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1);
    } 
  }

    return (
            <div className="product-card">
                <div className="product-card__img-wrapper">
                  <img src={images[0]} alt={title} className="product-card__img" />
                </div>
                <div className="product-card__info-wrapper">
                  <a href={title.replaceAll(' ', '-').toLowerCase()} className="product-card__title">{title.slice(0, 30) + `...`}</a>
                  <div className="product-card__footer">
                    <div className="product-card__price-wrapper">
                      <p className="product-card__current-price">${price}</p>
                      <p className="product-card__old-price"></p>
                    </div>
                    <div className="product-card__counter-wrapper">
                      <div onClick={() => onClickMinusButton()} className="product-card__counter-minus icon-shadow icon-32px">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.33398 3.33398H26.0007V26.0007H3.33398V3.33398Z" fill="#4EFF9F" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M2.66699 3.33366C2.66699 2.96547 2.96547 2.66699 3.33366 2.66699H26.0003C26.3685 2.66699 26.667 2.96547 26.667 3.33366V26.0003C26.667 26.3685 26.3685 26.667 26.0003 26.667H3.33366C2.96547 26.667 2.66699 26.3685 2.66699 26.0003V3.33366ZM4.00033 4.00033V25.3337H25.3337V4.00033H4.00033Z" fill="black" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M21.3333 16.0007H8V13.334H21.3333V16.0007Z" fill="black" />
                        </svg>
                      </div>

                      <span className="product-card__counter-number">{itemCount}</span>

                      <div onClick={() => onClickPlusButton()} className="product-card__counter-plus icon-shadow icon-32px">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.33398 3.33398H26.0007V26.0007H3.33398V3.33398Z" fill="#FFCA29" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M2.66699 3.33366C2.66699 2.96547 2.96547 2.66699 3.33366 2.66699H26.0003C26.3685 2.66699 26.667 2.96547 26.667 3.33366V26.0003C26.667 26.3685 26.3685 26.667 26.0003 26.667H3.33366C2.96547 26.667 2.66699 26.3685 2.66699 26.0003V3.33366ZM4.00033 4.00033V25.3337H25.3337V4.00033H4.00033Z" fill="black" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M13.3333 7.99968L13.3333 21.333L16 21.333L16 7.99968L13.3333 7.99968Z" fill="black" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M7.99968 16.0007H21.333V13.334H7.99968V16.0007Z" fill="black" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    );
    
}

export default CatalogProductCard;