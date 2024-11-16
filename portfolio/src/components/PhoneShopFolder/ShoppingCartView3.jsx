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
                    <div className="checkoutStep1">
                     <p>1. Overview</p>   
                    </div>
                    <div className="checkoutStep2">
                     <p>2. Delivery method</p>   
                    </div>
                    <div className="checkoutStep3">
                      <p>3. Payment</p>   
                    </div>
                </div>

                    <h1>Test</h1>


                    <Link to='/'><button>Payment</button></Link>
            </div>
            </main>

            <Footer/>
        </>
    )

}