import Header from "./Header"
import Footer from "./Footer"
import { Link } from "react-router-dom"

export default function ShoppingCartView1() {

    return(
        <>
        <Header/>
        <main>

            <div className="wrapper">

            <h1>Test</h1>


            <Link to='/'><button>Checkout</button></Link>
            </div>
        </main>
           

            <Footer/>
        </>
    )

}