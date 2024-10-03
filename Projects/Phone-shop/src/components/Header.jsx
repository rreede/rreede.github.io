import {Link} from 'react-router-dom'
import FavouritesView from './FavouritesView'
export default function Header() {

    return(
        <header>
            <div className="wrapper">
            <div className="navbar">
                <h1>Phone Shop</h1> 
                <nav>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Phones</a></li>
                            <li><a href="">Tablets</a></li>
                        </ul>

                        <ul>
                        
                       <li><Link to='FavouritesView'><img className='shopping-cart' src="favorite_24dp_434343_FILL0_wght400_GRAD0_opsz24.png" alt="Favourites" /></Link></li> 
                        <li><Link to=''><img className='shopping-cart' src="shopping_cart_24dp_434343_FILL0_wght400_GRAD0_opsz24.png" alt="Shopping cart" /></Link></li>
                        </ul>
                    </nav>
            </div>
           </div>
        </header>
    )

}