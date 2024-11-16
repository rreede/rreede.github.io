import Phones from './phones.json';
import { Link } from 'react-router-dom';

export default function PhonesList({ filtering }) {
    // Filter phones based on the filtering prop
    const filteredPhones = filtering === 'All' 
        ? Phones 
        : Phones.filter(item => item.category === filtering);

    // Function to add items to favorites
    const addToFavorites = (favorite) => {
        let favoritesArray = JSON.parse(localStorage.getItem('favoritesLocalStorage')) || [];
        if (!favoritesArray.includes(favorite)) {
            favoritesArray.push(favorite);
            localStorage.setItem('favoritesLocalStorage', JSON.stringify(favoritesArray));
        }
        console.log(localStorage.getItem('favoritesLocalStorage'));
    };

    return (
        <>
            {filteredPhones.map(record => (
                <div className="productContainer" key={record.id}>
                    <img onClick={() => addToFavorites(record.id)} src="/favorite_icon.svg" alt="Favorite icon" />
                    {record.discount && <div className="product-discount-info">-{record.discount}%</div>}
                    <div className="productImageContainer">
                        <img className="productImage" src={`/phone-images/${record.img}`} alt={record.name} />
                    </div>
                    <p>{record.name}</p>
                    <strong>{record.price}$</strong>
                    <Link to={`/phone-shop/product/${record.id}`}>
                        <button className="see-more-btn">See more</button>
                    </Link>
                </div>
            ))}
        </>
    );
}
