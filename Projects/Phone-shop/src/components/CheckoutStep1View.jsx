import Header from "./Header";
import Footer from "./Footer";

export default function CheckoutStep1View() {

    return(
        <>
        
        <Header/>

        <div className="progress-bar-container">
            <div className="step1-progress-bar"><p>1. Test</p><div className="progress-icon-green"></div></div>
            <div className="step1-progress-bar"><p>2. Test</p><div className="progress-icon-gray"></div></div>
            <div className="step1-progress-bar"><p>3. Test</p><div className="progress-icon-gray"></div></div>
            <div className="step1-progress-bar"><p>4. Test</p><div className="progress-icon-gray"></div></div>
        </div>

        <Footer/>
        </>
    )

}