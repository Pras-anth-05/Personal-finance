function TransactionItem({ transaction, onDeleteTransaction }) {
  return (
    <li className={`transaction-item ${transaction.type}`}>
      <div>
        <p className="transaction-description">{transaction.description}</p>
        <p className="transaction-meta">
          {transaction.type === 'income' ? 'Income' : 'Expense'}
        </p>
      </div>

      <div className="transaction-actions">
        <span className="transaction-amount">
          {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
        </span>
        <button type="button" onClick={() => onDeleteTransaction(transaction.id)}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
