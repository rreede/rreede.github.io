import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
    // State for the shopping cart amount
    

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
                                <span className="cart-amount">0</span>
                            </li>
                        </Link>
                    </ul>
                </header>
            </div>
        </>
    );
}
