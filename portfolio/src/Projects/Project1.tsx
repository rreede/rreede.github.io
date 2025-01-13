import { NavLink } from 'react-router'
import './project1.css'
import data from './Real-estate-files/real-estate-list.json' 

export default function Project1() {
    return (
        <div className="project-1">

            <header className='real-estate-header'>
                <h2>Real-estate</h2>
                <nav className='real-estate-nav'>
                    <NavLink to="/">Back to portfolio</NavLink>
                    <NavLink to="/project-1/apartments">Apartments</NavLink>
                    <NavLink to="/project-1/houses">Houses</NavLink>
                </nav>
            </header>
           
            <div className="real-estate-container">

           {data.map((item: any) => {
                return(
                    <div className="real-estate-item" key={item.id}>
                        <img className='real-estate-img' src={item.image} />
                
                        <h3>{item.name}</h3>
                        <h3>{item.price}</h3>
                        <p>{item.description}</p>
                        <NavLink to={`real-estate/${item.id}`}>See more</NavLink>
                    </div>
                )
           })}

</div>
        </div>
    )
}

