import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function CheckoutStep1View() {

    return(
        <>
        
        <Header/>
        <div className="wrapper">

        <div className="progress-bar-container">
            <div className="step1-progress-bar"><p>1. Order info</p><div className="progress-icon-gray current-progress"></div></div>
            <div className="step1-progress-bar"><p>2. Delivery</p><div className="progress-icon-gray"></div></div>
            <div className="step1-progress-bar"><p>3. Payment</p><div className="progress-icon-gray"></div></div>
        </div>

        <div className="step1-input-form-container">

            <h1>1. Order Info</h1>

            <form className='step1-form' action="">

                <div className="input-section-container">
                    <label htmlFor="firstName">First name:</label>
                    <input type="text" name="firstName" id="" />
                </div>
                <div className="input-section-container">
                    <label htmlFor="secondName">Second name:</label>
                    <input type="text" name="firstName" id="" />
                </div>
                <div className="input-section-container">
                    <label htmlFor="emailInput">Email input:</label>
                    <input type="text" name="firstName" id="" />
                </div>
                <div className="input-section-container">
                    <label htmlFor="phoneNumber">Phone number</label>
                    <input type="phone" name="phone" id="" />
                </div>
                <div className="input-section-container">
                    <label htmlFor="comments">Add an additional comment:</label>
                    <input type="text" name="firstName" id="" />
                </div>
            </form>
            <Link to='/checkout-view-2'><button className='nextStepBtn'>Go to Delivery</button></Link>
        </div>

        </div>
        <Footer/>
        </>
    )

}