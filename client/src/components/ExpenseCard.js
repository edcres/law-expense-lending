import React from 'react';
import { useNavigate } from 'react-router-dom';
import colors from '../styles/theme';

export default function ExpenseCard({ expense, onAdvance }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/expense/${expense.id}`)}
      style={{
        backgroundColor: colors.surface,
        border: `1px solid ${colors.border}`,
        borderRadius: '6px',
        margin: '0.5rem 0',
        padding: '0.5rem',
        cursor: 'pointer'
      }}
    >
      <strong style={{ color: colors.textPrimary }}>{expense.name}</strong>
      <div style={{ color: colors.textSecondary }}>
        ${expense.amount.toFixed(2)}<br />
        {expense.matter_display_name}<br />
        Created: {new Date(expense.created_at).toLocaleDateString()}<br />
        Funded by LOC: {expense.funded_by_loc ? "Yes" : "No"}
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation(); // prevent navigation
          onAdvance(expense.id);
        }}
        style={{
          marginTop: '0.5rem',
          backgroundColor: colors.primary,
          border: 'none',
          color: '#fff',
          padding: '0.3rem 0.6rem',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Move to next status
      </button>
    </div>
  );
}
