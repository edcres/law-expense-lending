import React, { useEffect, useState } from 'react';
import ExpenseCard from '../components/ExpenseCard';
import { getExpenses, getStatusOrder } from '../api/salesforce';

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
    <div>
      <h2>Expense Dashboard</h2>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        {statusOrder.map((status) => (
          <div
            key={status}
            style={{
              flex: 1,
              border: '1px solid #ccc',
              borderRadius: '4px',
              padding: '0.5rem',
              background: '#f9f9f9',
              minHeight: '300px'
            }}
          >
            <h4 style={{ textAlign: 'center' }}>{status}</h4>
            {expenses
              .filter((e) => e.status === status)
              .map((expense) => (
                <ExpenseCard
                  key={expense.id}
                  expense={expense}
                  onAdvance={moveToNextStatus}
                />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
