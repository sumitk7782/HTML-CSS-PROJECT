import "./Summary.css";

function Summary({ expenses }) {
  const total = expenses.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  const count = expenses.length;

  return (
    <div className="summary">
      <div className="summary-card total-card">
        <h3> Total Expense</h3>
        <h2>₹ {total}</h2>
      </div>

      <div className="summary-card count-card">
        <h3> Total Records</h3>
        <h2>{count}</h2>
      </div>
    </div>
  );
}

export default Summary;