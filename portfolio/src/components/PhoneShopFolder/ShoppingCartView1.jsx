import Header from "./Header"
import Footer from "./Footer"
import { Link } from "react-router-dom"
import phones from './phones.json'

export default function ShoppingCartView1() {

    const localShoppingCart = localStorage.getItem('shoppingCartLocalStorage')

    console.log(localShoppingCart)


    const mapped = phones.filter((item)=> localShoppingCart.includes(item.id)).map((product)=> {
return(

<>

<div className="shoppingCartProductContainer">
<img src={`/phone-images/${product.img}`}></img>

{product.name}

{product.price}

</div>

</>
    
)



    });

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

            <h1>Checkout Step 1</h1>

            {mapped}

            <Link to='/'><button>Checkout</button></Link>
            </div>
        </main>
           

            <Footer/>
        </>
    )

}