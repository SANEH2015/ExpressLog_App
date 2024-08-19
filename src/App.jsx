import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [transactions, setTransactions] = useState([
    { name: 'Salary', amount: 15000, type: 'income' },
    { name: 'Grocery', amount: 1500, type: 'expense' },
  ]);

  const [newTransactionName, setNewTransactionName] = useState('');
  const [newTransactionAmount, setNewTransactionAmount] = useState('');
  const [newTransactionType, setNewTransactionType] = useState('expense');

  const handleAddTransaction = () => {
    const newTransaction = {
      name: newTransactionName,
      amount: parseFloat(newTransactionAmount),
      type: newTransactionType,
    };

    setTransactions([...transactions, newTransaction]);
    setNewTransactionName('');
    setNewTransactionAmount('');
    setNewTransactionType('expense');
  };

  const calculateBalance = () => {
    let balance = 0;
    transactions.forEach((transaction) => {
      if (transaction.type === 'income') {
        balance += transaction.amount;
      } else {
        balance -= transaction.amount;
      }
    });
    return balance;
  };

  return (
    <div className="container">
      <h1>History of your transaction</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.name}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="balance">
        <p>Balance: {calculateBalance()}</p>
      </div>
      <h2>Add a new transaction</h2>
      <div className="form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={newTransactionName}
          onChange={(e) => setNewTransactionName(e.target.value)}
        />
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={newTransactionAmount}
          onChange={(e) => setNewTransactionAmount(e.target.value)}
        />
        <label htmlFor="type">Type:</label>
        <select
          id="type"
          value={newTransactionType}
          onChange={(e) => setNewTransactionType(e.target.value)}
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        <button onClick={handleAddTransaction}>Add a transaction</button>
      </div>
    </div>
  );
}


export default App
