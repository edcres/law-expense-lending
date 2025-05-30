import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import colors from '../styles/theme';
import config from '../config';
import logo from '../assets/logo.png';

export default function Layout() {
  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      fontFamily: "'Segoe UI', sans-serif",
      backgroundColor: colors.background,
      color: colors.textPrimary
    }}>
      {/* Sidebar */}
      <aside style={{
        width: '220px',
        backgroundColor: colors.surface,
        padding: '1.5rem 1rem',
        borderRight: `1px solid ${colors.border}`,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <img src={logo} alt="Logo" style={{ height: '40px' }} />
        <h2 style={{ margin: 0, fontSize: '1.2rem', color: colors.primary }}>
          {config.appName}
        </h2>

        <nav style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <Link to="/" style={{ color: colors.primary, textDecoration: 'none' }}>Home</Link>
          <Link to="/expense-table" style={{ color: colors.primary, textDecoration: 'none' }}>Expense Table</Link>
          <Link to="/expense/1" style={{ color: colors.primary, textDecoration: 'none' }}>Expense Detail</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <main style={{ padding: '2rem', flex: 1 }}>
          <Outlet />
        </main>

        <footer style={{
          padding: '1rem',
          textAlign: 'center',
          backgroundColor: colors.surface,
          borderTop: `1px solid ${colors.border}`,
          color: colors.textSecondary
        }}>
          &copy; {new Date().getFullYear()} {config.appName}. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
