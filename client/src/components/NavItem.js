import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import colors from '../styles/theme';

export default function NavItem({ to, icon, label, collapsed }) {
  const [hover, setHover] = useState(false);
  const location = useLocation();

  const isActive = location.pathname === to;

  const baseStyle = {
    color: isActive ? colors.primary : colors.textPrimary,
    textDecoration: 'none',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    width: '100%',
    borderRadius: '4px',
    backgroundColor: hover
      ? colors.hoverBackground || '#f0f0f0'
      : isActive
      ? colors.activeBackground || '#e0e0e0'
      : 'transparent',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease'
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
