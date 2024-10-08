import PhonesView from "./PhonesView"
import ShoppingCart from "./ShoppingCart"


export default function Main() {

    return(
        <main>
            <div className="wrapper">
                <ShoppingCart/>
                <PhonesView/>
            </div>
        </main>
    )

}