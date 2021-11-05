import ListItem from './ListItem';

export default function Listing(props) {
    return (
        <div className="item-list">
            {props.items.map((item) => {
                return (
                    item.state === 'removed' ? null : <ListItem 
                    key={item.listing_id}
                    url={item.url}
                    MainImage={item.MainImage.url_570xN}
                    title={item.title}
                    currency_code={item.currency_code}
                    price={item.price}
                    quantity={item.quantity}/>
                )
            })}
        </div>
    )
}

Listing.defaultProps = {
    props: []
}