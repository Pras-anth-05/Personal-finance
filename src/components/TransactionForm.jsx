import { useState } from 'react'

function TransactionForm({ onAddTransaction }) {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    type: 'expense',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formData.description.trim() || !formData.amount) {
      return
    }

    onAddTransaction({
      description: formData.description.trim(),
      amount: Number(formData.amount),
      type: formData.type,
    })

    setFormData({ description: '', amount: '', type: 'expense' })
  }

  return (
    <section className="card form-card">
      <div className="section-title">
        <h2>Add transaction</h2>
        <span>Quick entry</span>
      </div>

      <form onSubmit={handleSubmit} className="transaction-form">
        <label>
          <span>Description</span>
          <input
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="e.g. Freelance project"
            required
          />
        </label>

        <label>
          <span>Amount</span>
          <input
            name="amount"
            type="number"
            min="0"
            step="0.01"
            value={formData.amount}
            onChange={handleChange}
            placeholder="0.00"
            required
          />
        </label>

        <label>
          <span>Type</span>
          <select name="type" value={formData.type} onChange={handleChange}>
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </label>

        <button type="submit">Save transaction</button>
      </form>
    </section>
  )
}

export default TransactionForm
