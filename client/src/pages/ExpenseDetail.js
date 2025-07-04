import React from 'react';
import { useParams } from 'react-router-dom';
import { useExpenses } from '../context/ExpenseContext';
import colors from '../styles/theme';

export default function ExpenseDetail() {
  const { id } = useParams();
  const { expenses } = useExpenses();

  const expense = expenses.find(e => e.id === parseInt(id));
  const history = expense?.status_history || [];
  const interest = expense?.interest_accrued_by_day || [];

  if (!expense) {
    return (
      <div style={{
        backgroundColor: colors.background,
        color: colors.textPrimary,
        padding: '1rem'
      }}>
        <h2>Expense Not Found</h2>
      </div>
    );
  }

  return (
    <div style={{
      backgroundColor: colors.background,
      color: colors.textPrimary,
      minHeight: '100vh',
      padding: '1rem'
    }}>
      <h2>Expense: {expense.name}</h2>
      <h4>Client: {expense.matter_display_name}</h4>
      <h4>Status: {expense.status}</h4>

      <section style={{ marginTop: '2rem' }}>
        <h3>Status History</h3>
        <ul>
          {history.map((entry, idx) => (
            <li key={idx}>
              {entry.stage} on {new Date(entry.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h3>Interest Accrued</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ borderBottom: `1px solid ${colors.border}`, padding: '0.5rem' }}>Date</th>
              <th style={{ borderBottom: `1px solid ${colors.border}`, padding: '0.5rem' }}>Change ($)</th>
            </tr>
          </thead>
          <tbody>
            {interest.map((entry, idx) => (
              <tr key={idx}>
                <td style={{ padding: '0.5rem', borderBottom: `1px solid ${colors.border}` }}>
                  {new Date(entry.date).toLocaleDateString()}
                </td>
                <td style={{ padding: '0.5rem', borderBottom: `1px solid ${colors.border}` }}>
                  {entry.change.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
