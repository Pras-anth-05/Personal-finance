import { useMemo, useState } from 'react'
import './App.css'
import Summary from './components/Summary'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'

const initialTransactions = [
  { id: 1, description: 'Salary', amount: 2500, type: 'income' },
  { id: 2, description: 'Groceries', amount: 120, type: 'expense' },
  { id: 3, description: 'Freelance design', amount: 450, type: 'income' },
]

function App() {
  const [transactions, setTransactions] = useState(initialTransactions)

  const summary = useMemo(() => {
    const income = transactions
      .filter((transaction) => transaction.type === 'income')
      .reduce((sum, transaction) => sum + transaction.amount, 0)

    const expense = transactions
      .filter((transaction) => transaction.type === 'expense')
      .reduce((sum, transaction) => sum + transaction.amount, 0)

    return {
      income,
      expense,
      balance: income - expense,
    }
  }, [transactions])

  const handleAddTransaction = (transaction) => {
    setTransactions((current) => [
      ...current,
      { ...transaction, id: Date.now() },
    ])
  }

  const handleDeleteTransaction = (id) => {
    setTransactions((current) => current.filter((transaction) => transaction.id !== id))
  }

  return (
    <main className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Personal finance</p>
        </div>
      </header>

      <Summary
        income={summary.income}
        expense={summary.expense}
        balance={summary.balance}
      />

      <div className="content-grid">
        <TransactionForm onAddTransaction={handleAddTransaction} />
        <TransactionList
          transactions={transactions}
          onDeleteTransaction={handleDeleteTransaction}
        />
      </div>
    </main>
  )
}

export default App
