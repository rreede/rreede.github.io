import { NavLink } from 'react-router';
import './Project2.css';
import { useState } from 'react';

export default function Project2() {

const [activeTab, setActiveTab] = useState(2);

 function AddSpending() {
        return (
            <div>
               
            </div>
        )
 }

 function Component2() {
    return (
        <div>
             <p>💵 Recent spending</p> <br/> <br/>
           <div className="finance-spending-item">
                <h4>Food</h4>
                <p>8 packs of chips</p>
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
                <NavLink to="/">Back to portfolio</NavLink><br/><br/>
                <div className="nav">
                    <button onClick={()=> setActiveTab(2)}>Spendings</button>
                    <button onClick={()=> setActiveTab(1)}>Gains</button>
                </div>
            </nav>

    {activeTab === 1 && <AddSpending/>}
    {activeTab === 2 && <Component2/>}

            </header>
        </div>
    )
}

