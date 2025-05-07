import React from 'react';
import ExpenseCard from './ExpenseCard';

export default function ExpenseList({ status, expenses, onAdvance }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <h3>{status}</h3>
      {expenses.length === 0 && <p>No expenses</p>}
      {expenses.map((expense) => (
        <ExpenseCard key={expense.id} expense={expense} onAdvance={onAdvance} />
      ))}
    </div>
  );
}
