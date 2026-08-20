import "./ExpenseList.css";

function ExpenseList({ expenses }) {
  return (
    <div className="expense-list">
      <h2>Expense List</h2>

      {expenses.length === 0 ? (
        <p className="no-data">No expenses added yet.</p>
      ) : (
        expenses.map((item) => (
          <div className="expense-card" key={item._id}>
            <div>
              <h3> {item.category}</h3>
              <p> {item.description}</p>
              <p> {new Date(item.date).toLocaleDateString()}</p>
            </div>

            <div className="amount">
              ₹ {item.amount}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ExpenseList;