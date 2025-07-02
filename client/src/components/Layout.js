import React, { useState } from 'react';
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
  gap: '0.5rem',
  whiteSpace: 'nowrap'
};

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false);

  const sidebarWidth = collapsed ? '70px' : '180px';

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
        width: sidebarWidth,
        minWidth: sidebarWidth,
        maxWidth: sidebarWidth,
        backgroundColor: colors.surface,
        borderRight: `1px solid ${colors.border}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: collapsed ? 'center' : 'flex-start',
        boxSizing: 'border-box',
        transition: 'width 0.3s ease'
      }}>
        {/* Toggle Button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          style={{
            background: 'none',
            border: 'none',
            color: colors.primary,
            fontSize: '1.5rem',
            margin: '1rem',
            cursor: 'pointer',
            alignSelf: collapsed ? 'center' : 'flex-end'
          }}
        >
          ☰
        </button>

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
        {!collapsed && (
          <h2 style={{
            margin: 0,
            fontSize: '1.2rem',
            color: colors.appTitle,
            alignSelf: 'center',
            fontFamily: 'Georgia, serif'
          }}>
            {config.appName}
          </h2>
        )}

        {/* Navigation */}
        <nav style={{
          marginTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          alignItems: collapsed ? 'center' : 'flex-start',
          paddingLeft: collapsed ? 0 : '1rem'
        }}>
          <Link to="/" style={linkStyle}>
            <FiHome />
            {!collapsed && 'Home'}
          </Link>
          <Link to="/expense-table" style={linkStyle}>
            <FiTable />
            {!collapsed && 'Expense Table'}
          </Link>
          <Link to="/expense/1" style={linkStyle}>
            <FiFileText />
            {!collapsed && 'Expense Detail'}
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
            {!collapsed && 'Sign Out'}
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
