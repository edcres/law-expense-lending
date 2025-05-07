import React from 'react';

export default function ExpenseCard({ expense, onAdvance }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <strong>{expense.name}</strong> — ${expense.amount.toFixed(2)}
      <div>{expense.matter_display_name}</div>
      <div>Created: {new Date(expense.created_at).toLocaleDateString()}</div>
      <div>Funded by LOC: {expense.funded_by_loc ? "Yes" : "No"}</div>
      <button onClick={() => onAdvance(expense.id)}>Move to next status</button>
    </div>
  );
}
