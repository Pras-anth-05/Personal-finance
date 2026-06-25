function Summary({ income, expense, balance }) {
  return (
    <section className="summary-card">
      <div>
        <p>Income</p>
        <strong>${income.toFixed(2)}</strong>
      </div>
      <div>
        <p>Expenses</p>
        <strong>${expense.toFixed(2)}</strong>
      </div>
      <div>
        <p>Balance</p>
        <strong>${balance.toFixed(2)}</strong>
      </div>
    </section>
  )
}

export default Summary
