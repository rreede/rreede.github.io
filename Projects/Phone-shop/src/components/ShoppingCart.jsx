import { Link } from "react-router-dom"

export default function ShoppingCart() {

    return(
        <div className="shopping-cart-sidebar">
            <div className="close-shopping-cart-sidebar-btn">X</div>
        <h2>Shopping Cart</h2>
<p>ID</p>
<p>Product</p><p>Price</p> <p>Amount</p>

            <p>Total Price:</p>
      <Link to='/checkout-view-1'><button className='checkout-enter-btn'>Go to checkout</button></Link> 
        </div>
    )

}