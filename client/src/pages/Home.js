import React, { useEffect, useState } from 'react';
import ExpenseCard from '../components/ExpenseCard';
import { getExpenses, getStatusOrder } from '../api/salesforce';
import colors from '../styles/theme';

export default function Home() {
  const [expenses, setExpenses] = useState([]);
  const [statusOrder, setStatusOrder] = useState([]);

  useEffect(() => {
    getExpenses().then(setExpenses);
    setStatusOrder(getStatusOrder());
  }, []);

  const moveToNextStatus = (id) => {
    setExpenses((prev) =>
      prev.map((e) => {
        if (e.id === id) {
          const nextIndex = statusOrder.indexOf(e.status) + 1;
          if (nextIndex < statusOrder.length) {
            return { ...e, status: statusOrder[nextIndex] };
          }
        }
        return e;
      })
    );
  };

  return (
    <div style={{
      backgroundColor: colors.background,
      color: colors.textPrimary,
      minHeight: '100vh',
      padding: '1rem'
    }}>
      <h2 style={{ marginBottom: '1rem' }}>Expense Dashboard</h2>

      <div style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'flex-start',
        overflowX: 'auto'
      }}>
        {statusOrder.map((status) => {
          const filtered = expenses.filter((e) => e.status === status);
          const totalAmount = filtered.reduce((sum, e) => sum + e.amount, 0);

          return (
            <div
              key={status}
              style={{
                flex: '1 1 0',
                backgroundColor: colors.card,
                border: `1px solid ${colors.border}`,
                borderRadius: '8px',
                padding: '1rem',
                minWidth: '220px'
              }}
            >
              <h4 style={{
                textAlign: 'center',
                color: colors.secondary,
                marginBottom: '0.5rem'
              }}>{status}</h4>

              <p style={{
                textAlign: 'center',
                color: colors.textSecondary,
                fontSize: '0.9rem',
                marginBottom: '1rem'
              }}>
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
