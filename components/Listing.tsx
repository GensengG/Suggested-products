import { ObjectData } from "../src/index"

const Listing = (items:any) => {

    let {data} = items;  
    let imgArr:ObjectData[] = data.map((obj):object => (
        {
            id: obj["listing_id"],
            url: obj.url,
            mainImage: obj.MainImage,
            title: obj.title,
            currencyCode: obj["currency_code"],
            price: obj.price,
            quantity: obj.quantity
        }
    )); 

    return (
        <div className="item-list">
            {console.log(imgArr)}
            {imgArr.map((item:Object) => (
                <div className="item" key={item.id}>
                    {/* {console.log(item)} */}
                    <div className="item-image">
                        <a href={item.url}>
                            <img src={item.mainImage["url_570xN"]}/>
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">{item.title}</p>
                        <p className="item-price">{item.price} {item.currencyCode}</p>
                        <p className="item-quantity level-medium">{item.quantity} left</p>
                    </div>
                </div>
            ))}
        </div>
    );

}

export default Listing;