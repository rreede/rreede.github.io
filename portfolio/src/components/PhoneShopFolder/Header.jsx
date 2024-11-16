import { Link } from "react-router-dom"

export default function Header() {
    return(
        <>
         <div className="wrapper">
        <header>
           
                <h1>📱 Tech shop</h1>
<Link to='/phone-shop'>Home</Link>
               
                <ul className='icons'>
               
                    <Link to='/phone-shop/favorites-view/'><li><img src='/favorite_icon.svg'></img></li></Link>
                    <Link to='/phone-shop/shopping-cart-view-1'><li><span className="material-symbols-outlined">shopping_cart</span></li></Link>
                </ul>
                
       </header>
       </div> 
        </>
    )
}