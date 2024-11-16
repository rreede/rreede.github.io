import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"
import { Link } from "react-router-dom"

export default function PhoneShop() {
    return(
        <>
       <Link to='/' className="back-to-portfolio-link">Back to portfolio</Link>
         <div className="wrapper">
       <Header/>
       <MainContent/>
        <Footer/>
        </div>
       </>
    )
}