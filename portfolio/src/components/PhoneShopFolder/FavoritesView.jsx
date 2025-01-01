import Header from "./Header";
import Footer from "./Footer";
import phones from "./phones.json";

export default function FavoritesView() {
    // Retrieve favorites from localStorage and parse as an array
    const favorites = JSON.parse(localStorage.getItem("favoritesLocalStorage")) || [];

    // Retrieve the shopping cart from localStorage or initialize as an empty array
    const shoppingCartArray = JSON.parse(localStorage.getItem("shoppingCartLocalStorage")) || [];

    // Add item to the shopping cart
    function addToShoppingCart(id) {
        if (!shoppingCartArray.includes(id)) {
            shoppingCartArray.push(id);
            localStorage.setItem("shoppingCartLocalStorage", JSON.stringify(shoppingCartArray));
            console.log("Updated Shopping Cart:", localStorage.getItem("shoppingCartLocalStorage"));
        }
    }

    // Remove item from favorites
    function removeFromFavourites(id) {
        const updatedFavorites = favorites.filter((favoriteId) => favoriteId !== id);
        localStorage.setItem("favoritesLocalStorage", JSON.stringify(updatedFavorites));
        window.location.reload(); // Optionally trigger a reload to reflect the updated state
    }

    // Filter and map favorite items
    const favoriteItems = phones
        .filter((item) => favorites.includes(item.id))
        .map((item) => (
            <div className="favoritesContainer" key={item.id}>
                <img src={`/phone-images/${item.img}`} alt={item.name} />
                <div className="info">
                    <p>{item.name}</p>
                    <strong>{item.price}$</strong>
                    <button
                        onClick={() => addToShoppingCart(item.id)}
                        className="addToShoppingCart"
                    >
                        Add to shopping cart
                    </button>
                    <button
                        onClick={() => removeFromFavourites(item.id)}
                        className="removeFromFavorites"
                    >
                        Remove from favorites
                    </button>
                </div>
            </div>
        ));

    return (
        <>
            <Header />
            <main>
                <div className="wrapper">
                    <h1>Favorites</h1>
                    {favoriteItems.length > 0 ? favoriteItems : <p>No favorites yet!</p>}
                </div>
            </main>
            <Footer />
        </>
    );
}
