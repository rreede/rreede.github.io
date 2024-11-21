import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"

export default function PhoneShop() {

    const [shoppingCartAmount, setShoppingCartAmount] = useState(0);

    // Effect to update the shopping cart amount from localStorage
    useEffect(() => {
        // Retrieve shopping cart data from localStorage
        const cartItems = localStorage.getItem("shoppingCartLocalStorage");
        setShoppingCartAmount(cartItems.length); // Update state with cart count
    }, []); // Empty dependency array means this runs once on component mount


    return(
        <>
      
         <div className="wrapper">
       <Header/>
       <MainContent/>
        <Footer/>
        </div>
       </>
    )
}