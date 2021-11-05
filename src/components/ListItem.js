import PropTypes from 'prop-types';

export default function ListItem(props) {
    const { id, url, MainImage, title, currency_code, price, quantity } = props;
    let priceExp;
    let quantityClassName;

    // currency setting
    if (currency_code === 'USD') {
        priceExp = `$${price}`
    } else if (currency_code === 'EUR') {
        priceExp = `€${price}`;
    } else {
        priceExp = `${price} ${currency_code}`
    }
    // quantity className setting
    if (quantity <= 10) {
        quantityClassName = 'item-quantity level-low';
    } else if (quantity > 10 && quantity <= 20) {
        quantityClassName = 'item-quantity level-medium';
    } else if (quantity > 20) {
        quantityClassName = 'item-quantity level-high';
    }

    return (
        <div className="item" key={id}>
            <div className="item-image">
                <a href={url}>
                    <img src={MainImage} alt='here should be an img' />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{title.length > 50 ? `${title.slice(0, 51)}...` : title}</p>
                <p className="item-price">{priceExp}</p>
                <p className={quantityClassName}>{`${quantity} left`}</p>
            </div>
        </div>
    )
}

ListItem.propTypes = {
    id: PropTypes.number,
    url: PropTypes.string,
    MainImage: PropTypes.string,
    title: PropTypes.string,
    currency_code: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
}