import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import colors from '../styles/theme';

export default function Layout() {
  return (
    <div style={{
      backgroundColor: colors.background,
      color: colors.textPrimary,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: "'Segoe UI', sans-serif"
    }}>
      {/* Header */}
      <header style={{
        padding: '1rem',
        backgroundColor: colors.surface,
        borderBottom: `1px solid ${colors.border}`
      }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem', color: colors.primary }}>
          Fund Stream
        </h1>
      </header>

      {/* Navigation Bar */}
      <nav style={{
        padding: '0.5rem 1rem',
        backgroundColor: colors.surface,
        borderBottom: `1px solid ${colors.border}`
      }}>
        <Link to="/" style={{ marginRight: '1rem', color: colors.primary, textDecoration: 'none' }}>
          Home
        </Link>
        <Link to="/expense-table" style={{ marginRight: '1rem', color: colors.primary, textDecoration: 'none' }}>
          Expense Table
        </Link>
        <Link to="/expense/1" style={{ color: colors.primary, textDecoration: 'none' }}>
          Expense Detail
        </Link>
      </nav>

      {/* Main Content */}
      <main style={{
        padding: '2rem',
        flex: 1
      }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer style={{
        padding: '1rem',
        textAlign: 'center',
        backgroundColor: colors.surface,
        borderTop: `1px solid ${colors.border}`,
        color: colors.textSecondary
      }}>
        &copy; {new Date().getFullYear()} Expense App. All rights reserved.
      </footer>
    </div>
  );
}
