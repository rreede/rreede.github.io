import Phones from './phones.json'
import { Link } from 'react-router-dom'

export default function PhonesList() {
    return(
        <>
        {Phones && Phones.map(record => {
                return(
                    <div className='productContainer' key={record.id}>
                        <img className='' src={`/phone-images/${record.img}`} alt="" />
                       <p>{record.name}</p> 
                       <p>{record.price}$</p> 

                      <Link to={`/phone-shop/product/${record.id}`}> <button className='see-more-btn'>See more</button></Link>
                    </div>
                )
            })}

        </>
    )
}