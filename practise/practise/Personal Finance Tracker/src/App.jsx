import { useState } from 'react';
import './App.css';

function App() {
  const [expenses, setExpense] = useState([]);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('food');

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpense([...expenses, { amount: parseFloat(amount), category, description }]);
    setAmount('');
  };

  const handleDelete = (id) => {
    // Filter out the expense with the matching index
    setExpense(expenses.filter((_, index) => index !== id));
  };

  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <>
      <h1>Personal Finance Tracker</h1>

      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="expenseAmount"></label>
        <input
          type="text"
          placeholder='Amount'
          value={amount}
          id="expenseAmount"
          onChange={(e) => setAmount(e.target.value)}
        />

        <input type='text' placeholder='Description' value={description} onChange={(e)=> setDescription(e.target.value)}></input>

        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="food">Food</option>
          <option value="electronics">Electronics</option>
          <option value="rent">Rent</option>
        </select>

        <button type="submit" className='add-expense-btn'>Add</button>
      </form>

      <table className='all-expenses-table'>
        <tr>
          <th>Amount</th>
          <th>Description</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
        
        {expenses.map((expense, index) => (
          <tr key={index}>
            <td>{expense.amount} $</td>
            <td>{expense.category}</td>
            <td>{expense.description}</td>
            {' '}
            <button onClick={() => handleDelete(index)} className='delete-expense-btn'>Delete</button>
            </tr>
        ))}
        
      </table>

      <h3>Total Expenses: {totalExpenses.toFixed(2)} $</h3>
    </>
  );
}

export default App;
