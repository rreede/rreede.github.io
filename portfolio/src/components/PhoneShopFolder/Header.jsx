import { Link } from "react-router-dom"

export default function Header() {
    return(
        <>
        <header>
                <h1>Phone shop</h1>
                <ul className='icons'>
               
                    <Link to='test'><li><img src='/favorite_icon.svg'></img></li></Link>
                    <Link to='/phone-shop/shopping-cart-view-1'><li><span className="material-symbols-outlined">shopping_cart</span></li></Link>
                </ul>
                
       </header>
        </>
    )
}