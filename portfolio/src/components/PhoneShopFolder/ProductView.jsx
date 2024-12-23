import { useParams } from "react-router-dom";
import Phones from './phones.json';
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductView() {
    const { id } = useParams();

    // Find the product with the matching id
    const Product = Phones.find((product) => product.id == id);


    const shoppingCartArray = [];

    function addToShoppingCart(id) {

        shoppingCartArray.push(id);

        localStorage.setItem('shoppingCartLocalStorage', shoppingCartArray);

        console.log(localStorage.getItem('shoppingCartLocalStorage'));

    }

    const [addedVisible, setAddedVisible] = useState(false);

    const test = () => {
     

        setAddedVisible(true);
        setTimeout(() => {
                     setAddedVisible(false);
                    }, 3000);

    }


    return (
        <>

        <Header/>

        <main>

            <div className="wrapper">
                {Product ? (
                <div className='productViewContainer'>
                    <div> <img className='product-view-img' src={`/phone-images/${Product.img}`} alt="" /></div>
                   
                    <div className='productDescription'>
                    <h1>{Product.name}</h1>
                    <h1>{Product.specs}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac massa lacus. Ut dolor nulla, eleifend egestas suscipit at, tempus ut erat. Cras mattis dolor ipsum, a posuere ante scelerisque ornare. Donec interdum volutpat posuere. Donec condimentum justo et accumsan iaculis. Vestibulum finibus ex vestibulum ornare efficitur. Nulla tempor erat ac ornare aliquet. Nunc commodo fermentum lacinia. Vivamus pretium elit mollis nisi luctus pellentesque. Morbi sem mi, facilisis in risus a, molestie porttitor tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

                   {addedVisible && <div className="product-added-to-shopping-cart">Succesfully added to shopping cart <Link to='../phone-shop/shopping-cart-view-1'>Go to shopping cart</Link></div>} 
                   

                    <button onClick={()=> {addToShoppingCart(id); test()} } className='addToShoppingCart'>Add to shopping cart</button>
                    </div>
                </div>
            ) : (
                <p>Product not found</p>
            )}
</div>
</main>

            <Footer/>

        </>
    );
}