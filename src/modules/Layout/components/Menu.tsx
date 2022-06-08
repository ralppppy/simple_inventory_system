import React from "react";
import { Link } from "react-router-dom";

interface MenuProps {
  label: string;
  isNew?: boolean;
  icon?: string;
  active?: boolean;
  to: string;
}

const Menu: React.FC<MenuProps> = ({ label, isNew, to, icon, active }) => {
  return (
    <li className="nav-item">
      <Link to={to} className={`nav-link ${active && "active"}`}>
        <i className={`nav-icon ${icon}`}></i>
        <p>
          {label}
          {isNew && <span className="right badge badge-danger">New</span>}
        </p>
      </Link>
    </li>
  );
};

export default Menu;
