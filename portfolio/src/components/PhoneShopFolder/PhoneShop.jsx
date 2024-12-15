import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function PhoneShop() {
    const [shoppingCartAmount, setShoppingCartAmount] = useState(0);

    // Effect to update the shopping cart amount from localStorage
    useEffect(() => {
        // Retrieve shopping cart data from localStorage
        const cartItems = localStorage.getItem("shoppingCartLocalStorage");

        // Check if cartItems is not null before accessing length
        if (cartItems) {
            setShoppingCartAmount(JSON.parse(cartItems).length); // Parse and update state
        } else {
            setShoppingCartAmount(0); // Default to 0 if no items in localStorage
        }
    }, []); // Empty dependency array means this runs once on component mount

    return (
        <>
            <div className="wrapper">
                <Header />
                <MainContent />
                <Footer />
            </div>
        </>
    );
}
