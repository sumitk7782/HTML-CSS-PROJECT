import { useState } from "react";
import API from "../services/api";

function ExpenseForm({ fetchExpenses }) {
  const [expense, setExpense] = useState({
    category: "",
    amount: "",
    description: "",
    date: "",
  });

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/expenses", expense);
    setExpense({
      category: "",
      amount: "",
      description: "",
      date: "",
    });
    fetchExpenses();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="category"
        placeholder="Category"
        value={expense.category}
        onChange={handleChange}
      />
      <input
        name="amount"
        type="number"
        placeholder="Amount"
        value={expense.amount}
        onChange={handleChange}
      />
      <input
        name="description"
        placeholder="Description"
        value={expense.description}
        onChange={handleChange}
      />
      <input
        name="date"
        type="date"
        value={expense.date}
        onChange={handleChange}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;