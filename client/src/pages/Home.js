import React from 'react';
import ExpenseCard from '../components/ExpenseCard';
import { useExpenses, useExpenseDispatch } from '../context/ExpenseContext';
import { getStatusOrder } from '../api/salesforce';
import colors from '../styles/theme';

export default function Home() {
  const { expenses } = useExpenses();
  const dispatch = useExpenseDispatch();
  const statusOrder = getStatusOrder();

  const moveToNextStatus = (id) => {
    const expense = expenses.find(e => e.id === id);
    if (!expense) return;

    const nextIndex = statusOrder.indexOf(expense.status) + 1;
    if (nextIndex < statusOrder.length) {
      const updated = { ...expense, status: statusOrder[nextIndex] };
      dispatch({ type: 'UPDATE_EXPENSE', payload: updated });
    }
  };

  return (
    <div style={{
      backgroundColor: colors.background,
      color: colors.textPrimary,
      minHeight: '100vh',
      padding: '1rem'
    }}>
      <h2>Expense Dashboard</h2>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', overflowX: 'auto' }}>
        {statusOrder.map((status) => {
          const filtered = expenses.filter(e => e.status === status);
          const totalAmount = filtered.reduce((sum, e) => sum + e.amount, 0);

          return (
            <div key={status} style={{
              flex: '1 1 0',
              backgroundColor: colors.card,
              border: `1px solid ${colors.border}`,
              borderRadius: '8px',
              padding: '1rem',
              minWidth: '220px'
            }}>
              <h4 style={{ textAlign: 'center', color: colors.secondary }}>{status}</h4>
              <p style={{ textAlign: 'center', color: colors.textSecondary }}>
                {filtered.length} item{filtered.length !== 1 ? 's' : ''}<br />
                ${totalAmount.toFixed(2)} total
              </p>

              {filtered.map((expense) => (
                <ExpenseCard
                  key={expense.id}
                  expense={expense}
                  onAdvance={moveToNextStatus}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
