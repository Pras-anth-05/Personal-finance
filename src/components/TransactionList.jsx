import TransactionItem from './TransactionItem'

function TransactionList({ transactions, onDeleteTransaction }) {
  return (
    <section className="card list-card">
      <div className="section-title">
        <h2>Recent transactions</h2>
        <span>{transactions.length} entries</span>
      </div>

      {transactions.length === 0 ? (
        <p className="empty-state">No transactions yet. Add your first one above.</p>
      ) : (
        <ul className="transaction-list">
          {transactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              onDeleteTransaction={onDeleteTransaction}
            />
          ))}
        </ul>
      )}
    </section>
  )
}

export default TransactionList
