import React, { useEffect, useState } from 'react';
import ExpenseCard from '../components/ExpenseCard';

const statusOrder = [
  "Pending",
  "Marked for Request",
  "Requested",
  "Funded",
  "Paid Off"
];

export default function Home() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    setExpenses([
      {
        id: 1,
        name: "E-043298",
        amount: 500,
        matter_display_name: "John vs Smith",
        funded_by_loc: false,
        created_at: "2024-12-01T12:00:00Z",
        status: "Pending"
      },
      {
        id: 2,
        name: "E-043299",
        amount: 1000,
        matter_display_name: "Miller vs Co.",
        funded_by_loc: true,
        created_at: "2024-12-05T09:00:00Z",
        status: "Requested"
      }
    ]);
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
