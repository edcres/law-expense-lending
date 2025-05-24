import React, { useEffect, useState } from 'react';
import colors from '../styles/theme';
import { getExpenses } from '../api/salesforce';

export default function ExpenseTable() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    getExpenses().then(setExpenses);
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
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${colors.border}` }}>
                {expense.matter_display_name}
              </td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${colors.border}` }}>
                {expense.status}
              </td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${colors.border}` }}>
                -
              </td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${colors.border}` }}>
                {new Date(expense.created_at).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
