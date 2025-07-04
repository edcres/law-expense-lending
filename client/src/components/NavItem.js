import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import colors from '../styles/theme';

export default function NavItem({ to, icon, label, collapsed }) {
  const [hover, setHover] = useState(false);
  const location = useLocation();

  const isActive = location.pathname === to;

  const baseStyle = {
    color: colors.textPrimary,
    textDecoration: 'none',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    width: '100%',
    borderRadius: '4px',
    color: isActive ? '#ffffff' : colors.textPrimary,
    backgroundColor: isActive
        ? colors.primary
        : hover
        ? '#3C3C52'
        : 'transparent',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    boxSizing: 'border-box' // ✅ This makes sure padding stays inside 100% width
  };

  return (
    <Link
      to={to}
      style={baseStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {icon}
      {!collapsed && label}
    </Link>
  );
}
