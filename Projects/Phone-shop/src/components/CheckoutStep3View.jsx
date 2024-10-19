import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function CheckoutStep3View() {

    return(
        <>
        
        <Header/>
        <div className="wrapper">

        <div className="progress-bar-container">
            <div className="step1-progress-bar"><p>1. Order info</p><div className="progress-icon-gray current-progress"></div></div>
            <div className="step1-progress-bar"><p>2. Delivery</p><div className="progress-icon-gray"></div></div>
            <div className="step1-progress-bar"><p>3. Payment</p><div className="progress-icon-gray"></div></div>
        </div>
        <h1>3. Payment</h1>
        <div className="step1-input-form-container">


           <p>Select a payment method.</p>

           

            <form className='step1-form' action="">

            <div>
        <input type="radio" value="Male" name="gender" /> Bank transfer
        <input type="radio" value="Female" name="gender" /> Bank link
      </div>

            </form>
            <Link to='/order-success'><button className='nextStepBtn'>Complete order</button></Link>

        </div>

        </div>
        <Footer/>
        </>
    )

}