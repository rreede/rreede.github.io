import Header from "./Header"
import Footer from "./Footer"
import { Link } from "react-router-dom"

export default function ShoppingCartView3() {

    return(
        <>
        <Header/>
        <main>

            <div className="wrapper">
            <div className="checkoutProgress">
                    <div className="checkoutStep1 checkout-active">
                     <p>1. Overview</p>   
                    </div>
                    <div className="checkoutStep2 checkout-active">
                     <p>2. Delivery method</p>   
                    </div>
                    <div className="checkoutStep3 checkout-active">
                      <p>3. Payment</p>   
                    </div>
                </div>

                    <h1>Test</h1>


                    <Link to='/phone-shop/final-view'><button className="addToShoppingCart">Payment</button></Link>
            </div>
            </main>

            <Footer/>
        </>
    )

}