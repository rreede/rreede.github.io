import Header from "./Header"
import Footer from "./Footer"
import { Link } from "react-router-dom"

export default function FinalView() {

    return(
        <>
        <Header/>
        <main>

            <div className="wrapper">
            

                    <h1>Final View</h1>


                    <Link to='/'><button>Payment</button></Link>
            </div>
            </main>

            <Footer/>
        </>
    )

}