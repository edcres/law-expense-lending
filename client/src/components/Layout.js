import React from 'react';
import { Link } from 'react-router-dom';
import colors from '../styles/theme';

export default function Layout({ children }) {
  return (
    <div style={{ backgroundColor: colors.background, minHeight: '100vh' }}>
      <nav style={{ padding: '1rem', backgroundColor: colors.surface }}>
        <Link to="/" style={{ marginRight: '1rem', color: colors.primary }}>Home</Link>
        <Link to="/expense-table" style={{ marginRight: '1rem', color: colors.primary }}>Expense Table</Link>
        <Link to="/expense/1" style={{ color: colors.primary }}>Expense Detail</Link>
      </nav>

      <main style={{ padding: '1rem', color: colors.textPrimary }}>
        {children}
      </main>
    </div>
  );
}
