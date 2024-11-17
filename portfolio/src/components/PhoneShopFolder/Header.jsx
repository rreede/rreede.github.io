import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
    // State for the shopping cart amount
    const [shoppingCartAmount, setShoppingCartAmount] = useState(0);

    // Effect to update the shopping cart amount from localStorage
    useEffect(() => {
        // Retrieve shopping cart data from localStorage
        const cartItems = localStorage.getItem("shoppingCartLocalStorage");
        setShoppingCartAmount(cartItems.length); // Update state with cart count
    }, []); // Empty dependency array means this runs once on component mount

    return (
        <>
            <div className="wrapper">
                <header>
                    <h1>📱 Tech Shop</h1>
                    <Link to="/phone-shop">Home</Link>
                    <Link to="/" className="back-to-portfolio-link">Back to portfolio</Link>

                    <ul className="icons">
                        <Link to="/phone-shop/favorites-view/">
                            <li>
                                <img src="/favorite_icon.svg" alt="Favorites" />
                            </li>
                        </Link>
                        <Link to="/phone-shop/shopping-cart-view-1">
                            <li>
                                <span className="material-symbols-outlined">shopping_cart</span>
                                <span className="cart-amount">{shoppingCartAmount}</span>
                            </li>
                        </Link>
                    </ul>
                </header>
            </div>
        </>
    );
}
