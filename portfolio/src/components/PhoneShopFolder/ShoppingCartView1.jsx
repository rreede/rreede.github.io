import Header from "./Header"
import Footer from "./Footer"
import { Link } from "react-router-dom"
import phones from './phones.json'

export default function ShoppingCartView1() {

    const totalPrice = '523';
    const quantity = 12;

    const localShoppingCart = localStorage.getItem('shoppingCartLocalStorage')

    console.log(localShoppingCart)


    const mapped = phones.filter((item)=> localShoppingCart.includes(item.id)).map((product)=> {

        let totalAmount =+ product.price * quantity;
       
return(

<>

<div className="shoppingCartProductContainer">
<img src={`/phone-images/${product.img}`}></img>
<div className="checkoutStep1Description">

<h1>{product.name}</h1>
<p></p>
<p>Price: {product.price}$</p>
<p>Quantity: {quantity}</p>








</div>
<input type="text" placeholder="Discount code" />
<p>Total amount: {totalAmount} </p>

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
                    <div className="checkoutStep1 checkout-active">
                     <p>1. Overview</p>   
                    </div>
                    <div className="checkoutStep2">
                     <p>2. Delivery method</p>   
                    </div>
                    <div className="checkoutStep3">
                      <p>3. Payment</p>   
                    </div>
                </div>

            <h1>Checkout</h1>

            {mapped ? mapped : 'The cart is empty'}

            <Link to='/phone-shop/shopping-cart-view-2'><button className="addToShoppingCart">To Delivery method</button></Link>
            </div>
        </main>
           

            <Footer/>
        </>
    )

}