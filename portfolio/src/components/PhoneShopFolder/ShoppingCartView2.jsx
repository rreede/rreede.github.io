import Header from "./Header"
import Footer from "./Footer"
import { Link } from "react-router-dom"

export default function ShoppingCartView2() {

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
                    <div className="checkoutStep3">
                      <p>3. Payment</p>   
                    </div>
                </div>
<h1>Choose a delivery method:</h1>

<input type="radio" id="html" name="fav_language" value="HTML"/>
<label for="html">HTML</label><br/>
<input type="radio" id="css" name="fav_language" value="CSS"/>
<label for="css">CSS</label><br/>
<input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
<label for="javascript">JavaScript</label>


<Link to='/phone-shop/shopping-cart-view-3'><button className="addToShoppingCart">To Payment</button></Link>
</div>
</main>
            <Footer/>
        </>
    )

}