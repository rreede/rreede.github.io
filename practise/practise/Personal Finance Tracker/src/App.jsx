
import { useState } from 'react';
import './App.css'

function App() {

  const [expenses, setExpense] = useState([]);
  const [amount, setAmount] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    setExpense([...expenses, parseFloat(amount)])
    setAmount("")

  }


  return (
    <>
    <h1>Personal Finance Tracker</h1>

    <h2>Add expense</h2>
    <form onSubmit={handleSubmit}>
          <label htmlFor="expenseAmount"></label>
        <input type="text" value={amount} id='expenseAmount' onChange={(e)=> setAmount(e.target.value)}></input>
      <button type="submit">Add</button>
    </form>

    <ul>
{expenses.map((expense, index) => (

  <li key={index}>{expense}</li>
))}
</ul>

    </>


  )

 

}

export default App
