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
                        
                        <a href=""><img className='shopping-cart' src="favorite_24dp_434343_FILL0_wght400_GRAD0_opsz24.png" alt="" /></a> 
                           <a href=""><img className='shopping-cart' src="shopping_cart_24dp_434343_FILL0_wght400_GRAD0_opsz24.png" alt="" /></a> 
                        </ul>
                    </nav>
            </div>
           </div>
        </header>
    )

}