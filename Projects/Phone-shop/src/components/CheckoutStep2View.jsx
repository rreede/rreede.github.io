import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function CheckoutStep2View() {

    return(
        <>
        
        <Header/>
        <div className="wrapper">

        <div className="progress-bar-container">
            <div className="step1-progress-bar"><p>1. Order info</p><div className="progress-icon-gray current-progress"></div></div>
            <div className="step1-progress-bar"><p>2. Delivery</p><div className="progress-icon-gray current-progress"></div></div>
            <div className="step1-progress-bar"><p>3. Payment</p><div className="progress-icon-gray"></div></div>
        </div>
        <h1>2. Delivery Info</h1>
        <div className="step1-input-form-container">

            <form className='step1-form' action="">

                <label htmlFor="firstName">First name:</label>
                <input type="text" name="firstName" id="" />

                <label htmlFor="secondName">Second name:</label>
                <input type="text" name="firstName" id="" />

                <label htmlFor="comments">Add a comment:</label>
                <input type="text" name="firstName" id="" />

            </form>
            <Link to='/checkout-view-3'><button className='nextStepBtn'>Go to Payment</button></Link>

        </div>

        </div>
        <Footer/>
        </>
    )

}