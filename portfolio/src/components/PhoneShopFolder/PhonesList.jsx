import Phones from './phones.json'
import { Link } from 'react-router-dom'
import { createContext } from 'react';

export const FavoriteContext = createContext();

export default function PhonesList() {

    let favoritesArray = []

    function addToFavorites(favorite) {

       favoritesArray.push(favorite);

       localStorage.setItem("favoritesLocalStorage" , favoritesArray);

       console.log(localStorage.getItem('favoritesLocalStorage'));

    }


    return(
        <>
        
        {Phones && Phones.map(record => {
                return(
                    <div className='productContainer' key={record.id}>
                        <img onClick={()=> addToFavorites(record.id)} src='/favorite_icon.svg'></img>
                         {record.discount && <div className="product-discount-info">-{record.discount}%</div>} 

                         <div className="productImageContainer"><img className='productImage' src={`/phone-images/${record.img}`} alt="" /></div>

                       
                       <p>{record.name}</p> 
                       <strong>{record.price}$</strong> 

                      <Link to={`/phone-shop/product/${record.id}`}> <button className='see-more-btn'>See more</button></Link>
                     
                    </div>
                )
            })}

        </>
    )
}