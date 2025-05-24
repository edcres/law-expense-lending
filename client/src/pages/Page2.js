import React, { useEffect, useState } from 'react';
import colors from '../styles/theme';

export default function Page2() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    setExpenses([
      {
        id: 1,
        name: "E-043298",
        client_name: "John Doe",
        status: "Requested",
        created_at: "2024-12-01T12:00:00Z",
        interest_accrued: null
      },
      {
        id: 2,
        name: "E-043299",
        client_name: "Susan Miller",
        status: "Funded",
        created_at: "2024-12-05T09:00:00Z",
        interest_accrued: null
      }
    ]);
  }, []);

  return (
    <div style={{
      backgroundColor: colors.background,
      color: colors.textPrimary,
      minHeight: '100vh',
      padding: '1rem'
    }}>
      <h2>Expense Table</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: `1px solid ${colors.border}`, padding: '0.5rem' }}>Client Name</th>
            <th style={{ borderBottom: `1px solid ${colors.border}`, padding: '0.5rem' }}>Status</th>
            <th style={{ borderBottom: `1px solid ${colors.border}`, padding: '0.5rem' }}>Interest Accrued</th>
            <th style={{ borderBottom: `1px solid ${colors.border}`, padding: '0.5rem' }}>Expense Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${colors.border}` }}>{expense.client_name}</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${colors.border}` }}>{expense.status}</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${colors.border}` }}>{expense.interest_accrued ?? '-'}</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${colors.border}` }}>{new Date(expense.created_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
