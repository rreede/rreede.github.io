import Header from "./Header";
import Footer from "./Footer";
import phones from './phones.json'


export default function FavoritesView() {


    const favorites = (localStorage.getItem('favoritesLocalStorage')) || [];

    const shoppingCartArray = [];

    function addToShoppingCart(id) {

        shoppingCartArray.push(id);

        localStorage.setItem('shoppingCartLocalStorage', shoppingCartArray);

        console.log(localStorage.getItem('shoppingCartLocalStorage'));

    }

    const favoriteItems = phones.filter(item=>favorites.includes(item.id)).map(item=> (


        <div className="favoritesContainer" key={item.id}>
        <img src={`/phone-images/${item.img}`} alt={item.name} />
        <div className="info">
        <p>{item.name}</p>
        <strong>{item.price}$</strong>
        <button onClick={()=> addToShoppingCart(item.id)} className='addToShoppingCart'>Add to shopping cart</button>
        </div>
     </div>

    ));
       


    return(
        <>


       <Header/>
       <main>
        <div className="wrapper">
        <h1>Favorites</h1>

        {favoriteItems.length > 0 ? favoriteItems :  <p>No favorites yet!</p>}
        </div>
       </main>
           
            <Footer/>
        </>
    )
}