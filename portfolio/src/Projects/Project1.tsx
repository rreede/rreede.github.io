import { NavLink } from 'react-router'
import './project1.css'
import data from './Real-estate-files/real-estate-list.json' 
import Header  from './Project1-files/Header'

export default function Project1() {
    return (
        <div className="project-1">
           <Header/>
            <div className="real-estate-container">

           {data.map((item: any) => {
                return(
                    <div className="real-estate-item" key={item.id}>
                        <div className='real-estate-img' style={{
                            backgroundImage: `url(${item.image})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                height: '200px',
 }}>
                        </div>

                        <div className="property-info">
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <p>{item.m2} m²</p>
                        </div>
                        <button  className='add-to-favorites-btn'>Add to favorites</button>
                       
                        <NavLink to={`real-estate/${item.id}`}><button>See more</button></NavLink>
                    </div>
                )
           })}
</div>
        </div>
    )
}

