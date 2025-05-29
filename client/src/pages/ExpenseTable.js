import React from 'react';
import { useNavigate } from 'react-router-dom';
import colors from '../styles/theme';
import { useExpenses } from '../context/ExpenseContext';

export default function ExpenseTable() {
  const { expenses } = useExpenses();
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: colors.background,
        color: colors.textPrimary,
        minHeight: '100vh',
        padding: '1rem'
      }}
    >
      <h2>Expense Table</h2>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: '1rem'
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                borderBottom: `1px solid ${colors.border}`,
                padding: '0.5rem',
                textAlign: 'left'
              }}
            >
              Client Name
            </th>
            <th
              style={{
                borderBottom: `1px solid ${colors.border}`,
                padding: '0.5rem',
                textAlign: 'left'
              }}
            >
              Status
            </th>
            <th
              style={{
                borderBottom: `1px solid ${colors.border}`,
                padding: '0.5rem',
                textAlign: 'left'
              }}
            >
              Interest Accrued
            </th>
            <th
              style={{
                borderBottom: `1px solid ${colors.border}`,
                padding: '0.5rem',
                textAlign: 'left'
              }}
            >
              Expense Date
            </th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr
              key={expense.id}
              onClick={() => navigate(`/expense/${expense.id}`)}
              style={{
                cursor: 'pointer',
                borderBottom: `1px solid ${colors.border}`
              }}
            >
              <td style={{ padding: '0.5rem' }}>
                {expense.matter_display_name}
              </td>
              <td style={{ padding: '0.5rem' }}>{expense.status}</td>
              <td style={{ padding: '0.5rem' }}>-</td>
              <td style={{ padding: '0.5rem' }}>
                {new Date(expense.created_at).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
