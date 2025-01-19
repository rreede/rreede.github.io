import { NavLink } from 'react-router';
import './Project2.css';
import { useState } from 'react';


export default function Project2() {

const [activeTab, setActiveTab] = useState('one');

 function AddSpending() {
        return (
            <div>
               
            </div>
        )
 }

 function Component2() {
    return (
        <div>
           <div className="finance-spending-item">
           <p>💵 Recent spendings</p> <br/>
                <h4>Food</h4>
                <p>$20</p>
                <button>Delete</button>
                <button>Update</button>
                
            </div>
        </div>
    )
}
    return (
        <div className="project-1">
            <header>
                 <h2>Personal Finance Tracker</h2>
            <nav>
                <NavLink to="/">Back to portfolio</NavLink>
                <button onClick={()=> setActiveTab('2')}>Spendings</button>
                <button onClick={()=> setActiveTab('1')}>Gains</button>
            </nav>

    {activeTab === '1' && <AddSpending/>}
    {activeTab === '2' && <Component2/>}

            </header>
    
        </div>
    )
}

