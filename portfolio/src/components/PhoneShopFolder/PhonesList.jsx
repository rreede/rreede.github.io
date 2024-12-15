import Phones from './phones.json';
import { Link } from 'react-router-dom';
import favoriteImg from '/favorite_24dp_BB271A_FILL0_wght400_GRAD0_opsz24.svg';
import emptyFavorite from '/favorite_icon.svg';
import { useState } from 'react';

export default function PhonesList({ filtering }) {
    // Filter phones based on the filtering prop
    const filteredPhones = filtering === 'All' 
        ? Phones 
        : Phones.filter(item => item.category === filtering);

    // State for hover tracking
    const [hoveredId, setHoveredId] = useState(null);

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
                    <img 
                        className='favoriteProductBtn'
                        onMouseOver={() => setHoveredId(record.id)}
                        onMouseOut={() => setHoveredId(null)}
                        onClick={() => addToFavorites(record.id)}
                        src={hoveredId === record.id ? favoriteImg : emptyFavorite} 
                        alt="Favorite icon" 
                    />
                    {record.discount && <div className="product-discount-info">-{record.discount}%</div>}
                    <div className="productImageContainer">
                        <img className="productImage" src={`/phone-images/${record.img}`} alt={record.name} />
                    </div>
                    <p>{record.name}</p>
                    <strong>{record.price}$</strong>

                    <p className='installments-text'>{Math.round(record.price /12) }$ a month for 1 year</p>

                    <Link to={`/phone-shop/product/${record.id}`}>
                        <button className="see-more-btn">See more</button>
                    </Link>
                </div>
            ))}
        </>
    );
}
