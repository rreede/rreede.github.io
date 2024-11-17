import PhonesList from "./PhonesList"
import { useState } from "react";

export default function MainContent() {

const [filter,setFilter] = useState('All');



    return(
        <>
        <main>
        <div className="filter-products">

            <button onClick={()=> setFilter('All')}>All</button>
            <button onClick={()=> setFilter('phone')}>Phones</button>
            <button onClick={()=> setFilter('tablet')}>Tablets</button>
            <button onClick={()=> setFilter('tv')}>TVS</button>
        </div>

            <div className="phonesListContainer">
             <PhonesList filtering={filter}/>
            </div>
       </main>
        </>
    )
}