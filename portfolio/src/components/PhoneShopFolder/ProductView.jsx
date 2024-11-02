import { useParams } from "react-router-dom";
import Phones from './phones.json';
import Header from "./Header";
import Footer from "./Footer";

export default function ProductView() {
    const { id } = useParams();

    // Find the product with the matching id
    const Product = Phones.find((product) => product.id == id);

    return (
        <>

        <Header/>
            {Product ? (
                <div>
                    <img className='product-view-img' src={`/phone-images/${Product.img}`} alt="" />
                    <h1>{Product.name}</h1>
                    <p>{Product.description}</p>
                    {/* Add more details here as needed */}

                    <button>Add to shopping cart</button>
                </div>
            ) : (
                <p>Product not found</p>
            )}

            <Footer/>

        </>
    );
}