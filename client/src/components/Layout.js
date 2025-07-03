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
} from 'react-icons/fi';

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

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      fontFamily: "'Segoe UI', sans-serif",
      backgroundColor: colors.background,
      color: colors.textPrimary
    }}>
      
      {/* Animated Sidebar Container */}
      <div style={{
        width: collapsed ? '70px' : '180px',
        backgroundColor: colors.surface,
        borderRight: `1px solid ${colors.border}`,
        overflow: 'hidden',
        transition: 'width 0.3s ease'
      }}>
        
        {/* Sidebar Content */}
        <aside style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: collapsed ? 'center' : 'flex-start',
          boxSizing: 'border-box',
          height: '100vh'
        }}>
          {/* Toggle Button */}
          <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: collapsed ? 'center' : 'flex-start'
          }}>
            <button
              onClick={() => setCollapsed(!collapsed)}
              style={{
                background: 'none',
                border: 'none',
                color: colors.primary,
                fontSize: '1.5rem',
                margin: '1rem',
                cursor: 'pointer'
              }}
            >
              ☰
            </button>
          </div>

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
            alignItems: collapsed ? 'center' : 'flex-start'
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

            <hr style={{
              margin: '1.5rem 0',
              width: '100%',
              borderColor: colors.border
            }} />

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
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' , minWidth: 0}}>
        <main style={{flex: 1 }}>
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
