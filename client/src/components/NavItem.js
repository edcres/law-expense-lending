import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import colors from '../styles/theme';

export default function NavItem({ to, icon, label, collapsed }) {
  const [hover, setHover] = useState(false);
  const location = useLocation();

  const isActive = location.pathname === to;

  const baseStyle = {
    color: isActive ?  'black' : colors.textPrimary,
    textDecoration: 'none',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    width: '100%',
    borderRadius: '4px',
    backgroundColor: isActive
        ? colors.primary
        : hover
        ? colors.navHover
        : 'transparent',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    boxSizing: 'border-box'
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
