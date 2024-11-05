import Phones from './phones.json'
import { Link } from 'react-router-dom'

export default function PhonesList() {

    function addToFavorites(favorite) {
        alert(favorite);
    }


    return(
        <>
        
        {Phones && Phones.map(record => {
                return(
                    <div className='productContainer' key={record.id}>
                        <img  onClick={()=> addToFavorites(record.id)} src='/favorite_icon.svg'></img>
                         {record.discount && <div className="product-discount-info">-{record.discount}%</div>} 
                        <img className='' src={`/phone-images/${record.img}`} alt="" />
                       <p>{record.name}</p> 
                       <strong>{record.price}$</strong> 

                      <Link to={`/phone-shop/product/${record.id}`}> <button className='see-more-btn'>See more</button></Link>
                     
                    </div>
                )
            })}

        </>
    )
}