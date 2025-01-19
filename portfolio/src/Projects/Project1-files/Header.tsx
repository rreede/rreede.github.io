import { NavLink } from "react-router"

export default function Header() {
    return (
        <header className='real-estate-header'>
        <h2>Real-estate</h2>
        <nav className='real-estate-nav'>
            <NavLink to="/">Back to portfolio</NavLink>
            <NavLink to='./favorites'>Favorites</NavLink>
            <NavLink to="/project-1/apartments">Apartments</NavLink>
            <NavLink to="/project-1/houses">Houses</NavLink>
        </nav>
    </header>

    )
}