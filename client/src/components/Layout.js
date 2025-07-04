import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import colors from '../styles/theme';
import config from '../config';
import logo from '../assets/logo.png';
import {
  FiHome,
  FiTable,
  FiFileText,
  FiLogOut,
  FiMenu
} from 'react-icons/fi';
import NavItem from '../components/NavItem';

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
      {/* Sidebar */}
      <div
        style={{
          width: collapsed ? '70px' : '180px',
          minWidth: collapsed ? '70px' : '180px',
          maxWidth: collapsed ? '70px' : '180px',
          backgroundColor: colors.surface,
          borderRight: `1px solid ${colors.border}`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: collapsed ? 'center' : 'flex-start',
          boxSizing: 'border-box',
          transition: 'width 0.3s ease'
        }}
      >
        {/* Collapse Button */}
        <button
          onClick={() => setCollapsed(prev => !prev)}
          style={{
            background: 'none',
            border: 'none',
            color: colors.textPrimary,
            padding: '1rem',
            cursor: 'pointer',
            alignSelf: collapsed ? 'center' : 'flex-start'
          }}
        >
          <FiMenu size={20} />
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

        {/* Divider 1 */}
          <hr style={{
            margin: '1.5rem 0',
            alignSelf: 'center',
            width: 'calc(100% - 2rem)',
            borderColor: colors.border
          }} />


        {/* Navigation */}
        <nav style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          width: '100%',
          boxSizing: 'border-box',
          padding: collapsed ? '0' : '0 0.5rem'
        }}>
          <NavItem to="/" icon={<FiHome />} label="Home" collapsed={collapsed} />
          <NavItem to="/expense-table" icon={<FiTable />} label="Expense Table" collapsed={collapsed} />
          <NavItem to="/expense/1" icon={<FiFileText />} label="Expense Detail" collapsed={collapsed} />

          {/* Divider 2 */}
          <hr style={{
            margin: '1.5rem 0',
            alignSelf: 'center',
            width: 'calc(100% - 1rem)',
            borderColor: colors.border
          }} />

          {/* Sign Out */}
          <NavItem
            to="/sign-out"
            icon={<FiLogOut />}
            label="Sign Out"
            collapsed={collapsed}
          />
        </nav>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <main style={{ flex: 1 }}>
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
