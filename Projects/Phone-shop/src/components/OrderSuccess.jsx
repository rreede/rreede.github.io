import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function OrderSuccess() {

    return(
        <>
        <Header/>
        <div className="wrapper">
        <div className="step1-input-form-container">


           <h1>Thank you!<br></br><br></br> Your order number: , is being processed and you will get a notification on your email when the order is being sent.</h1>

           <p>NB! THIS IS NOT AN ACTUAL PURCHASE THIS IS A PORTFOLIO WEBSITE.</p>

           <h2>Order summary:</h2>



            <Link to='/'><button className='nextStepBtn'>Go back to Homepage</button></Link>

        </div>

        </div>
        <Footer/>
        </>
    )

}