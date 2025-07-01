import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import colors from '../styles/theme';
import config from '../config';
import logo from '../assets/logo.png';
import {
  FiHome,
  FiTable,
  FiFileText,
  FiLogOut
} from 'react-icons/fi'; // Feather icons

const linkStyle = {
  color: colors.primary,
  textDecoration: 'none',
  fontSize: '1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem' // adds space between icon and text
};

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
        width: '240px',
        minWidth: '240px',
        maxWidth: '240px',
        backgroundColor: colors.surface,
        padding: '1rem',
        borderRight: `1px solid ${colors.border}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '1rem',
        boxSizing: 'border-box'
      }}>
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          style={{
            height: '70px',
            width: '70px',
            objectFit: 'contain',
            flexShrink: 0,
            alignSelf: 'center'
          }}
        />

        {/* App Name */}
        <h2 style={{
          margin: 0,
          fontSize: '1.2rem',
          color: colors.primary,
          alignSelf: 'center'
        }}>
          {config.appName}
        </h2>

        {/* Navigation */}
        <nav style={{
          marginTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem'
        }}>
          <Link to="/" style={linkStyle}>
            <FiHome />
            Home
          </Link>
          <Link to="/expense-table" style={linkStyle}>
            <FiTable />
            Expense Table
          </Link>
          <Link to="/expense/1" style={linkStyle}>
            <FiFileText />
            Expense Detail
          </Link>

          {/* Divider */}
          <hr style={{
            margin: '1.5rem 0',
            width: '100%',
            borderColor: colors.border
          }} />

          {/* Sign Out Button */}
          <button
            onClick={() => alert('Signing out...')}
            style={{
              ...linkStyle,
              background: 'none',
              border: 'none',
              padding: 0,
              textAlign: 'left',
              cursor: 'pointer'
            }}
          >
            <FiLogOut />
            Sign Out
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <main style={{ padding: '0 1rem 1rem 1rem', flex: 1 }}>
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
